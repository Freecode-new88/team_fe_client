'use client';
import { useEffect, useState } from 'react';
import styles from '../f168.module.css';
import {
  type PromoItem,
  fetchClaimedData,
  getCaptchaBySite, type Captcha,
  verifyPromoCode, submitUserClaim,
} from '@/services/promo.service';
import CaptchaModal, { type CaptchaStep } from './captcha';
import { SiteKey, siteOptions } from '@/config/site';
import { showClaimSuccess } from '@/components/ShowClaimSuccess';
import { Gift } from 'lucide-react';
import { getSocket } from '@/services/socket';
import { maskUser, rand0to30 } from '@/utils/random';
import LastUpdated from "./LastUpdated";
import PreditScoreBox from "./PreditScoreBox";
import Image from "next/image";
import { safeSessionStorage } from "@/utils/storage";

/* ---------- constants ---------- */
const RECENT_VISIBLE = 5;
const CLAIM_HIGHLIGHT_MS = 15_000;
const CLAIMS_BOOTSTRAPPED_KEY = 'claims_bootstrapped_v1';

const maskCode = (code: string) => {
  if (!code) return '';
  return `xxxx${code.slice(-4)}`;
};

const onlyTime = (ts: string) => {
  if (typeof ts !== 'string' || ts.trim() === '') return '';
  const s = ts.replace('T', ' ');
  return s.length >= 19 ? s.slice(11, 19) : s.slice(11);
};

export default function Promo() {
  const [claimData, setClaimData]             = useState<PromoItem[]>([]);
  const [live, setLive]                       = useState(0);
  const [now, setNow]                         = useState<number>(0);
  const [claimHighlights, setClaimHighlights] = useState<Record<string, number>>({});

  // form (Box 1)
  const [promoCode, setPromoCode]       = useState('');
  const [selectedSite, setSelectedSite] = useState<SiteKey>('F168');
  const [errorMsg, setErrorMsg]         = useState<string | null>(null);

  // captcha flow
  const [captchaData, setCaptchaData]       = useState<Captcha | null>(null);
  const [captchaOpen, setCaptchaOpen]       = useState(false);
  const [modalStep, setModalStep]           = useState<CaptchaStep>('captcha');
  const [noteMsg, setNoteMsg]               = useState<string | null>(null);
  const [verifying, setVerifying]           = useState(false);
  const [verifiedDetail, setVerifiedDetail] = useState<{
    promo_code: string; point: number; time: string; min_point: number; max_point: number;
  } | null>(null);
  const [account, setAccount]       = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg]   = useState<string | null>(null);

  /* session cleanup */
  useEffect(() => {
    const clear = () => safeSessionStorage.remove(CLAIMS_BOOTSTRAPPED_KEY);
    window.addEventListener('beforeunload', clear);
    return () => window.removeEventListener('beforeunload', clear);
  }, []);

  /* socket */
  useEffect(() => {
    const socket = getSocket();

    const onClaimCreated = (payload: PromoItem) => {
      const normalized: PromoItem = {
        ...payload,
        user: maskUser({ user: payload.user }),
        time: payload.time?.includes('T') ? payload.time : (payload.time?.replace(' ', 'T') ?? ''),
        emoji: rand0to30(),
      };
      setClaimData(prev => [normalized, ...prev].slice(0, 8));
      const k = `${normalized.user}|${normalized.code}|${normalized.time}`;
      setClaimHighlights(old => ({ ...old, [k]: Date.now() + CLAIM_HIGHLIGHT_MS }));
    };

    const onPresenceStats = (data: Record<string, number>) => {
      setLive(Object.values(data).reduce((a, b) => a + b, 0));
    };

    socket.on('claim:created', onClaimCreated);
    socket.on('presence:stats', onPresenceStats);
    return () => {
      socket.off('claim:created', onClaimCreated);
      socket.off('presence:stats', onPresenceStats);
    };
  }, []);

  /* bootstrap recent claims */
  useEffect(() => {
    let alive = true;
    (async () => {
      const res = await fetchClaimedData();
      if (!alive || !res.ok) return;
      const masked = res.data.map(it => ({ ...it, user: maskUser({ user: it.user }) }));
      setClaimData(masked.slice(0, 8));
      safeSessionStorage.set(CLAIMS_BOOTSTRAPPED_KEY, '1');
    })();
    return () => { alive = false; };
  }, []);

  /* prune highlights */
  useEffect(() => {
    const id = setInterval(() => {
      setClaimHighlights(old => {
        let changed = false;
        const next: Record<string, number> = {};
        for (const [k, exp] of Object.entries(old)) {
          if (exp > now) next[k] = exp;
          else changed = true;
        }
        return changed ? next : old;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [now]);

  useEffect(() => { setNow(Date.now()); }, []);

  /* ---------- handlers (Box 1 form) ---------- */
  const handleCheckNow = async () => {
    setErrorMsg(null);
    setNoteMsg(null);
    setCaptchaData(null);
    setVerifiedDetail(null);
    setSubmitMsg(null);
    setModalStep('captcha');
    if (!promoCode.trim()) {
      setErrorMsg('กรุณากรอกโค้ดโปรโมชันของคุณ');
      return;
    }
    const res = await getCaptchaBySite(selectedSite);
    if (res.ok) {
      setCaptchaData(res.data);
      setCaptchaOpen(true);
    } else {
      setErrorMsg(res.error);
    }
  };

  const handleCaptchaContinue = async (captchaCode: string) => {
    if (!captchaData?.token) {
      setNoteMsg('ไม่พบโทเค็นแคปชา กรุณาปิดหน้าต่างนี้แล้วลองใหม่อีกครั้ง');
      return;
    }
    setVerifying(true);
    setNoteMsg(null);
    const result = await verifyPromoCode({
      promoCode: promoCode.trim(),
      siteKey: selectedSite,
      captchaCode,
      token: captchaData.token,
    });
    setVerifying(false);
    if (result.ok) {
      setVerifiedDetail(result.data.detail);
      setNoteMsg(null);
      setModalStep('review');
      setAccount('');
    } else {
      setNoteMsg(result.error);
    }
  };

  const handleSubmitClaim = async () => {
    setSubmitMsg(null);
    if (!verifiedDetail) { setSubmitMsg('ไม่พบข้อมูลโปรโมชันที่ยืนยันแล้ว กรุณาตรวจสอบอีกครั้ง'); return; }
    if (!account.trim()) { setSubmitMsg('กรุณากรอกบัญชีผู้ใช้ของคุณ'); return; }
    setSubmitting(true);
    const res = await submitUserClaim({ siteKey: selectedSite, promoId: verifiedDetail.promo_code, account: account.trim() });
    setSubmitting(false);
    if (res.ok) {
      setCaptchaOpen(false);
      setPromoCode('');
      setAccount('');
      await showClaimSuccess({ points: verifiedDetail?.point, soundUrl: '/sounds/confetti-pop.mp3', onClose: () => setSubmitMsg(null) });
    } else {
      setSubmitMsg(res.error);
    }
  };

  const handleCaptchaClose = () => {
    setCaptchaOpen(false);
    setPromoCode('');
    setCaptchaData(null);
    setVerifiedDetail(null);
    setAccount('');
    setNoteMsg(null);
    setSubmitMsg(null);
    setVerifying(false);
    setSubmitting(false);
    setModalStep('captcha');
  };

  /* ---------- render ---------- */
  return (
    <section className={styles.topSection}>
      <div className={styles.sectionHeading}>
        <h1 className={styles.promoTitle}>
          รวมโปรโมชัน <strong>เครดิตฟรี</strong> และ <strong>โค้ดเครดิตฟรี</strong> F168 และ MK8 — อัปเดตทุก 15 นาที
        </h1>
      </div>
      <div className="ml-[30px]">
        <LastUpdated />
      </div>

      <div className={styles.bannerGrid}>
        {/* Box 1 — Promo code checker (LEFT 6/12) */}
        <div className={`${styles.box1} ${styles.leftBox}`}>
          <div className="relative">
            <Image
              src="/images/left1434.jpg"
              alt="ภาพประกอบโปรโมชัน"
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className={`${styles.pokerArt} w-full h-auto object-cover rounded-xl`}
            />
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-20">
              Live: {live}
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <h2 className={`${styles.neontext} px-3 py-1 rounded text-white text-xl font-semibold`}>
                รับโค้ดฟรีทุกวัน
              </h2>
            </div>
          </div>
          <div className={styles.formStack}>
            <label htmlFor="promo-code" className="sr-only">กรอกโค้ดโปรโมชัน</label>
            <input
              id="promo-code"
              className={styles.input}
              placeholder="กรอกโค้ดโปรโมชัน"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <label htmlFor="promo-site" className="sr-only">เลือกเว็บไซต์</label>
            <select
              id="promo-site"
              className={styles.select}
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value as SiteKey)}
            >
              {siteOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <button
              type="button"
              className={styles.button}
              onClick={handleCheckNow}
              aria-label="ตรวจสอบเลย"
            >
              <Gift aria-hidden />
              ตรวจสอบเลย
            </button>
            {errorMsg && <div className={`text-red-700 ${styles.errorMsg}`}>{errorMsg}</div>}
          </div>
        </div>

        {/* Box 2 — Invite Rewards (RIGHT 6/12) */}
        <div className={`${styles.box2} ${styles.rightBox} flex flex-col justify-between w-full overflow-hidden`} style={{ justifySelf: 'stretch' }}>
          <div className="flex flex-col gap-1.5 flex-1 min-h-0">
            {/* Header */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>🏅</span>
                <div>
                  <h2 className="text-base font-bold text-yellow-300 leading-tight">ชวนเพื่อน รับรางวัล</h2>
                  <p className="text-xs text-gray-400">รวมรางวัลกว่า <span className="text-yellow-300 font-semibold">2,000฿+</span> ต่อรอบ</p>
                </div>
              </div>
            </div>

            {/* TOP 3 podium */}
            <div className="flex gap-2">
              {([
                { icon: '🥇', rank: '1st', prize: '500฿', color: 'text-yellow-300', ring: 'ring-yellow-500/40' },
                { icon: '🥈', rank: '2nd', prize: '350฿', color: 'text-gray-200',   ring: 'ring-gray-500/30'   },
                { icon: '🥉', rank: '3rd', prize: '200฿', color: 'text-amber-400',  ring: 'ring-amber-600/30'  },
              ] as const).map(({ icon, rank, prize, color, ring }) => (
                <div key={rank} className={`flex-1 text-center rounded-xl py-1.5 bg-white/5 ring-1 ${ring}`}>
                  <div className="text-xl">{icon}</div>
                  <div className={`font-bold text-sm ${color}`}>{prize}</div>
                </div>
              ))}
            </div>

            {/* Ranks 4–100 ranges */}
            <div className="grid grid-cols-3 gap-1 text-[11px] text-center">
              {([
                ['4',     '130฿'],
                ['5',     '80฿'],
                ['6–10',  '40฿'],
                ['11–20', '20฿'],
                ['21–50', '10฿'],
                ['51–100','5฿'],
              ] as const).map(([rank, prize]) => (
                <div key={rank} className="bg-white/5 border border-white/10 rounded-lg py-1 text-gray-300">
                  <span className="text-gray-500">{rank}.</span> {prize}
                </div>
              ))}
            </div>

            {/* Schedule */}
            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
              📅 รอบ พฤ–อา &nbsp;·&nbsp; แจกรางวัล{' '}
              <span className="text-green-400 font-semibold">วันพุธ</span>
              &nbsp;·&nbsp; ดูอันดับ{' '}
              <a href="https://t.me/rewards789" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
                @rewards789
              </a>
            </p>
          </div>

          {/* CTA — pinned bottom */}
          <a
            href="https://t.me/th789b_bot?start=web"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline flex-shrink-0 w-full"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '6px',
              padding: '8px 12px',
              fontSize: '13px',
              fontWeight: 800,
              color: '#fff',
              borderRadius: '10px',
              background: 'linear-gradient(90deg, #f64f59, #c471ed, #12c2e9)',
              whiteSpace: 'nowrap',
            }}
          >
            🏅 ร่วมชวนเพื่อน รับรางวัล — MK8
          </a>

        </div>
      </div>

      {/* Box 3 */}
      <div className="grid grid-cols-12 gap-4 w-full p-1 md:p-6">
        {/* Left: recent claims table */}
        <div className="col-span-12 md:col-span-6">
          <div className="relative overflow-x-auto rounded-xl bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4">
            <h2 className="text-lg font-bold mb-2">📊 โค้ดที่ใช้ล่าสุด</h2>
            <table className="w-full border-collapse table-fixed text-center text-cyan-400 text-xs sm:text-sm md:text-base">
              <colgroup>
                {[{ width: '18%' }, { width: '18%' }, { width: '16%' }, { width: '14%' }, { width: '18%' }].map((s, i) => (
                  <col key={i} style={s} />
                ))}
              </colgroup>
              <thead>
                <tr className="text-white uppercase font-bold border-b-2 border-fuchsia-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
                  <th className="py-2 sm:py-3">ผู้ใช้</th>
                  <th className="py-2 sm:py-3">โค้ด</th>
                  <th className="py-2 sm:py-3">แต้ม</th>
                  <th className="py-2 sm:py-3">เว็บไซต์</th>
                  <th className="py-2 sm:py-3">เวลา</th>
                </tr>
              </thead>
              <tbody>
                {claimData.length === 0
                  ? new Array(RECENT_VISIBLE).fill(null).map((_, i) => (
                      <tr key={`filler-${i}`}>
                        <td colSpan={5} className="py-3 text-transparent">•</td>
                      </tr>
                    ))
                  : claimData.map((r, i) => {
                      const k = `${r.user}|${r.code}|${r.time}`;
                      const isHot = !!(claimHighlights[k] && claimHighlights[k] > Date.now());
                      return (
                        <tr
                          key={`${r.user}-${r.code}-${r.time}-${i}`}
                          className={`transition-all duration-500 border-b border-cyan-500/60 ${isHot ? 'bg-orange-900/20 animate-pulse' : ''}`}
                        >
                          <td className="relative py-2 sm:py-3 px-1 sm:px-2 text-white font-medium text-left text-[10px] sm:text-xs md:text-sm">
                            <div className="flex items-center gap-1 sm:gap-2">
                              {isHot && r.emoji && (
                                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                  <img
                                    src="https://file.781243555.com/emoji/fire.webp"
                                    alt="fire"
                                    className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(245,80,91,0.75)]"
                                  />
                                  <img
                                    src={r.emoji}
                                    alt={`ได้รับ ${r.point} แต้มแล้ว`}
                                    className="absolute left-4 sm:left-5 w-5 sm:w-6 h-5 sm:h-6 object-contain"
                                  />
                                </div>
                              )}
                              <span>{r.user}</span>
                            </div>
                          </td>
                          <td className="py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm">{maskCode(r.code)}</td>
                          <td className="py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm">ได้รับ {r.point} แต้ม</td>
                          <td className="py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm">{r.site}</td>
                          <td className="py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm">{onlyTime(r.time)}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Score Predict */}
        <div className="col-span-12 md:col-span-6">
          <div className="relative h-full">
            <PreditScoreBox />
          </div>
        </div>
      </div>

      {/* Captcha / claim modal */}
      <CaptchaModal
        open={captchaOpen}
        onClose={handleCaptchaClose}
        step={modalStep}
        captchaUrl={captchaData?.captchaUrl ?? null}
        note={noteMsg}
        busy={verifying}
        onContinue={handleCaptchaContinue}
        detail={verifiedDetail}
        account={account}
        onAccountChange={setAccount}
        submitBusy={submitting}
        submitMsg={submitMsg}
        onSubmit={handleSubmitClaim}
      />
    </section>
  );
}

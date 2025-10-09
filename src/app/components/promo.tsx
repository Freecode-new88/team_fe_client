'use client';
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from '../f168.module.css';
import copy from 'copy-to-clipboard';
import {
  fetchPromoCodes, type PromoItem,
  fetchClaimedData,
  getCaptchaBySite, type Captcha,
  verifyPromoCode, submitUserClaim,
} from '@/services/promo.service';
import CaptchaModal, { type CaptchaStep } from './captcha';
import { SiteKey, siteOptions } from '@/config/site';
import { showClaimSuccess } from '@/components/ShowClaimSuccess';
import { Copy, Gift } from 'lucide-react';
import { getSocket } from '@/services/socket';
import { maskUser, rand0to30 } from '@/utils/random';

const LeftImageWithGifts = dynamic(
  () => import("@/components/LeftImageWithGifts").then(m => m.LeftImageWithGifts),
  { ssr: false } // 👈 ปิด SSR
);

/* ---------- constants / helpers ---------- */
const VISIBLE_COUNT = 6;
const RECENT_VISIBLE = 5;
const CLAIM_HIGHLIGHT_MS = 15_000;  // 15s
const CLAIMS_BOOTSTRAPPED_KEY = 'claims_bootstrapped_v1';

function usePanelChangeFlag(deps: any[]) {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setFlag(true);
    const t = setTimeout(() => setFlag(false), 1000);
    return () => clearTimeout(t);
  }, deps);
  return flag;
}

function upsertPromos(prev: PromoItem[], incoming: PromoItem[]) {
  const map = new Map(prev.map((p) => [p.code, p]));
  for (const it of incoming) map.set(it.code, it);
  const merged = Array.from(map.values());
  merged.sort(
    (a, b) =>
      new Date(b.time.replace(' ', 'T')).getTime() -
      new Date(a.time.replace(' ', 'T')).getTime()
  );
  return merged;
}


export default function Promo() {
  const [start, setStart] = useState(0);
  const [recentStart, setRecentStart] = useState(0);
  // countdown
  const getSecondsToHourEnd = () => {
    const now = new Date();
    const nextHour = new Date(now);

    //Run Every 30 minutes
    if (now.getMinutes() < 30) {
      nextHour.setMinutes(30, 0, 0);
    } else {
      nextHour.setHours(now.getHours() + 1, 0, 0, 0);
    }

    //nextHour.setMinutes(60, 0, 0); // ตั้งเป็นนาทีที่ 60 วินาที 0 => ต้นชั่วโมงถัดไป
    return Math.max(0, Math.floor((nextHour.getTime() - now.getTime()) / 1000));
    /*const nextMinute = new Date(now);
    nextMinute.setSeconds(60, 0); // ตั้งเป็นวินาที 60, มิลลิวินาที 0 => ต้นนาทีถัดไป
    return Math.max(0, Math.floor((nextMinute.getTime() - now.getTime()) / 1000));*/
  };

  const [secondsLeft, setSecondsLeft] = useState(getSecondsToHourEnd());
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? getSecondsToHourEnd() : s - 1));
    }, 1000);
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, []);

  const isFinal5 = secondsLeft <= 5;
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  // data
  const [promoData, setPromoData] = useState<PromoItem[]>([]);
  const [claimData, setClaimData] = useState<PromoItem[]>([]);

  // form
  const [promoCode, setPromoCode] = useState('');
  const [selectedSite, setSelectedSite] = useState<SiteKey>('F168');

  // copy
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // captcha / claim flow
  const [captchaData, setCaptchaData] = useState<Captcha | null>(null);
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [modalStep, setModalStep] = useState<CaptchaStep>('captcha');
  const [noteMsg, setNoteMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [live, setLive] = useState(0);
  const [verifiedDetail, setVerifiedDetail] = useState<{
    promo_code: string;
    point: number;
    time: string;
    min_point: number;
    max_point: number;
  } | null>(null);
  const [account, setAccount] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);

  // 🔥 track which claim-rows are "new" (highlight for 15s)
  const [claimHighlights, setClaimHighlights] = useState<Record<string, number>>({});

  useEffect(() => {
    const clearOnUnload = () => {
      try {
        sessionStorage.removeItem(CLAIMS_BOOTSTRAPPED_KEY);
      } catch { }
    };
    window.addEventListener('beforeunload', clearOnUnload);
    return () => window.removeEventListener('beforeunload', clearOnUnload);
  }, []);

  // Socket For Box 2 and 3
  useEffect(() => {
    const socket = getSocket();

    // === Box 2: add new promo to TOP, then rotation continues as usual ===
    const onPromoCreated = (payload: PromoItem) => {
      setPromoData(prev => upsertPromos(prev, [payload])); // กันซ้ำ + แทรกบนสุด
      setStart(0);
    };

    // === Box 3: add claim to TOP, highlight, reset view, If code === promo_code, change status
    const onClaimCreated = (payload: PromoItem) => {
      const normalized: PromoItem = {
        ...payload,
        user: maskUser({ user: payload.user }),
        time: payload.time.includes("T") ? payload.time : payload.time.replace(" ", "T"),
        emoji: rand0to30()
      };

      setClaimData(prev => [normalized, ...prev].slice(0, 5));

      const k = `${normalized.user}|${normalized.code}|${normalized.time}`;
      setClaimHighlights(old => ({ ...old, [k]: Date.now() + CLAIM_HIGHLIGHT_MS }));

      // sync receiveCount ใน Box 2 ตามโค้ดที่ถูกเคลม
      setPromoData(prev => prev.map(p => {
        if (p.code !== normalized.code) return p;
        const total = p.receiveTotal ?? payload.receiveTotal;
        let next = Math.max(p.receiveCount ?? 0, payload.receiveCount ?? (p.receiveCount ?? 0) + 1);
        if (typeof total === 'number' && total > 0) next = Math.min(next, total);
        return {
          ...p,
          receiveCount: next,
          ...(p.receiveTotal == null && typeof payload.receiveTotal === 'number'
            ? { receiveTotal: payload.receiveTotal }
            : {})
        };
      }));

    };

    // === Bulk: promo:new (จาก backend ส่งเป็น PromoItem[] อยู่แล้ว)
    const onPromoNew = (items: PromoItem[]) => {
      //console.log(items);
      setPromoData(prev => {
        const merged = upsertPromos(prev, items);    // กันซ้ำตาม code
        return merged.slice(0, 6);                   // (ตัวเลือก) จำกัดสูงสุด 100 แถว
      });
    };

    const onPresenceStats = (data: Record<string, number>) => {
      const total = Object.values(data).reduce((a, b) => a + b, 0);
      setLive(total);
      //console.log(JSON.stringify(data ?? {}));
    };

    socket.on("promo:created", onPromoCreated);
    socket.on("claim:created", onClaimCreated);
    socket.on("presence:stats", onPresenceStats);
    socket.on("promo:new", onPromoNew);

    return () => {
      socket.off("promo:created", onPromoCreated);
      socket.off("claim:created", onClaimCreated);
      socket.off("presence:stats", onPresenceStats);
      socket.off("promo:new", onPromoNew);
    };
  }, []);

  /* ----- Get Promo codes ----- */
  useEffect(() => {
    let alive = true;
    const poll = async () => {
      const res = await fetchPromoCodes();
      if (!alive || !res.ok) return;
      //console.log(res.data);
      setPromoData(prev => upsertPromos(prev, res.data));
    };
    poll();
    return () => {
      alive = false;
    };
  }, []);

  /* ----- Get Recent claims ----- */
  useEffect(() => {
    let alive = true;
    /* if (sessionStorage.getItem(CLAIMS_BOOTSTRAPPED_KEY) === '1') {
       return;
     }*/

    (async () => {
      const res = await fetchClaimedData();
      if (!alive || !res.ok) return;

      const masked = res.data.map(it => ({
        ...it,
        user: maskUser({ user: it.user })
      }));

      setClaimData(masked.slice(0, 5));
      sessionStorage.setItem(CLAIMS_BOOTSTRAPPED_KEY, '1');
    })();

    return () => { alive = false; };
  }, []);

  // prune expired highlights every 1s
  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now();
      setClaimHighlights((old) => {
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
  }, []);

  /* computed views */
  const sortedCodes = useMemo(() => {
    const list = promoData ?? [];
    return [...list].sort((a, b) => {
      const bt = Date.parse(b.time.includes("T") ? b.time : b.time.replace(" ", "T")) || 0;
      const at = Date.parse(a.time.includes("T") ? a.time : a.time.replace(" ", "T")) || 0;
      return bt - at;
    });
  }, [promoData]);

  const visibleRows: PromoItem[] = useMemo(() => {
    const total = sortedCodes.length;
    if (total === 0) return [];                    // ← ว่างก็คืน []

    if (total <= VISIBLE_COUNT) return sortedCodes; // ← ไม่เติมแถว

    // หมุนหน้าต่างยาว VISIBLE_COUNT
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => sortedCodes[(start + i) % total]);
  }, [sortedCodes]);

  /* keep panel pulse for the carousel stepping */
  const box2Changed = usePanelChangeFlag([start]);
  const box3Changed = usePanelChangeFlag([recentStart]);

  /* helpers */
  const onlyTime = (ts: string) => {
    const d = new Date(ts);
    if (!Number.isNaN(d.getTime())) {
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      return `${hh}:${mm}:${ss}`;
    }
    const s = ts.replace('T', ' ');
    return s.length >= 19 ? s.slice(11, 19) : s.slice(11);
  };

  const handleCopy = (code: string, rowIndex: number) => {
    copy(code);
    setCopiedIndex(rowIndex);
    setTimeout(() => setCopiedIndex(null), 1400);
  };

  /* captcha flow */
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
    if (!verifiedDetail) {
      setSubmitMsg('ไม่พบข้อมูลโปรโมชันที่ยืนยันแล้ว กรุณาตรวจสอบอีกครั้ง');
      return;
    }
    if (!account.trim()) {
      setSubmitMsg('กรุณากรอกบัญชีผู้ใช้ของคุณ');
      return;
    }

    setSubmitting(true);
    const res = await submitUserClaim({
      siteKey: selectedSite,
      promoId: verifiedDetail.promo_code,
      account: account.trim(),
    });
    setSubmitting(false);

    if (res.ok) {
      setCaptchaOpen(false);
      setPromoCode('');
      setAccount('');
      await showClaimSuccess({
        points: verifiedDetail?.point,
        soundUrl: '/sounds/confetti-pop.mp3',
        onClose: () => {
          setSubmitMsg(null);
        },
      });
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

  const timeNode = (
    <strong
      key={secondsLeft}
      className={
        `min-w-[72px] text-center tabular-nums font-mono font-bold
       transition-all duration-200
       ${isFinal5
          ? "text-red-500 drop-shadow-md animate-bounce scale-110"
          : "text-white"}`
      }
    >
      {mm}:{ss}
    </strong>
  );


  /* ---------- render ---------- */
  return (
    <section className={styles.topSection}>
      <div className={styles.sectionHeading}>
        <h1 className={styles.promoTitle}>แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย</h1>
      </div>

      <div className={styles.bannerGrid}>
        {/* Box 1 */}
        <div className={`${styles.box1} ${styles.leftBox}`}>
          <div className="relative">
            <img
              src="/images/left1.jpg"
              alt="ภาพประกอบโปรโมชัน"
              className={styles.pokerArt}
              draggable="false"
            />

            {/* ป้าย Live มุมขวาบน */}
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-20">
              Live: {live}
            </div>

            {/* ข้อความกลางภาพ */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <h2 className={`${styles.neontext} px-3 py-1 rounded text-white text-xl font-semibold`}>
                รับโค้ดฟรีทุกวัน
              </h2>
            </div>
            {/* <LeftImageWithGifts count={6} /> */}
          </div>
          <div className={styles.formStack}>
            <input
              className={styles.input}
              placeholder="กรอกโค้ดโปรโมชัน"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <select
              className={styles.select}
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value as SiteKey)}
            >
              {siteOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
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
            {errorMsg && <div className={`text-red-700 ${styles.errorMsg} `}>{errorMsg}</div>}
          </div>
        </div>

        {/* Box 2 */}
        <div className={`relative min-h-[160px] ${styles.box2} ${styles.rightBox} ${box2Changed ? `${styles.panelPulse} ${styles.panelPop}` : ""}`} >
          <table className={styles.table}>
            <colgroup>
              {[
                { width: "32%" },
                { width: "18%" },
                { width: "20%" },
                { width: "30%" },
              ].map((s, i) => (
                <col key={i} style={s} />
              ))}
            </colgroup>

            <thead>
              <tr>
                <th>โค้ด</th>
                <th>รับแล้ว</th>
                <th>สถานะ</th>
                <th>เว็บ</th>
              </tr>
            </thead>

            <tbody key={start} className={styles.tableBody}>
              {visibleRows.map((row, i) => {
                const now = new Date()
                const isEpire = now > new Date(row.time);

                return row ? (
                  <tr
                    key={`${row.code}-${i}`}
                    className={`${styles.tableRow} ${styles.rowEnter}`}
                  >
                    <td>
                      <div className={styles.codeCell}>
                        <span className={styles.codeText}>{row.code}</span>

                        <button
                          type="button"
                          className={`${styles.copyBtn} ${copiedIndex === i ? styles.copyBtnActive : ""
                            }`}
                          onClick={() => handleCopy(row.code, i)}
                          aria-label={`คัดลอก ${row.code}`}
                          title={copiedIndex === i ? "คัดลอกแล้ว!" : "คัดลอก"}
                        >
                          {copiedIndex === i ? (
                            <span className={styles.copiedLabel}>คัดลอกแล้ว</span>
                          ) : (
                            <Copy
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                              focusable="false"
                              className={styles.copyIcon}
                            />
                          )}
                        </button>
                      </div>
                    </td>

                    {/* รับแล้ว */}
                    <td className={row.receiveCount >= row.receiveTotal ? styles.claimExhausted : styles.readygreen}>
                      {`${row.receiveCount}/${row.receiveTotal}`}
                    </td>

                    {/* ใช้ค่าอังกฤษเดิมเพื่อกำหนดคลาส แต่แสดงผลเป็นไทย */}
                    <td
                      className={
                        (row.receiveCount >= row.receiveTotal || isEpire) ? styles.used : styles.readygreen
                      }
                    >
                      {row.receiveCount >= row.receiveTotal ? "ถูกใช้แล้ว" : isEpire ? "หมดอายุแล้ว" : "ใช้ได้"}
                    </td>

                    <td>{row.site}</td>
                  </tr>
                ) : (
                  <tr key={`filler-${i}`} className={`${styles.tableRow} ${styles.fillerRow}`}>
                    <td colSpan={4}>&nbsp;</td>
                  </tr>
                )
              }
              )}
            </tbody>
          </table>
          <div className="absolute left-3 right-3 bottom-3 flex items-center justify-center gap-2 h-10 rounded-lg text-red-200 backdrop-blur-sm
                transition-shadow duration-200
                {secondsLeft <= 5 ? 'shadow-[0_0_20px_rgba(255,0,0,.5)] animate-pulse' : ''}">
            <span className="text-red-500" aria-hidden>●</span>
            <span className="text-sm">โค้ดใหม่ในอีก</span>
            {timeNode}
          </div>
        </div>


        {/* Box 3 */}
        <div
          className={`${styles.box3} ${styles.fullBoxNoChrome} ${box3Changed ? `${styles.panelPulse} ${styles.panelPop}` : ""
            }`}
        >
          <table className={`${styles.table} ${styles.recentTable}`}>
            <colgroup>
              {[
                { width: "18%" },
                { width: "18%" },
                { width: "16%" },
                { width: "14%" },
                { width: "18%" },
              ].map((s, i) => (
                <col key={i} style={s} />
              ))}
            </colgroup>

            <thead>
              <tr>
                <th>ผู้ใช้</th>
                <th>โค้ด</th>
                <th>แต้ม</th>
                <th>เว็บไซต์</th>
                <th>เวลา</th>
              </tr>
            </thead>

            <tbody>
              {claimData.length === 0
                ? new Array(RECENT_VISIBLE).fill(null).map((_, i) => (
                  <tr key={`recent-filler-${i}`} className={styles.fillerRow}>
                    <td colSpan={5} />
                  </tr>
                ))
                : claimData.map((r, i) => {
                  const k = `${r.user}|${r.code}|${r.time}`;
                  const isHot = claimHighlights[k] && claimHighlights[k] > Date.now();
                  return (
                    <tr
                      key={`${r.user}-${r.code}-${r.time}-${i}`}
                      className={`${styles.rowEnter} ${isHot ? styles.flameRow : ""}`}
                    >
                      <td className={isHot ? styles.flameCell : ''}>
                        <span className={styles.userNameContainer}>
                          {
                            isHot && r.emoji && (
                              <span className={styles.flameBadge} aria-hidden>
                                {r.emoji && (
                                  <img
                                    src={`/emoji/${r.emoji}.webp`}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ width: '24px', height: '25px' }}
                                    alt=""
                                    className={styles.emojibadge}
                                  />
                                )}
                              </span>
                            )
                          }
                          {r.user}
                        </span>
                      </td>
                      <td>{r.code}</td>
                      <td>ได้รับ {r.point} แต้ม</td>
                      <td>{r.site}</td>
                      <td>{onlyTime(r.time)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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

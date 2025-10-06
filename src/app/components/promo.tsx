'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from '../f168.module.css';
import copy from 'copy-to-clipboard';
import {
  fetchPromoCodes, type PromoItem,
  fetchClaimedData, type ClaimItem,
  getCaptchaBySite, type Captcha,
  verifyPromoCode, submitUserClaim,
} from '@/services/promo.service';
import CaptchaModal, { type CaptchaStep } from './captcha';
import { SiteKey, siteOptions } from '@/config/site';
import { showClaimSuccess } from '@/components/ShowClaimSuccess';
import { Gift } from 'lucide-react';
import { getSocket } from '@/services/socket';

/* ---------- constants / helpers ---------- */
const VISIBLE_COUNT = 6;
const RECENT_VISIBLE = 5;
const CLAIM_HIGHLIGHT_MS = 15_000;  // 15s
const POLL_PROMO_MS = 50_000;       // 10s
const POLL_RECENT_MS = 30_000;      // 20s
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
  const map = new Map(prev.map((p) => [p.promo_code, p]));
  for (const it of incoming) map.set(it.promo_code, it);
  const merged = Array.from(map.values());
  merged.sort(
    (a, b) =>
      new Date(b.date.replace(' ', 'T')).getTime() -
      new Date(a.date.replace(' ', 'T')).getTime()
  );
  return merged;
}

function upsertClaims(prev: ClaimItem[], incoming: ClaimItem[], limit = 200) {
  const key = (c: ClaimItem) => `${c.user}|${c.code}|${c.time}`;
  const map = new Map(prev.map((c) => [key(c), c]));
  for (const it of incoming) map.set(key(it), it);
  const merged = Array.from(map.values());
  merged.sort(
    (a, b) =>
      new Date(b.time.replace(' ', 'T')).getTime() -
      new Date(a.time.replace(' ', 'T')).getTime()
  );
  return merged.slice(0, limit);
}

export default function Promo() {
  const [start, setStart] = useState(0);
  const [recentStart, setRecentStart] = useState(0);

  // data
  const [promoData, setPromoData] = useState<PromoItem[]>([]);
  const [claimData, setClaimData] = useState<ClaimItem[]>([]);

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
      } catch {}
    };
    window.addEventListener('beforeunload', clearOnUnload);
    return () => window.removeEventListener('beforeunload', clearOnUnload);
  }, []);

  // Socket For Box 2 and 3
  useEffect(() => {
    const socket = getSocket();

    // === Box 2: add new promo to TOP, then rotation continues as usual ===
    const onPromoCreated = (payload: PromoItem) => {
      setPromoData(prev => {
        const next = upsertPromos(prev, [payload]);
        return next;
      });

      setStart(0);
    };

    // === Box 3: add claim to TOP, highlight, reset view, If code === promo_code, change status
    type ClaimCreatedPayload = ClaimItem;

    const onClaimCreated = (payload: ClaimCreatedPayload) => {
      const normalized: ClaimItem = {
        ...payload,
        time: payload.time.includes('T') ? payload.time : payload.time.replace(' ', 'T'),
      };

      setClaimData(prev => upsertClaims([normalized, ...prev], []));

      const k = `${normalized.user}|${normalized.code}|${normalized.time}`;
      setClaimHighlights(old => ({ ...old, [k]: Date.now() + CLAIM_HIGHLIGHT_MS }));
      setRecentStart(0);

      // if Box 2 has this code and it's "Available", mark it "Used"
      setPromoData(prev => {
        console.log("Will mark as used");
        let changed = false;
        const next = prev.map(p => {
          if (p.promo_code === normalized.code && p.available === 'Available') {
            changed = true;
            return { ...p, available: 'Used' as PromoItem['available'] };
          }
          return p;
        });
        return changed ? next : prev;
      });
    };

    socket.on('promo:created', onPromoCreated);
    socket.on('claim:created', onClaimCreated);

    return () => {
      socket.off('promo:created', onPromoCreated);
      socket.off('claim:created', onClaimCreated);
    };
  }, []);

  /* ----- Get Promo codes ----- */
  useEffect(() => {
    let alive = true;

    const poll = async () => {
      const res = await fetchPromoCodes();
      if (!alive || !res.ok) return;
      console.log("Promo codes", res.data);
      setPromoData((prev) => upsertPromos(prev, res.data));
    };

    // initial + interval
    poll();
    const id = setInterval(poll, POLL_PROMO_MS);

    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  /* ----- Get Recent claims ----- */
  useEffect(() => {
    let alive = true;

    if (sessionStorage.getItem(CLAIMS_BOOTSTRAPPED_KEY) === '1') {
      return;
    }

    (async () => {
      const res = await fetchClaimedData();
      if (!alive || !res.ok) return;
      setClaimData(prev => upsertClaims(prev, res.data));
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
    return [...list].sort(
      (a, b) =>
        new Date(b.date.replace(' ', 'T')).getTime() -
        new Date(a.date.replace(' ', 'T')).getTime()
    );
  }, [promoData]);

  const sortedRecent = useMemo(() => {
    const list = claimData ?? [];
    const parse = (t: string) => new Date(t.replace(' ', 'T')).getTime();
    return [...list].sort((a, b) => parse(b.time) - parse(a.time));
  }, [claimData]);

  const visibleRows = useMemo(() => {
    const total = sortedCodes.length;
    if (total === 0) return new Array(VISIBLE_COUNT).fill(null);
    if (total <= VISIBLE_COUNT) {
      return [...sortedCodes, ...Array(VISIBLE_COUNT - total).fill(null)];
    }
    const rows: (typeof sortedCodes[number] | null)[] = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      rows.push(sortedCodes[(start + i) % total]);
    }
    return rows;
  }, [sortedCodes, start]);

  const visibleRecent = useMemo(() => {
    const total = sortedRecent.length;
    if (total === 0) return new Array(RECENT_VISIBLE).fill(null);
    if (total <= RECENT_VISIBLE) {
      return [...sortedRecent, ...Array(RECENT_VISIBLE - total).fill(null)];
    }
    const rows: (ClaimItem | null)[] = [];
    for (let i = 0; i < RECENT_VISIBLE; i++) {
      rows.push(sortedRecent[(recentStart + i) % total]);
    }
    return rows;
  }, [sortedRecent, recentStart]);

  // keep panel pulse for the carousel stepping
  const box2Changed = usePanelChangeFlag([start]);
  const box3Changed = usePanelChangeFlag([recentStart]);

  // BOX-2 loop 
  useEffect(() => {
    if (!sortedCodes.length) return;
    const id = setInterval(() => {
      setStart(s => (s + VISIBLE_COUNT) % sortedCodes.length);
    }, POLL_PROMO_MS);
    return () => clearInterval(id);
  }, [sortedCodes.length]);
  // Box-3 loop
  useEffect(() => {
    if (!sortedRecent.length) return;
    const id = setInterval(() => {
      setRecentStart(s => (s + RECENT_VISIBLE) % sortedRecent.length);
    }, POLL_RECENT_MS);
    return () => clearInterval(id);
  }, [sortedRecent.length]);

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

  /* ---------- render ---------- */
  return (
    <section className={styles.topSection}>
      <div className={styles.sectionHeading}>
        <h1 className={styles.promoTitle}>แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย</h1>
      </div>

      <div className={styles.bannerGrid}>
        {/* Box 1 */}
        <div className={`${styles.box1} ${styles.leftBox}`}>
          <img src="/images/left1.jpg" alt="" className={styles.pokerArt} />
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
            {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
          </div>
        </div>

        {/* Box 2 */}
        <div
          className={`${styles.box2} ${styles.rightBox} ${box2Changed ? `${styles.panelPulse} ${styles.panelPop}` : ""
            }`}
        >
          <table className={styles.table}>
            <colgroup>
              {[
                { width: "28%" },
                { width: "22%" },
                { width: "20%" },
                { width: "30%" },
              ].map((s, i) => (
                <col key={i} style={s} />
              ))}
            </colgroup>

            <thead>
              <tr>
                <th>โค้ด</th>
                <th>สถานะ</th>
                <th>เว็บไซต์</th>
                <th>หมดอายุ</th>
              </tr>
            </thead>

            <tbody key={start} className={styles.tableBody}>
              {visibleRows.map((row, i) =>
                row ? (
                  <tr
                    key={`${row.promo_code}-${i}`}
                    className={`${styles.tableRow} ${styles.rowEnter}`}
                  >
                    <td>
                      <div className={styles.codeCell}>
                        <span className={styles.codeText}>{row.promo_code}</span>

                        <button
                          type="button"
                          className={`${styles.copyBtn} ${copiedIndex === i ? styles.copyBtnActive : ""
                            }`}
                          onClick={() => handleCopy(row.promo_code, i)}
                          aria-label={`คัดลอก ${row.promo_code}`}
                          title={copiedIndex === i ? "คัดลอกแล้ว!" : "คัดลอก"}
                        >
                          {copiedIndex === i ? (
                            <span className={styles.copiedLabel}>คัดลอกแล้ว</span>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <path
                                d="M16 3H7a2 2 0 0 0-2 2v9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <rect
                                x="9"
                                y="7"
                                width="12"
                                height="14"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </td>

                    {/* ใช้ค่าอังกฤษเดิมเพื่อกำหนดคลาส แต่แสดงผลเป็นไทย */}
                    <td
                      className={
                        row.available === "Available" ? styles.available : styles.used
                      }
                    >
                      {row.available === "Available" ? "พร้อมใช้" : "ถูกใช้แล้ว"}
                    </td>

                    <td>{row.site}</td>
                    <td>{row.date}</td>
                  </tr>
                ) : (
                  <tr key={`filler-${i}`} className={`${styles.tableRow} ${styles.fillerRow}`}>
                    <td colSpan={4}>&nbsp;</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
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

            <tbody key={recentStart}>
              {visibleRecent.map((r, i) => {
                if (!r) {
                  return (
                    <tr key={`recent-filler-${i}`} className={styles.fillerRow}>
                      <td colSpan={5} />
                    </tr>
                  );
                }
                const k = `${r.user}|${r.code}|${r.time}`;
                const isHot = claimHighlights[k] && claimHighlights[k] > Date.now();

                return (
                  <tr
                    key={`${r.user}-${i}`}
                    className={`${styles.rowEnter} ${isHot ? styles.flameRow : ""}`}
                  >
                    <td className={styles.flameCell}>
                      {isHot && <span className={styles.flameBadge} aria-hidden></span>}
                      {r.user}
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

"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./f168.module.css";
import copy from "copy-to-clipboard";
import Faq from "./components/faq";
import Process from "./components/process";
import Game from "./components/game";
import CaptchaModal, { type CaptchaStep } from "./components/captcha";
import { getSocket } from "../../services/socket";

// ✅ use imported site registry + service APIs
import { siteOptions, type SiteKey } from "../../config/site";
import {
  fetchPromoCodes,
  type PromoItem,
  fetchClaimedData,
  type ClaimItem,
  getCaptchaBySite,
  type Captcha,
  verifyPromoCode,
  submitUserClaim,
} from "@/services/promo.service";

const VISIBLE_COUNT = 6;
const RECENT_VISIBLE = 5;

function upsertPromos(prev: PromoItem[], incoming: PromoItem | PromoItem[]) {
  const items = Array.isArray(incoming) ? incoming : [incoming];
  const map = new Map(prev.map(p => [p.promo_code, p]));
  for (const it of items) map.set(it.promo_code, it);
  const merged = Array.from(map.values());
  merged.sort(
    (a, b) =>
      new Date(b.date.replace(" ", "T")).getTime() -
      new Date(a.date.replace(" ", "T")).getTime()
  );
  return merged;
}

function upsertClaims(prev: ClaimItem[], incoming: ClaimItem[], limit = 200): ClaimItem[] {
  const key = (c: ClaimItem) => `${c.user}|${c.code}|${c.time}`;
  const map = new Map(prev.map(c => [key(c), c]));
  for (const item of incoming) map.set(key(item), item);

  const merged = Array.from(map.values());
  merged.sort((a, b) =>
    new Date(b.time.replace(" ", "T")).getTime() - new Date(a.time.replace(" ", "T")).getTime()
  );

  return merged.slice(0, limit);
}

export default function F168Page() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [start, setStart] = useState(0);
  const [recentStart, setRecentStart] = useState(0);

  const [promoData, setPromoData] = useState<PromoItem[]>([]);
  const [claimData, setClaimData] = useState<ClaimItem[]>([]);
  const [loading, setLoading] = useState(true);

  // form state
  const [promoCode, setPromoCode] = useState("");
  const [selectedSite, setSelectedSite] = useState<SiteKey>("F168");

  // captcha state (uses imported Captcha type)
  const [captchaData, setCaptchaData] = useState<Captcha | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Captcha solve
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [modalStep, setModalStep] = useState<CaptchaStep>("captcha");
  const [noteMsg, setNoteMsg] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verifiedDetail, setVerifiedDetail] = useState<PromoDetail | null>(null);

  const [account, setAccount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<string | null>(null);

  type PromoDetail = {
    promo_code: string;
    point: number;
    time: string;
    min_point: number;
    max_point: number;
  };

  useEffect(() => {
    const s = getSocket();

    // ---- verbose lifecycle logging ----
    const onConnect = () => console.log("[socket] connected", s.id);
    const onDisconnect = (reason: string) => console.log("[socket] disconnected:", reason);
    const onReconnect = (attempt: number) => console.log("[socket] reconnect attempt:", attempt);
    const onReconnectError = (err: any) => console.warn("[socket] reconnect error:", err?.message || err);
    const onConnectError = (err: any) => console.error("[socket] connect_error:", err?.message || err);
    const onError = (err: any) => console.error("[socket] error:", err?.message || err);

    s.on("connect", onConnect);
    s.on("disconnect", onDisconnect);
    s.io.on("reconnect_attempt", onReconnect);
    s.io.on("reconnect_error", onReconnectError);
    s.on("connect_error", onConnectError);
    s.on("error", onError);

    const onPromoCreated = (payload: PromoItem | PromoItem[]) => {
      console.log("[socket] promo:created", payload);
      const incoming = Array.isArray(payload) ? payload : [payload];
      setPromoData(prev => upsertPromos(prev, incoming));
    };
    s.on("promo:created", onPromoCreated);

    const onClaimCreated = (payload: ClaimItem | ClaimItem[]) => {
      console.log("[socket] claim:created", payload);
      const items = Array.isArray(payload) ? payload : [payload];
      setClaimData(prev => upsertClaims(prev, items));
    };
    s.on("claim:created", onClaimCreated);

    // ---- initial data fetch ----
    let alive = true;
    (async () => {
      const res = await fetchPromoCodes();
      const claim = await fetchClaimedData();
      if (!alive) return;
      if (res.ok) setPromoData(res.data);
      if (claim.ok) setClaimData(claim.data);
      setLoading(false);
    })();

    // ---- remove all listeners ----
    return () => {
      alive = false;
      s.off("connect", onConnect);
      s.off("disconnect", onDisconnect);
      s.io.off("reconnect_attempt", onReconnect);
      s.io.off("reconnect_error", onReconnectError);
      s.off("connect_error", onConnectError);
      s.off("error", onError);
      s.off("promo:created", onPromoCreated);
    };
  }, []);

  const handleCopy = (code: string, rowIndex: number) => {
    copy(code);
    setCopiedIndex(rowIndex);
    setTimeout(() => setCopiedIndex(null), 1400);
  };

  const handleCaptchaClose = () => {
    setCaptchaOpen(false);
    setPromoCode("");
    setCaptchaData(null);
    setVerifiedDetail(null);
    setAccount("");
    setNoteMsg(null);
    setSubmitMsg(null);
    setVerifying(false);
    setSubmitting(false);
    setModalStep("captcha");
  };

  const sortedCodes = useMemo(() => {
    const list = promoData ?? [];
    return [...list].sort(
      (a, b) =>
        new Date(b.date.replace(" ", "T")).getTime() -
        new Date(a.date.replace(" ", "T")).getTime()
    );
  }, [promoData]);

  const sortedRecent = useMemo(() => {
    const list = claimData ?? [];
    const parse = (t: string) => new Date(t.replace(" ", "T")).getTime();
    return [...list].sort((a, b) => parse(b.time) - parse(a.time));
  }, [claimData]);

  const visibleRows = useMemo(() => {
    const total = sortedCodes.length;
    if (total === 0) return new Array(VISIBLE_COUNT).fill(null);
    if (total <= VISIBLE_COUNT)
      return [...sortedCodes, ...Array(VISIBLE_COUNT - total).fill(null)];
    const rows: (typeof sortedCodes[number] | null)[] = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      rows.push(sortedCodes[(start + i) % total]);
    }
    return rows;
  }, [sortedCodes, start]);

  const visibleRecent = useMemo(() => {
    const total = sortedRecent.length;
    if (total === 0) return new Array(RECENT_VISIBLE).fill(null);
    if (total <= RECENT_VISIBLE)
      return [...sortedRecent, ...Array(RECENT_VISIBLE - total).fill(null)];
    const rows: (ClaimItem | null)[] = [];
    for (let i = 0; i < RECENT_VISIBLE; i++) {
      rows.push(sortedRecent[(recentStart + i) % total]);
    }
    return rows;
  }, [sortedRecent, recentStart]);

  const onlyTime = (ts: string) => {
  const d = new Date(ts);
  if (!Number.isNaN(d.getTime())) {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }
  const s = ts.replace("T", " ");
  return s.length >= 19 ? s.slice(11, 19) : s.slice(11);
};

  useEffect(() => {
    const id = setInterval(() => {
      setRecentStart((s) =>
        sortedRecent.length > 0 ? (s + 1) % sortedRecent.length : 0
      );
    }, 4000);
    return () => clearInterval(id);
  }, [sortedRecent.length]);

  useEffect(() => {
    if (sortedCodes.length <= VISIBLE_COUNT) return;
    const id = setInterval(
      () => setStart((s) => (s + 1) % sortedCodes.length),
      4000
    );
    return () => clearInterval(id);
  }, [sortedCodes.length]);

  //getCaptchaBySite
  const handleCheckNow = async () => {
    setErrorMsg(null);
    setNoteMsg(null);
    setCaptchaData(null);
    setVerifiedDetail(null);
    setSubmitMsg(null);
    setModalStep("captcha");

    if (!promoCode.trim()) {
      setErrorMsg("Please enter your promo code.");
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
      setNoteMsg("Captcha token is missing. Please close and try again.");
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
      setModalStep("review");
      setAccount("");
    } else {
      setNoteMsg(result.error);
    }
  };
  
  const handleSubmitClaim = async () => {
    setSubmitMsg(null);
    if (!verifiedDetail) {
      setSubmitMsg("No verified promo data. Please verify again.");
      return;
    }
    if (!account.trim()) {
      setSubmitMsg("Please enter your account.");
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
      setSubmitMsg(res.data.message);
      setTimeout(() => setCaptchaOpen(false), 2200);
    } else {
      setSubmitMsg(res.error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <section>
        <div className={styles.topSection}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.promoTitle}>F168 Promotions</h1>
          </div>

          <div className={styles.bannerGrid}>
            {/* Box 1 — Input (uses imports) */}
            <div className={`${styles.box1} ${styles.leftBox}`}>
              <img src="/images/left1.jpg" alt="" className={styles.pokerArt} />
              <div className={styles.formStack}>
                <input
                  id="promoCode"
                  type="text"
                  placeholder="Enter promo code"
                  className={styles.input}
                  aria-label="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />

                {/* ✅ Populate dropdown from imported siteOptions */}
                <select
                  id="siteSelect"
                  name="site"
                  className={styles.select}
                  value={selectedSite}
                  onChange={(e) => setSelectedSite(e.target.value as SiteKey)}
                >
                  {siteOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <button className={styles.button} onClick={handleCheckNow}>
                  Check Now
                </button>

                {errorMsg && (
                  <div className={styles.errorMsg}>{errorMsg}</div>
                )}
              </div>
            </div>

            {/* Box 2 — Codes */}
            <div className={`${styles.box2} ${styles.rightBox}`}>
              <table className={styles.table}>
                <colgroup>
                  <col style={{ width: "28%" }} />
                  <col style={{ width: "22%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "30%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Available</th>
                    <th>Site</th>
                    <th>Expired At</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {visibleRows.map((row, i) =>
                    row ? (
                      <tr
                        key={`${row.promo_code}-${i}`}
                        className={styles.tableRow}
                      >
                        <td>
                          <div className={styles.codeCell}>
                            <span className={styles.codeText}>
                              {row.promo_code}
                            </span>
                            <button
                              type="button"
                              className={`${styles.copyBtn} ${
                                copiedIndex === i ? styles.copyBtnActive : ""
                              }`}
                              // ✅ copy the right value
                              onClick={() => handleCopy(row.promo_code, i)}
                              aria-label={`Copy ${row.promo_code}`}
                              title={copiedIndex === i ? "Copied!" : "Copy"}
                            >
                              {copiedIndex === i ? (
                                <span className={styles.copiedLabel}>
                                  Copied
                                </span>
                              ) : (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
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

                        <td
                          className={
                            row.available === "Available"
                              ? styles.available
                              : styles.used
                          }
                        >
                          {row.available}
                        </td>

                        <td>{row.site}</td>
                        <td>{row.date}</td>
                      </tr>
                    ) : (
                      <tr
                        key={`filler-${i}`}
                        className={`${styles.tableRow} ${styles.fillerRow}`}
                      >
                        <td colSpan={4}>&nbsp;</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* Box 3 — Recent */}
            <div className={`${styles.box3}  ${styles.fullBoxNoChrome}`}>
              <table className={`${styles.table} ${styles.recentTable}`}>
                <colgroup>
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "16%" }} />
                  <col style={{ width: "14%" }} />
                  <col style={{ width: "18%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Code</th>
                    <th>Points</th>
                    <th>Site</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRecent.map((r, i) =>
                    r ? (
                      <tr key={`${r.user}-${i}`}>
                        <td>{r.user}</td>
                        <td>{r.code}</td>
                        <td>Received {r.point} Points</td>
                        <td>{r.site}</td>
                        <td>{onlyTime(r.time)}</td>
                      </tr>
                    ) : (
                      <tr
                        key={`recent-filler-${i}`}
                        className={`${styles.fillerRow}`}
                      >
                        <td colSpan={5} />
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Game />
      <Process />
      <Faq />

      <CaptchaModal
        open={captchaOpen}
        onClose={handleCaptchaClose}
        step={modalStep}

        /* step 1 - Verify Captcha */
        captchaUrl={captchaData?.captchaUrl ?? null}
        note={noteMsg}
        busy={verifying}
        onContinue={handleCaptchaContinue}

        /* step 2 - Input Account And Claim */
        detail={verifiedDetail}
        account={account}
        onAccountChange={setAccount}
        submitBusy={submitting}
        submitMsg={submitMsg}
        onSubmit={handleSubmitClaim}
      />
    </div>
  );
}

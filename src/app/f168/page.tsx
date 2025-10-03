"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./f168.module.css";
import copy from "copy-to-clipboard";
import Faq from './faq'
import { fetchPromoCodes, type PromoItem } from "@/services/promo.service";

interface RewardRow {
  user: string;
  code: string;
  points: number;
  site: "F168" | "MK8";
  time: string; 
}

const VISIBLE_COUNT = 6;
const RECENT_VISIBLE = 5;

const recentRewards: RewardRow[] = [
  { user: "neu***", code: "CODE2", points: 80, site: "MK8", time: "2025-10-02 12:35" },
  { user: "amy***", code: "CODE7", points: 50, site: "MK8", time: "2025-10-02 11:58" },
  { user: "kd9***", code: "CODE1", points: 30, site: "F168", time: "2025-10-01 22:05" },
  { user: "sol***", code: "CODE6", points: 60, site: "F168", time: "2025-10-01 18:41" },
  // { user: "hen***", code: "CODE3", points: 80, site: "MK8", time: "2025-10-02 12:35" },
  // { user: "amy***", code: "CODE4", points: 50, site: "MK8", time: "2025-10-02 11:58" },
  // { user: "puri***", code: "CODE9", points: 30, site: "F168", time: "2025-10-01 22:05" },
  // { user: "rob***", code: "CODE8", points: 60, site: "F168", time: "2025-10-01 18:41" },
];

export default function F168Page() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [start, setStart] = useState(0);
  const [recentStart, setRecentStart] = useState(0);

  const [promoData, setPromoData] = useState<PromoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      const res = await fetchPromoCodes();
      if (!alive) return;
      if (res.ok) setPromoData(res.data);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const handleCopy = (code: string, rowIndex: number) => {
    copy(code);
    setCopiedIndex(rowIndex);
    setTimeout(() => setCopiedIndex(null), 1400);
  };

  const sortedCodes = useMemo(() => {
    const list = promoData ?? [];
    // date is "YYYY-MM-DD" per your API. If you later switch to "YYYY-MM-DD HH:mm", this still works.
    return [...list].sort(
      (a, b) => new Date(b.date.replace(" ", "T")).getTime() - new Date(a.date.replace(" ", "T")).getTime()
    );
  }, [promoData]);

  const sortedRecent = useMemo(() => {
    const parse = (t: string) => new Date(t.replace(" ", "T")).getTime();
    return [...recentRewards].sort((a, b) => parse(b.time) - parse(a.time));
  }, []);

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

    const rows: (RewardRow | null)[] = [];
    for (let i = 0; i < RECENT_VISIBLE; i++) {
      rows.push(sortedRecent[(recentStart + i) % total]);
    }
    return rows;
  }, [sortedRecent, recentStart]);

  const onlyTime = (ts: string) => {
  const t = ts.replace("T", " ");
  const hhmm = t.slice(11, 16);
  return hhmm;
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
    const id = setInterval(() => {
      setStart((s) => (s + 1) % sortedCodes.length);
    }, 4000);
    return () => clearInterval(id);
  }, [sortedCodes.length]);

  return (
    <div className={styles.container}>
      {/*{Top Section}*/}
      <section>
        <div className={styles.topSection}>
          <div className={styles.sectionHeading}>
            <h1 className={`${styles.promoTitle}`}>F168 Promotions</h1>
          </div>
          <div className={styles.bannerGrid}>
            
            {/* Box 1 (6/12) — Input */}
              <div className={`${styles.box1} ${styles.leftBox}`}>
                <img src="/images/left1.jpg" alt="" className={styles.pokerArt}/>
                <div className={styles.formStack}>
                  <input id="promoCode" type="text" placeholder="Enter promo code" className={styles.input} aria-label="Promo code" />
                  <select id="siteSelect" name="site" className={styles.select}>
                    <option value="Select">Select Site</option>
                    <option value="F168">F168</option>
                    <option value="MK8">MK8</option>
                  </select>
                  <button className={styles.button}>Check Now</button>
                </div>
              </div>
              
              {/* Box 2 (6/12) — Code */}
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
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tableBody}>
                    {visibleRows.map((row, i) =>
                      row ? (
                        <tr key={`${row.code}-${i}`} className={styles.tableRow}>
                          <td>
                            <div className={styles.codeCell}>
                              <span className={styles.codeText}>{row.promo_code}</span>
                              <button
                                type="button"
                                className={`${styles.copyBtn} ${
                                  copiedIndex === i ? styles.copyBtnActive : ""
                                }`}
                                onClick={() => handleCopy(row.code, i)}
                                aria-label={`Copy ${row.code}`}
                                title={copiedIndex === i ? "Copied!" : "Copy"}
                              >
                                {copiedIndex === i ? (
                                  <span className={styles.copiedLabel}>Copied</span>
                                ) : (
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 3H7a2 2 0 0 0-2 2v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <rect x="9" y="7" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                                  </svg>
                                )}
                              </button>
                            </div>
                          </td>

                          <td className={row.available === "Available" ? styles.available : styles.used}>
                            {row.available}
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
              
              {/* Box 3 (12/12) — Recent Rewards */}
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
                        <tr key={`${r.user}-${i}`} >
                          <td>{r.user}</td>
                          <td>{r.code}</td>
                          <td>{r.points}</td>
                          <td>{r.site}</td>
                          <td>{onlyTime(r.time)}</td>
                        </tr>
                      ) : (
                        <tr key={`recent-filler-${i}`} className={`${styles.fillerRow}`}>
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
      
      {/*{Awesome Games}*/}
      <section className={styles.game}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.gradientFont}>Awesome Games</h2>
        </div>

        <div className={styles.gameGrid}>
          {[
            {img: "/images/1.jpg", title: "Dice Rolling"},
            {img: "/images/2.jpg", title: "Blackjack"},
            {img: "/images/3.jpg", title: "Roulette"},
            {img: "/images/4.jpg", title: "Spin"},
            {img: "/images/5.jpg", title: "Poker"},
            {img: "/images/6.jpg", title: "Spin"},
            {img: "/images/1.jpg", title: "Dice Rolling"},
            {img: "/images/2.jpg", title: "Blackjack"},
          ].map((g, i) => (
            <div key={i} className={styles.gameItem}>
              <div className={styles.gameImg}>
                <img src={g.img} alt="blackjack" />
              </div>
              <div className={styles.gameInfo}>
                <h3>{g.title}</h3>
                <a href="#0" className={styles.customBtn}>play now</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*{Steps to start the game section}*/}
      <section className={styles.process}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.gradientFont}>Steps to Enjoy The Promotion</h2>
        </div>

        <div className={styles.processGrid}>
          {[
            {step: "01", title: "Get The Code From the Box", text: "At the code box, You can get the available codes"},
            {step: "02", title: "Put In code and check availity", text: "Click the Check Now button and solve the captcha"},
            {step: "03", title: "Your Account Name", text: "After successfully solve the captcha, Put in your account"},
            {step: "04", title: "Wait a while and Enjou the promotion", text: "After wait a while, You can enjoy our promotion"},
          ].map((it, i) => (
            <div key={i} className={styles.processItem}>
              <div className={styles.processIconWrap}>
                <div className={styles.processIcon}><span>{it.step}</span></div>
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/*{Frequently Asked Questions section}*/}
      <Faq />
    </div>
  );
}

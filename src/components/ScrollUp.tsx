"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollUp.module.css";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0-100

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      setVisible(scrollTop > 150);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 49; // SVG circle radius
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress / 100);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`${styles.scrollUp} ${visible ? styles.active : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* progress ring */}
      <svg className={styles.ring} viewBox="-1 -1 102 102" aria-hidden="true">
        <circle
          className={styles.track}
          r={radius}
          cx="50"
          cy="50"
          fill="none"
          strokeWidth="2"
        />
        <circle
          className={styles.progress}
          r={radius}
          cx="50"
          cy="50"
          fill="none"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
        />
      </svg>

      {/* up arrow */}
      <span className={styles.arrow} aria-hidden="true">↑</span>
    </button>
  );
}

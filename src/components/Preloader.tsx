"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onLoad = () => setHide(true);
    // Hide when window fully loads, with a safety timeout fallback
    window.addEventListener("load", onLoad);
    const t = setTimeout(() => setHide(true), 500);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
    };
  }, []);

  if (hide) return null;

  return (
    <div id="loading" className={styles.overlay} aria-label="Loading">
      <div className={styles.center}>
        <div className={styles.centerAbs}>
          <div className={styles.icon}>
            <img
              className={styles.logo}
              src="/images/preloader.svg"
              alt="preloader"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  // You asked to show 2025 specifically (not dynamic)
  const year = new Date().getFullYear();


  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.left}>
        F168 &amp; MK8 Promotion © {year}. All rights reserved.
      </div>

      <nav className={styles.right} aria-label="Footer navigation">
        <Link href="/aboutus" className={styles.link}>About us</Link>
         <Link href="/contactus" className={styles.link}>Contact us</Link>
      </nav>
    </footer>
  );
}

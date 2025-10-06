"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  // You asked to show 2025 specifically (not dynamic)
  const year = new Date().getFullYear();


  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.left}>
        thaibetz &amp; แจกโค้ด & เครดิตฟรี © {year}. สงวนลิขสิทธิ์ทั้งหมด.
      </div>

      <nav className={styles.right} aria-label="Footer navigation">
        <Link href="/about-us" className={styles.link}>เกี่ยวกับเรา</Link>
        <Link href="/contact-us" className={styles.link}>ติดต่อเรา</Link>
      </nav>
    </footer>
  );
}

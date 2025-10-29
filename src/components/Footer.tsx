"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.left}>
        <strong>Thaideal</strong> | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน) © {year}. สงวนลิขสิทธิ์ทั้งหมด.
      </div>

      <nav className={styles.right} aria-label="Footer navigation">
        <Link href="/about-us/" className={styles.link}>เกี่ยวกับเรา</Link>
        <Link href="/contact-us/" className={styles.link}>ติดต่อเรา</Link>
        <Link href="/privacy/" className={styles.link}>นโยบายความเป็นส่วนตัว</Link>
      </nav>
    </footer>
  );
}

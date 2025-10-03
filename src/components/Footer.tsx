"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const isF168 = pathname.startsWith("/f168");
  const brandName = isF168 ? "F168" : "MK8";
  const logoSrc = isF168 ? "/images/logo-f168.png" : "/images/logo-mk8.png";
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.left}>
        <div className={styles.logoArea}>
          <img src={logoSrc} alt={`${brandName} Logo`} className={styles.logo} />
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.footerText}>
          {brandName} Promotion © {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

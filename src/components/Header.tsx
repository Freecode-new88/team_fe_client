"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        {pathname === "/f168" ? (
          <img src="/images/logo-f168.png" alt="F168 Logo" className={styles.logo} />
        ) : (
          <img src="/images/logo-mk8.png" alt="MK8 Logo" className={styles.logo} />
        )}
      </div>

      <nav className={styles.nav}>
        <Link
          href="/f168"
          className={`${styles.tab} ${
            pathname === "/f168" ? styles.activeTabF168 : ""
          }`}
        >
          F168
        </Link>
        <Link
          href="/mk8"
          className={`${styles.tab} ${
            pathname === "/mk8" ? styles.activeTabMK8 : ""
          }`}
        >
          MK8
        </Link>
      </nav>
    </header>
  );
}

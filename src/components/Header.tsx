"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import NextImage from "next/image";

export default function Header() {

  return (
    <header className={`${styles.header} hidden lg:block`}>
      <div className={styles.logoArea}>
        <NextImage
          src="/logo01.png"
          alt="ทิมล่าโปร"
          width={160}         
          height={40}
          className={styles.logo}
          priority            
        />
      </div>

      <nav className={styles.nav}>

        <Link
          href="/f168"
          aria-label="สมัครสมาชิก F168"
          className={`${styles.tab} inline-flex items-center justify-center gap-2 rounded-xl px-0 py-0 no-underline`}
        >
          <NextImage
            src="/images/logo-f168.png"
            alt=""
            aria-hidden
            width={128}
            height={45}
            className="block object-contain w-10 h-auto"
          />
          <span className="">สมัคร F168</span>
        </Link>
        <Link
          href="/f168"
          aria-label="สมัครสมาชิก F168"
          className={`${styles.tab} inline-flex items-center justify-center gap-2 rounded-xl px-0 py-0 no-underline`}
        >
          <NextImage
            src="/images/logo-mk8.png"
            alt=""
            aria-hidden
            width={128}
            height={45}
            className="block object-contain w-10 h-auto"
          />
          <span className="">สมัคร MK8</span>
        </Link>
      </nav>
    </header>
  );
}

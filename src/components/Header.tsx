"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import NextImage from "next/image";
import { F168lINK, MK8LINK } from "@/config/site";

export default function Header() {

  const handleRegisterClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'register_m', {
        location: 'tab_mk8',
        link_text: 'สมัคร MK8',
        link_url: MK8LINK,
      });
    }
  };

  const handleRegisterClickF168 = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'register_f', {
        location: 'tab_f168',
        link_text: 'สมัคร F168',
        link_url: F168lINK,
      });
    }
  };

  return (
    <header className={`${styles.header} hidden lg:block`}>
      <div className={styles.logoArea}>
        <Link
          href={"/"}  aria-label="กลับไปหน้าแรก Thaibet">
          <NextImage
            src="/thaibet-logo.png"
            alt="โลโก้ Thaibet"
            width={160}
            height={40}
            className={styles.logo}
            priority
            draggable="false"
          /></Link>
      </div>

      <nav className={styles.nav}>

        <Link
          href={F168lINK}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="สมัครสมาชิก F168"
          className={`${styles.tab} inline-flex items-center justify-center gap-2 rounded-xl px-0 py-0 no-underline`}
          onClick={handleRegisterClickF168}
        >
          <div className="inline-block rounded-2xl overflow-hidden border border-gray-300 p-0.5 bg-white/20">
            <NextImage
              src="/here/r-arrow.webp"
              alt="แจกโค้ด & เครดิตฟรี"
              aria-hidden
              width={128}
              height={45}
              className="block w-10 h-auto rounded-xl object-contain"
              draggable="false"
            />
          </div>
          <NextImage
            src="/images/logo-f168.png"
            alt="สมัคร F168"
            aria-hidden
            width={128}
            height={45}
            className="block object-contain w-10 h-auto"
            draggable="false"
          />
          <span className="">สมัคร F168</span>
        </Link>
        <Link
          href={MK8LINK}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="สมัครสมาชิก F168"
          className={`${styles.tab} inline-flex items-center justify-center gap-2 rounded-xl px-0 py-0 no-underline`}
          onClick={handleRegisterClick}
        >
          <NextImage
            src="/images/logo-mk8.png"
            alt="สมัคร MK8"
            aria-hidden
            width={128}
            height={45}
            className="block object-contain w-10 h-auto"
            draggable="false"
          />
          <span className="">สมัคร MK8</span>
        </Link>
      </nav>
    </header>
  );
}

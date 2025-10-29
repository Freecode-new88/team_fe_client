"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import NextImage from "next/image";
import { F168lINK, MK8LINK } from "@/config/site";

export default function Header() {
  // ✅ Track outbound click event (standardized with GA4)
  const handleRegisterClick = (brand: string, href: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "outbound_register_click", {
        brand,
        destination: href,
        section: "header_nav",
      });
    }
  };

  return (
    <header className={`${styles.header} hidden lg:block`} role="banner">
      <div className={styles.logoArea}>
        <Link href="/" aria-label="กลับไปหน้าแรก Thaibet">
          <NextImage
            src="/thaibet-logo.webp"
            alt="Thaibet | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)"
            width={180}
            height={45}
            className={styles.logo}
            priority
            draggable="false"
          />
        </Link>
      </div>

      <nav className={styles.nav} role="navigation" aria-label="เมนูหลักเว็บไซต์">
        {/* --- F168 --- */}
        <Link
          href={F168lINK}
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="สมัครสมาชิก F168 อย่างเป็นทางการผ่าน Thaibet"
          className={`${styles.tab} inline-flex items-center justify-center gap-2 rounded-xl px-0 py-0 no-underline`}
          onClick={() => handleRegisterClick("F168", F168lINK)}
        >
          <div className="inline-block rounded-2xl overflow-hidden border border-gray-300 p-0.5 bg-white/20">
            <NextImage
              src="/here/r-arrow.webp"
              alt="Thaibet รวมโปรโมชันและโค้ดเครดิตฟรี F168"
              aria-hidden
              width={128}
              height={45}
              className="block w-10 h-auto rounded-xl object-contain"
              draggable="false"
            />
          </div>
          <NextImage
            src="/images/logo-f168.png"
            alt="โลโก้ F168"
            aria-hidden
            width={120}
            height={45}
            className="block object-contain w-10 h-auto"
            draggable="false"
          />
          <span className="">สมัคร F168</span>
        </Link>

        {/* --- MK8 --- */}
        <Link
          href={MK8LINK}
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="สมัครสมาชิก MK8 อย่างเป็นทางการผ่าน Thaibet"
          className={`${styles.tab} inline-flex items-center justify-center gap-2 rounded-xl px-0 py-0 no-underline`}
          onClick={() => handleRegisterClick("MK8", MK8LINK)}
        >
          <NextImage
            src="/images/logo-mk8.png"
            alt="โลโก้ MK8"
            aria-hidden
            width={120}
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

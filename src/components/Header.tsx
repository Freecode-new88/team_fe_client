"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { F168lINK, MK8LINK } from "@/config/site";

export default function Header() {
  // ✅ GA4 outbound click tracking
  const trackOutbound = (brand: string, href: string) => {
    const win = window as any;
    win?.gtag?.("event", "outbound_register_click", {
      brand,
      destination: href,
      section: "header_nav",
    });
  };

  return (
    <header
      className={`${styles.header} hidden lg:flex items-center justify-between px-6 py-3`}
      role="banner"
    >
      {/* ---------- LOGO ---------- */}
      <div className={styles.logoArea}>
        <Link
          href="/"
          aria-label="กลับไปหน้าแรก Thaideal"
          prefetch={false}
          className="inline-block"
        >
          <Image
            src="/images/logo/thaideal-logo.webp"
            alt="Thaideal | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)"
            width={180}
            height={45}
            priority
            draggable={false}
            className="block h-auto w-[100px] object-contain"
          />
        </Link>
      </div>

      {/* ---------- NAVIGATION ---------- */}
      <nav
        className={`${styles.nav} flex items-center gap-2`}
        role="navigation"
        aria-label="เมนูหลักเว็บไซต์"
      >
        {/* 🔹 Arrow Icon */}
        <div className="inline-block rounded-2xl overflow-hidden border border-gray-300 p-0.5 bg-white/20">
          <Image
            src="/here/r-arrow.webp"
            alt="Thaideal รวมโปรโมชันและโค้ดเครดิตฟรี F168"
            aria-hidden
            width={128}
            height={45}
            className="block w-10 h-auto rounded-xl object-contain"
            draggable={false}
            loading="lazy"
          />
        </div>
        {/* --- F168 --- */}
        <Link
          href={F168lINK}
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="สมัครสมาชิก F168 อย่างเป็นทางการผ่าน Thaideal"
          className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 transition-all border border-white/20 backdrop-blur-md"
          onClick={() => trackOutbound("F168", F168lINK)}
        >


          {/* 🔹 F168 Logo */}
          <Image
            src="/images/logo-f168.png"
            alt="โลโก้ F168"
            aria-hidden
            width={120}
            height={45}
            draggable={false}
            className="block object-contain w-10 h-auto"
            loading="lazy"
          />

          <span className="text-sm sm:text-base">สมัคร F168</span>
        </Link>

        {/* --- MK8 --- */}
        <Link
          href={MK8LINK}
          rel="nofollow noopener noreferrer"
          target="_blank"
          aria-label="สมัครสมาชิก MK8 อย่างเป็นทางการผ่าน Thaideal"
          className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 transition-all border border-white/20 backdrop-blur-md"
          onClick={() => trackOutbound("MK8", MK8LINK)}
        >
          <Image
            src="/images/logo-mk8.png"
            alt="โลโก้ MK8"
            aria-hidden
            width={120}
            height={45}
            draggable={false}
            className="block object-contain w-10 h-auto"
            loading="lazy"
          />
          <span className="text-sm sm:text-base">สมัคร MK8</span>
        </Link>
      </nav>
    </header>
  );
}

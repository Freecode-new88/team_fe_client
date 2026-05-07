import type { Metadata } from "next";
import styles from './f168.module.css';
import Promo from './components/promo';
import Promotions from './components/Promotions';
import Process from './components/process';
import Faq from './components/faq';
import GameTabs from './components/GameTabs';

export const metadata: Metadata = {
  title: {
    absolute: "Thaideal | รวมโปรโมชัน เครดิตฟรี F168/MK8 อัปเดตทุกวัน",
  },
  description:
    "Thaideal รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168/MK8 อัปเดตทุก 15 นาที พร้อมเงื่อนไขจริงและขั้นตอนรับสิทธิ์",
  keywords: [
    "โปรโมชัน",
    "เครดิตฟรี",
    "โค้ดเครดิตฟรี",
    "F168",
    "MK8",
    "Thaideal",
    "โปรสมาชิกใหม่",
    "เครดิตฟรีล่าสุด",
  ],
  alternates: { canonical: "https://thaideal.co/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://thaideal.co/",
    siteName: "Thaideal",
    title: "Thaideal | รวมโปรโมชัน เครดิตฟรี F168/MK8 อัปเดตทุกวัน",
    description:
      "ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168/MK8 อัปเดตทุก 15 นาที พร้อมเงื่อนไขจริงและขั้นตอนรับสิทธิ์",
    images: [
      {
        url: "https://thaideal.co/og/og-v1.webp",
        width: 1200,
        height: 630,
        alt: "Thaideal — ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaidealt",
    creator: "@thaidealt",
    title: "Thaideal | รวมโปรโมชัน เครดิตฟรี F168/MK8",
    description:
      "อัปเดตโปรโมชันและโค้ดเครดิตฟรี F168/MK8 ทุก 15 นาที พร้อมเงื่อนไขจริงและขั้นตอนรับสิทธิ์",
    images: ["https://thaideal.co/og/og-v1.webp"],
  },
};

export default function F168Page() {
  return (
    <div className={styles.container}>
      <Promo />
      <Promotions />
      <GameTabs />
      <Process />
      <Faq />
    </div>
  );
}

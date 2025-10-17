import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "ติดต่อ Thaibet (Contact Us) | ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8",
  description:
    "ติดต่อทีมงาน Thaibet เพื่อสอบถามข้อมูล เสนอแนะ หรือแจ้งปัญหาการใช้งาน เว็บไซต์ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 ที่อัปเดตทุกวัน",
  alternates: {
    canonical: "https://thaibetz.com/contact-us/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://thaibetz.com/contact-us/",
    siteName: "Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8",
    title: "ติดต่อ Thaibet (Contact Us) | Thaibet",
    description:
      "ช่องทางการติดต่อทีมงาน Thaibet เพื่อสอบถามข้อมูล แจ้งปัญหา หรือเสนอแนะเพิ่มเติมเกี่ยวกับโค้ดเครดิตฟรีและโปรโมชันจากพันธมิตรอย่างเป็นทางการ",
    images: [
      {
        url: "https://thaibetz.com/og/contact.webp",
        width: 1200,
        height: 630,
        alt: "ติดต่อ Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",
    creator: "@thaibetz",
    title: "ติดต่อ Thaibet (Contact Us) | Thaibet",
    description:
      "ติดต่อทีมงาน Thaibet เพื่อสอบถามข้อมูล เสนอแนะ หรือแจ้งปัญหาการใช้งานเว็บไซต์ศูนย์รวมโค้ดเครดิตฟรีและโปรโมชันจากพันธมิตร F168/MK8",
    images: ["https://thaibetz.com/og/contact.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactUsClient />;
}

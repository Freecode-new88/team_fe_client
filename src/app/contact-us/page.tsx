import type { Metadata } from "next";
import Script from "next/script";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "ติดต่อ Thaibet | ",
  description:
    "ติดต่อทีมงาน Thaibet เพื่อสอบถามข้อมูลทั่วไป แจ้งปัญหา หรือเสนอแนะเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8.",
  alternates: {
    canonical: "https://thaibetz.com/contact-us/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://thaibetz.com/contact-us/",
    siteName: "Thaibet — ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
    title: "ติดต่อ Thaibet (Contact Us) | Thaibet",
    description:
      "ช่องทางติดต่อทีมงาน Thaibet เพื่อสอบถามข้อมูล แจ้งปัญหา หรือข้อเสนอแนะเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรี.",
    images: [
      {
        url: "https://thaibetz.com/og/contact.webp",
        width: 1200,
        height: 630,
        alt: "ติดต่อ Thaibet — ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",
    creator: "@thaibetz",
    title: "ติดต่อ Thaibet (Contact Us) | Thaibet",
    description:
      "สอบถามข้อมูล แจ้งปัญหา หรือเสนอแนะเพิ่มเติมกับทีมงาน Thaibet ได้ที่นี่.",
    images: ["https://thaibetz.com/og/contact.webp"],
  },
  robots: { index: true, follow: true },
};
export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://thaibetz.com/contact-us/",
    url: "https://thaibetz.com/contact-us/",
    inLanguage: "th-TH",
    name: "ติดต่อ Thaibet (Contact Us) | ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี F168/MK8",
    description:
      "หน้าติดต่อ Thaibet สำหรับสอบถามข้อมูลทั่วไป แจ้งปัญหาการใช้งาน หรือเสนอแนะเพิ่มเติมเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168/MK8.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://thaibetz.com/contact-us/",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://thaibetz.com/#organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaibetz.com/icons/thaibet-icon-512.png",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "admin@thaibetz.com",
      url: "https://thaibetz.com/contact-us/",
      areaServed: "TH",
      availableLanguage: ["th"],
    },
    about: [
      { "@type": "Thing", name: "ติดต่อ Thaibet" },
      { "@type": "Thing", name: "ศูนย์รวมข้อมูลโปรโมชัน" },
      { "@type": "Thing", name: "โค้ดเครดิตฟรี" },
      { "@type": "Thing", name: "F168" },
      { "@type": "Thing", name: "MK8" },
    ],
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <ContactUsClient />

      {/* ✅ JSON-LD: ContactPage */}
      <Script
        id="ld-json-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

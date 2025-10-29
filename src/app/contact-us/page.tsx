import type { Metadata } from "next";
import Script from "next/script";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "ติดต่อ Thaideal | ",
  description:
    "ติดต่อทีมงาน Thaideal เพื่อสอบถามข้อมูลทั่วไป แจ้งปัญหา หรือเสนอแนะเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8.",
  alternates: {
    canonical: "https://thaideal.co/contact-us/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://thaideal.co/contact-us/",
    siteName: "Thaideal — ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
    title: "ติดต่อ Thaideal (Contact Us) | Thaideal",
    description:
      "ช่องทางติดต่อทีมงาน Thaideal เพื่อสอบถามข้อมูล แจ้งปัญหา หรือข้อเสนอแนะเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรี.",
    images: [
      {
        url: "https://thaideal.co/og/contact.webp",
        width: 1200,
        height: 630,
        alt: "ติดต่อ Thaideal — ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaideal",
    creator: "@thaideal",
    title: "ติดต่อ Thaideal (Contact Us) | Thaideal",
    description:
      "สอบถามข้อมูล แจ้งปัญหา หรือเสนอแนะเพิ่มเติมกับทีมงาน Thaideal ได้ที่นี่.",
    images: ["https://thaideal.co/og/contact.webp"],
  },
  robots: { index: true, follow: true },
};
export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://thaideal.co/contact-us/",
    url: "https://thaideal.co/contact-us/",
    inLanguage: "th-TH",
    name: "ติดต่อ Thaideal (Contact Us) | ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี F168/MK8",
    description:
      "หน้าติดต่อ Thaideal สำหรับสอบถามข้อมูลทั่วไป แจ้งปัญหาการใช้งาน หรือเสนอแนะเพิ่มเติมเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168/MK8.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://thaideal.co/contact-us/",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://thaideal.co/#organization",
      name: "Thaideal",
      url: "https://thaideal.co/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaideal.co/icons/thaibet-icon-512.png",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "admin@thaideal.co",
      url: "https://thaideal.co/contact-us/",
      areaServed: "TH",
      availableLanguage: ["th"],
    },
    about: [
      { "@type": "Thing", name: "ติดต่อ Thaideal" },
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

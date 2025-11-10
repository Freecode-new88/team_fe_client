import type { Metadata } from "next";
import Script from "next/script";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "ติดต่อ Thaideal | ช่องทางติดต่อและสนับสนุนข้อมูลโปรโมชั่น",
  description:
    "ติดต่อทีมงาน Thaideal เพื่อสอบถามข้อมูล แจ้งปัญหา หรือเสนอแนะเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8 ได้ที่นี่ — ทีมงานพร้อมตอบกลับภายใน 24 ชั่วโมง",
  alternates: {
    canonical: "https://thaideal.co/contact-us/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://thaideal.co/contact-us/",
    siteName: "Thaideal — รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
    title: "ติดต่อ Thaideal (Contact Us) | Thaideal",
    description:
      "ช่องทางติดต่อ Thaideal เพื่อสอบถาม แจ้งปัญหา หรือติดต่อฝ่ายสนับสนุน เกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8.",
    images: [
      {
        url: "https://thaideal.co/og/contact.webp",
        width: 1200,
        height: 630,
        alt: "ติดต่อ Thaideal — รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaidealt",
    creator: "@thaidealt",
    title: "ติดต่อ Thaideal | ช่องทางสอบถามและแจ้งปัญหา",
    description:
      "ติดต่อ Thaideal ได้โดยตรงเพื่อสอบถามข้อมูลโปรโมชัน แจ้งปัญหา หรือเสนอแนะเพิ่มเติมได้ทุกวัน.",
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
    name: "ติดต่อ Thaideal | ช่องทางสอบถามและแจ้งปัญหา",
    description:
      "หน้าติดต่อ Thaideal สำหรับสอบถามข้อมูลทั่วไป แจ้งปัญหาการใช้งาน หรือเสนอแนะเพิ่มเติมเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8.",
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
      email: "admin@thaidealt.co",
      telephone: "+66-90-123-4567",
      url: "https://thaideal.co/contact-us/",
      areaServed: "TH",
      availableLanguage: ["th"],
      description:
        "ช่องทางหลักในการติดต่อ Thaideal สำหรับสอบถามข้อมูล แจ้งปัญหา หรือให้ข้อเสนอแนะเพิ่มเติม",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 ถนนสุขุมวิท แขวงคลองตัน เขตวัฒนา กรุงเทพมหานคร 10110",
      addressCountry: "TH",
    },
    sameAs: ["https://thaideal.co"],
    brand: {
      "@type": "Brand",
      name: "Thaideal",
    },
    keywords: ["#Thaideal", "#โปรโมชัน", "#เครดิตฟรี"],
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
      {/* ✅ Structured Data: ContactPage */}
      <Script
        id="ld-json-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

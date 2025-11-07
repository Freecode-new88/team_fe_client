import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fab } from "@/components/Fab";
import { ToastContainer } from "react-toastify";
import MobileBottomBar from "./components/BottomBar";
import { F168lINK, MK8LINK } from "@/config/site";
import "./globals.css";

/* -------------------------------------------------------------------------- */
/* 🔹 SEO Metadata (Next.js 14+ แบบ fully structured)                         */
/* -------------------------------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://thaideal.co/"),
  alternates: { canonical: "/" },
  title: {
    default: "Thaideal | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    template: "%s | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี — Thaideal",
  },
  description:
    "Thaideal แหล่งรวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี อัปเดตทุกวันอย่างโปร่งใส พร้อมสรุปเงื่อนไข วิธีรับสิทธิ์ และลิงก์ทางการที่เชื่อถือได้",
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    url: "https://thaideal.co/",
    title: "Thaideal | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    description:
      "รวมโปรโมชันและโค้ดเครดิตฟรีจากหลายแหล่ง อัปเดตทุกวัน บอกช่วงปล่อยสิทธิ์ เงื่อนไขครบ พร้อมแนวทางรับสิทธิ์อย่างปลอดภัย",
    images: [
      {
        url: "https://thaideal.co/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaideal – รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaideal",
    creator: "@thaideal",
    title:
      "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    description:
      "ติดตามข้อมูลโปรโมชันและโค้ดเครดิตฟรี อัปเดตทุกวัน ตรวจสอบเงื่อนไขจริง พร้อมลิงก์ทางการใช้งานง่าย ปลอดภัย",
    images: ["https://thaideal.co/og/og.webp"],
  },
};

/* -------------------------------------------------------------------------- */
/* 🔹 JSON-LD Schemas (รวมทั้งหมดใน Script เดียว — ลด blocking)              */
/* -------------------------------------------------------------------------- */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thaideal.co/#organization",
    name: "Thaideal",
    legalName: "Thaideal",
    url: "https://thaideal.co/",
    logo: "https://thaideal.co/icons/thaibet-icon-512.png",
    image: "https://thaideal.co/og/og.webp",
    description:
      "Thaideal เป็นศูนย์รวมข้อมูลโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี สำหรับ F168/MK8 อัปเดตทุกวัน พร้อมรายละเอียดเงื่อนไข วิธีเข้าร่วม และแหล่งทางการที่เชื่อถือได้",
    foundingDate: "2023-01-01",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "admin@thaideal.co",
        url: "https://thaideal.co/contact-us/",
        areaServed: "TH",
        availableLanguage: ["th"],
      },
    ],
    sameAs: ["https://x.com/thaideal"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thaideal",
    url: "https://thaideal.co/",
    inLanguage: "th-TH",
    publisher: {
      "@type": "Organization",
      name: "Thaideal",
      url: "https://thaideal.co/",
      logo: { "@type": "ImageObject", url: "https://thaideal.co/icons/thaibet-icon-512.png" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://thaideal.co/" },
    name: "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    url: "https://thaideal.co/",
    description:
      "Thaideal รวมข้อมูลโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี จากแบรนด์ F168/MK8 อัปเดตทุกวัน ให้รายละเอียดวิธีรับสิทธิ์ เงื่อนไข และช่วงเวลาอย่างเป็นทางการ ใช้งานง่ายและปลอดภัย",
    publisher: {
      "@type": "Organization",
      name: "Thaideal",
      url: "https://thaideal.co/",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaideal.co/" },
      ],
    },
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ดูโปรโมชันและโค้ดเครดิตฟรีของ F168/MK8 ได้ที่ไหน?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ผู้ใช้สามารถเข้าชม thaideal.co เพื่อดูรายการโปรโมชันและโค้ดเครดิตฟรีของ F168/MK8 ซึ่งอัปเดตทุกวัน มีข้อมูลเงื่อนไขและช่วงเวลาอย่างละเอียดจากแหล่งทางการ",
        },
      },
      {
        "@type": "Question",
        name: "Thaideal อัปเดตโปรโมชันบ่อยแค่ไหน?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Thaideal อัปเดตข้อมูลโปรโมชันและโค้ดเครดิตฟรีหลายครั้งต่อวัน เพื่อให้ผู้ใช้ได้รับข้อมูลล่าสุดเสมอ",
        },
      },
      {
        "@type": "Question",
        name: "Thaideal เป็นเว็บไซต์อย่างเป็นทางการของ F168/MK8 หรือไม่?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Thaideal ไม่ใช่ผู้ให้บริการโดยตรง แต่เป็นแหล่งรวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8 เพื่อให้ผู้ใช้งานเข้าถึงข้อมูลจริงจากแหล่งทางการได้สะดวกยิ่งขึ้น",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "โค้ดเครดิตฟรี",
    inDefinedTermSet: "https://thaideal.co",
    description: "คำหลักที่ใช้สำหรับโปรโมชันและสิทธิ์รับโค้ดเครดิตฟรีในเว็บไซต์ Thaideal",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th-TH">
      <head>
        {/* ✅ Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/thaibet-icon-180.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Verification */}
        <meta name="msvalidate.01" content="1C15A36A3A5BC7B9C3B25F930B875D3C" />
        <meta name="yandex-verification" content="d4d6f898304da230" />
        <meta name="ahrefs-site-verification" content="331fc5cd20258534cbd5350c2f14552462a6314fc939757dfcecc1554bc30388" />

        {/* ✅ Preconnects */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* ✅ Fonts */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap"
        />

        {/* ✅ Combined JSON-LD */}
        <Script
          id="ld-json-all"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ GA4 (lazy load) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GKZCJB90H9" strategy="lazyOnload" />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-GKZCJB90H9', { transport_type: 'beacon' });
          `}
        </Script>

        {/* ✅ Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="wU5GkV8gO2jtwxj7Hi8X8A"
          strategy="lazyOnload"
        />
      </head>

      <body className="m-0 bg-black text-white antialiased">
        {/* <Preloader /> */}
        <Header />
        {children}
        <Fab />
        <MobileBottomBar
          left={{ label: "สมัคร F168", href: F168lINK }}
          right={{ label: "สมัคร MK8", href: MK8LINK }}
        />
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

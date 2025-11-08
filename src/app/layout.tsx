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
/* 🔹 SEO Metadata (คุณภาพสูง)                                               */
/* -------------------------------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://thaideal.co/"),
  alternates: { canonical: "/" },
  title: {
    default: "Thaideal | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    template: "%s | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี — Thaideal",
  },
  description:
    "Thaideal แหล่งรวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168/MK8 อัปเดตทุกวัน พร้อมข้อมูลเงื่อนไขจริงจากแหล่งทางการ เว็บไซต์ที่ได้รับการรับรองมาตรฐานสากล",
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    url: "https://thaideal.co/",
    title: "Thaideal | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    description:
      "Thaideal เว็บไซต์ที่ได้รับการรับรองด้านความปลอดภัยและความรับผิดชอบ รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168 / MK8 อัปเดตทุกวัน",
    images: [
      {
        url: "https://thaideal.co/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaideal – เว็บไซต์ที่ได้รับการรับรองอย่างเป็นทางการ",
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
      "Thaideal เว็บไซต์ที่ได้รับการรับรองมาตรฐาน อัปเดตโปรโมชันและโค้ดเครดิตฟรีทุกวัน ใช้งานง่าย ปลอดภัย และโปร่งใส",
    images: ["https://thaideal.co/og/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/* -------------------------------------------------------------------------- */
/* 🔹 JSON-LD Schema (ไม่ซ้ำกับ Footer)                                      */
/* -------------------------------------------------------------------------- */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thaideal",
    url: "https://thaideal.co/",
    inLanguage: "th-TH",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thaideal.co/#webpage",
    url: "https://thaideal.co/",
    name: "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168 / MK8",
    description:
      "Thaideal ได้รับการรับรองจากองค์กรตรวจสอบเกมระดับโลก เช่น BMM Testlabs, iTech Labs และ BeGambleAware เพื่อความโปร่งใสและความปลอดภัยของผู้ใช้",
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
    inLanguage: "th-TH",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Thaideal ได้รับการรับรองจากที่ใด?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Thaideal ได้รับการสนับสนุนจากองค์กรด้านความปลอดภัยและความรับผิดชอบ เช่น GamCare, BeGambleAware, BMM Testlabs, iTech Labs, Gaming Labs International และ Responsible 18+",
        },
      },
      {
        "@type": "Question",
        name: "Thaideal อัปเดตโปรโมชันบ่อยแค่ไหน?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Thaideal อัปเดตข้อมูลโปรโมชันและโค้ดเครดิตฟรีหลายครั้งต่อวัน เพื่อให้ผู้ใช้ได้รับข้อมูลล่าสุดและปลอดภัยเสมอ",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaideal.co/" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 🔹 Root Layout                                                             */
/* -------------------------------------------------------------------------- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th-TH">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/thaibet-icon-180.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Verification */}
        <meta name="msvalidate.01" content="1C15A36A3A5BC7B9C3B25F930B875D3C" />
        <meta name="yandex-verification" content="d4d6f898304da230" />
        <meta
          name="ahrefs-site-verification"
          content="331fc5cd20258534cbd5350c2f14552462a6314fc939757dfcecc1554bc30388"
        />

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

        {/* ✅ GA4 */}
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

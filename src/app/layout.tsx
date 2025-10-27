import type { Metadata } from "next";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
//import ScrollUp from "@/components/ScrollUp";
import "./globals.css";
import Script from "next/script";
import MobileBottomBar from "./components/BottomBar";
import Footer from "@/components/Footer";
import { F168lINK, MK8LINK } from "@/config/site";
import { Fab } from "@/components/Fab";

export const metadata: Metadata = {
  metadataBase: new URL("https://thaibetz.com/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Thaibet | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    template: "%s | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี — Thaibet",
  },
  description:
    "Thaibet แหล่งรวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี อัปเดตทุกวันอย่างโปร่งใส พร้อมสรุปเงื่อนไข วิธีรับสิทธิ์ และลิงก์ทางการที่เชื่อถือได้",
  applicationName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    url: "https://thaibetz.com/",
    title: "Thaibet | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    description:
      "รวมโปรโมชันและโค้ดเครดิตฟรีจากหลายแหล่ง อัปเดตทุกวัน บอกช่วงปล่อยสิทธิ์ เงื่อนไขครบ พร้อมแนวทางรับสิทธิ์อย่างปลอดภัย",
    images: [
      {
        url: "https://thaibetz.com/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaibet – รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",
    creator: "@thaibetz",
    title:
      "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี (อัปเดตทุกวัน)",
    description:
      "ติดตามข้อมูลโปรโมชันและโค้ดเครดิตฟรี อัปเดตทุกวัน ตรวจสอบเงื่อนไขจริง พร้อมลิงก์ทางการใช้งานง่าย ปลอดภัย",
    images: ["https://thaibetz.com/og/og.webp"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ✅ JSON-LD: Organization (เชิงข้อมูล ไม่ขาย) */
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thaibetz.com/#organization",
    name: "Thaibet",
    legalName: "Thaibet",
    slogan: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8",
    url: "https://thaibetz.com/",
    logo: "https://thaibetz.com/icons/thaibet-icon-512.png",
    image: "https://thaibetz.com/og/og.webp",
    description:
      "Thaibet เป็นศูนย์รวมข้อมูลโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี สำหรับ F168/MK8 อัปเดตทุกวัน พร้อมรายละเอียดเงื่อนไข วิธีเข้าร่วม และแหล่งทางการที่เชื่อถือได้",
    foundingDate: "2023-01-01",
    founder: [{ "@type": "Person", name: "Thaibet" }],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "admin@thaibetz.com",
        url: "https://thaibetz.com/contact-us/",
        areaServed: "TH",
        availableLanguage: ["th"],
      },
    ],
    address: { "@type": "PostalAddress", addressCountry: "TH" },
    sameAs: ["https://x.com/thaibetz"],
  };

  /* ✅ JSON-LD: WebSite (เปิด SearchAction ได้ถ้ามี search) */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thaibet",
    alternateName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    description:
      "ศูนย์รวมข้อมูลโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี จากแบรนด์ F168 และ MK8 อัปเดตทุกวัน ระบุช่วงเวลาและเงื่อนไขอย่างชัดเจน พร้อมลิงก์ทางการที่ตรวจสอบได้",
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaibetz.com/icons/thaibet-icon-512.png",
      },
    },
    sameAs: ["https://x.com/thaibetz"],
  };

  /* ✅ JSON-LD: CollectionPage (หน้าโฮม = ศูนย์รวมเนื้อหา) */
  const homeWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://thaibetz.com/",
    },
    name: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    isPartOf: { "@type": "WebSite", name: "Thaibet", url: "https://thaibetz.com/" },
    description:
      "Thaibet รวมข้อมูลโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี จากแบรนด์ F168/MK8 อัปเดตทุกวัน ให้รายละเอียดวิธีรับสิทธิ์ เงื่อนไข และช่วงเวลาอย่างเป็นทางการ ใช้งานง่ายและปลอดภัย",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://thaibetz.com/og/og.webp",
    },
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaibetz.com/icons/thaibet-icon-512.png",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaibetz.com/" },
      ],
    },
    hasPart: {
      "@type": "ItemList",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: 0,
      itemListElement: [],
    },
    about: [
      { "@type": "Thing", name: "F168" },
      { "@type": "Thing", name: "MK8" },
      { "@type": "Thing", name: "เครดิตฟรี" },
      { "@type": "Thing", name: "โค้ดเครดิตฟรี" },
      { "@type": "Thing", name: "รวมโปรโมชัน" },
      { "@type": "Thing", name: "โปรโมชั่นคาสิโน" },
    ],
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
  };

  /* ✅ JSON-LD: FAQPage (โทนข้อมูลจริง ไม่โฆษณา) */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ดูโปรโมชันและโค้ดเครดิตฟรีของ F168/MK8 ได้ที่ไหน?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "ผู้ใช้สามารถเข้าชม thaibetz.com เพื่อดูรายการโปรโมชันและโค้ดเครดิตฟรีของ F168/MK8 ซึ่งอัปเดตทุกวัน มีข้อมูลเงื่อนไขและช่วงเวลาอย่างละเอียดจากแหล่งทางการ",
        },
      },
      {
        "@type": "Question",
        name: "Thaibet อัปเดตโปรโมชันบ่อยแค่ไหน?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Thaibet อัปเดตข้อมูลโปรโมชันและโค้ดเครดิตฟรีหลายครั้งต่อวัน โดยจะปรับข้อมูลเมื่อมีการเปลี่ยนแปลงจาก F168 หรือ MK8 เพื่อให้ผู้ใช้ได้รับข้อมูลล่าสุดเสมอ",
        },
      },
      {
        "@type": "Question",
        name: "สามารถเช็กเงื่อนไขการใช้โค้ดเครดิตฟรีได้จากที่ไหน?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "แต่ละรายการใน Thaibet จะมีสรุปเงื่อนไขการใช้สิทธิ์และรายละเอียดที่เกี่ยวข้อง เพื่อให้ผู้ใช้เข้าใจและตัดสินใจได้ง่ายก่อนเข้าร่วมโปรโมชัน",
        },
      },
      {
        "@type": "Question",
        name: "Thaibet เป็นเว็บไซต์อย่างเป็นทางการของ F168/MK8 หรือไม่?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Thaibet ไม่ใช่ผู้ให้บริการโดยตรง แต่เป็นแหล่งรวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีจาก F168 และ MK8 เพื่อให้ผู้ใช้งานเข้าถึงข้อมูลจริงจากแหล่งทางการได้สะดวกยิ่งขึ้น",
        },
      },
    ],
  };
  return (
    <html lang="th-TH">
      <head>
        {/* ✅ Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/thaibet-icon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/thaibet-icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/thaibet-icon-180.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Verification */}
        <meta name="msvalidate.01" content="1C15A36A3A5BC7B9C3B25F930B875D3C" />
        <meta name="yandex-verification" content="6617f160bacf4988" />
        <meta name="ahrefs-site-verification" content="331fc5cd20258534cbd5350c2f14552462a6314fc939757dfcecc1554bc30388" />

        {/* ✅ Preconnect for faster script/fonts loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* ✅ Font Preload (ลด LCP) */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap"
        />

        {/* ✅ JSON-LD (สามารถรวม script เดียว ลด blocking) */}
        <Script
          id="ld-json-all"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              homeWebPageJsonLd,
              orgJsonLd,
              websiteJsonLd,
              faqJsonLd,
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "โค้ดเครดิตฟรี",
                "inDefinedTermSet": "https://thaibetz.com/",
                "description": "คำหลักที่ใช้สำหรับโปรโมชันและสิทธิ์รับโค้ดเครดิตฟรีในเว็บไซต์ Thaibet"
              }
            ])
          }}
        />

        {/* ✅ Analytics moved to lazy load to reduce INP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-95DWKD4J5C"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-95DWKD4J5C');
    `}
        </Script>

        {/* ✅ GTM (lazy load instead of afterInteractive) */}
        <Script id="gtm-head" strategy="lazyOnload">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MMTZHR4T');
    `}
        </Script>

        {/* ✅ Ahrefs Analytics lazy */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="A0ew7rDIrELHZli1Z6TB1w"
          strategy="lazyOnload"
        />
      </head>
      <body style={{ margin: '0px' }}>
        {/* GTM - BODY (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMTZHR4T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Preloader />
        <Header />
        {children}
        { /* <ScrollUp /> */}

        <Fab />
        <MobileBottomBar
          left={{ label: "สมัคร F168", href: F168lINK }}
          right={{ label: "สมัคร MK8", href: MK8LINK }}
        />
        <Footer />
      </body>
    </html>
  );
}

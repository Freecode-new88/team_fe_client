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
  title: {
    // เน้นคำหลักทั้งสาม แต่สั้น กระชับ
    default: "Thaibet | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    template: "%s | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 — Thaibet",
  },
  // พูดธรรมชาติ แทรกคำหลักครั้งละ 1 รอบพอ
  description:
    "Thaibet รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี สำหรับ F168/MK8 อัปเดตทุกวัน บอกช่วงปล่อยสิทธิ์และเงื่อนไขชัดเจน มีลิงก์ทางการ ใช้งานง่าย ปลอดภัย",
  applicationName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
  // ... (ส่วนอื่นคงเดิม)
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8",
    url: "https://thaibetz.com/",
    title: "Thaibet | รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    description: "ติดตามโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี จาก F168/MK8 อัปเดตทุกวัน มีแจ้งรอบปล่อยสิทธิ์ เงื่อนไขชัด พร้อมลิงก์ทางการ",
    images: [
      {
        url: "https://thaibetz.com/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaibet – รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",
    creator: "@thaibetz",
    title: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    description: "รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 อัปเดตทุกวัน เงื่อนไขชัด ระบบออโต้ โปร่งใส ปลอดภัย",
    images: ["https://thaibetz.com/og/og.webp"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ✅ JSON-LD: Organization (ทางการ/ครบถ้วน/สอดคล้องแบรนด์) */
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thaibetz.com/#organization",
    name: "Thaibet",
    legalName: "Thaibet",
    slogan: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    url: "https://thaibetz.com/",
    logo: "https://thaibetz.com/icons/thaibet-icon-512.png",
    image: "https://thaibetz.com/og/og.webp",
    description:
      "แหล่งรวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี สำหรับ F168/MK8 อัปเดตทุกวัน ระบุเงื่อนไขและช่วงปล่อยสิทธิ์ชัดเจน พร้อมลิงก์ทางการ ใช้งานง่าย ปลอดภัย",
    foundingDate: "2023-01-01",
    founder: [{ "@type": "Person", name: "Thaibet" }],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "admin@thaibetz.com",
        url: "https://thaibetz.com/contact-us/",
        areaServed: "TH",
        availableLanguage: ["th"]
      }
    ],
    address: { "@type": "PostalAddress", addressCountry: "TH" },
    sameAs: [
      "https://x.com/thaibetz"
    ]
  };

  /* ✅ JSON-LD: WebSite (เปิด SearchAction + ใช้แบรนด์ไลน์เดียวกัน) */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thaibet",
    alternateName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    description:
      "แหล่งรวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี สำหรับ F168/MK8 อัปเดตทุกวัน ระบุช่วงปล่อยสิทธิ์และเงื่อนไขชัดเจน พร้อมลิงก์ทางการ ใช้งานง่าย ปลอดภัย",
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: { "@type": "ImageObject", url: "https://thaibetz.com/icons/thaibet-icon-512.png" }
    },
    // เปิดใช้ถ้ามีระบบค้นหาในไซต์
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: "https://thaibetz.com/search?q={query}",
    //   "query-input": "required name=query"
    // },
    sameAs: ["https://x.com/thaibetz"]
  };

  /* ✅ JSON-LD: CollectionPage (โฮมเป็นหน้ารวม — เหมาะกับศูนย์รวมรายการ) */
  const homeWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://thaibetz.com/"
    },
    name: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    isPartOf: { "@type": "WebSite", name: "Thaibet", url: "https://thaibetz.com/" },
    description:
      "ติดตามโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี ของ F168/MK8 อัปเดตทุกวัน ระบุช่วงปล่อยสิทธิ์และเงื่อนไขชัดเจน พร้อมลิงก์ทางการ ใช้งานง่าย ปลอดภัย",
    primaryImageOfPage: { "@type": "ImageObject", url: "https://thaibetz.com/og/og.webp" },
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: { "@type": "ImageObject", url: "https://thaibetz.com/icons/thaibet-icon-512.png" }
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaibetz.com/" }
      ]
    },
    hasPart: {
      "@type": "ItemList",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: 0,
      itemListElement: []
    },
    about: [
      { "@type": "Thing", name: "F168" },
      { "@type": "Thing", name: "MK8" },
      { "@type": "Thing", name: "เครดิตฟรี" },
      { "@type": "Thing", name: "โค้ดเครดิตฟรี" },
      { "@type": "Thing", name: "รวมโปรโมชัน" },
      { "@type": "Thing", name: "โปรโมชันคาสิโน" }
    ],
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString()
  };

  /* ✅ JSON-LD: FAQPage (กระชับ/เป็นทางการ/สอดคล้องแบรนด์) */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "รับโค้ดเครดิตฟรี F168/MK8 ทำอย่างไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "เข้า thaibetz.com เลือกแบรนด์ F168 หรือ MK8 ตรวจสอบเงื่อนไขและสถานะโค้ด กดรับสิทธิ์ แล้วทำตามขั้นตอนที่ระบุ ระบบจะยืนยันสิทธิ์ให้อัตโนมัติ"
        }
      },
      {
        "@type": "Question",
        name: "ปล่อยสิทธิ์วันละกี่รอบ และอัปเดตเมื่อไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "มีหลายรอบต่อวัน โดยจะแจ้งอัปเดตแบบเรียลไทม์บนหน้าเว็บไซต์ แนะนำให้ติดตามหน้าหลักและเปิดการแจ้งเตือนเพื่อไม่พลาดโค้ดใหม่"
        }
      },
      {
        "@type": "Question",
        name: "ต้องฝากขั้นต่ำเท่าไรจึงจะใช้เครดิตฟรีได้?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "ขึ้นกับแต่ละโปรโมชันของ F168/MK8 โปรดอ่านเงื่อนไขใต้รายการให้ครบ รวมถึงเทิร์นโอเวอร์และข้อกำหนดการถอนก่อนกดรับสิทธิ์"
        }
      },
      {
        "@type": "Question",
        name: "การฝาก–ถอนอัตโนมัตินานไหม และมีค่าธรรมเนียมหรือไม่?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "ส่วนใหญ่ใช้เวลาไม่กี่วินาทีถึงประมาณ 1 นาที ทั้งนี้ขึ้นกับช่วงเวลาให้บริการและธนาคาร หากล่าช้าผิดปกติหรือพบปัญหา ติดต่อฝ่ายสนับสนุนได้ทันที"
        }
      },
      {
        "@type": "Question",
        name: "ถ้ารับโค้ดไม่ทัน ต้องทำอย่างไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "รอรอบปล่อยสิทธิ์ถัดไปหรือติดตามประกาศล่าสุดบนหน้า Thaibet แนะนำให้เปิดแจ้งเตือนและเช็กตารางรอบปล่อยสิทธิ์เพื่อเพิ่มโอกาสรับโค้ด"
        }
      }
    ]
  };
  return (
    <html lang="th-TH">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/thaibet-icon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/thaibet-icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/thaibet-icon-180.png" />
        <meta name="msvalidate.01" content="1C15A36A3A5BC7B9C3B25F930B875D3C" />
        <meta name="yandex-verification" content="6617f160bacf4988" />
        <meta name="ahrefs-site-verification" content="331fc5cd20258534cbd5350c2f14552462a6314fc939757dfcecc1554bc30388"></meta>
        {/* GA4 ตามที่ให้มา */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-95DWKD4J5C"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-95DWKD4J5C'); // ใช้ออโต้ page_view
          `}
        </Script>
        {/* GTM - HEAD */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMTZHR4T');
          `}
        </Script>

        <Script
          id="ld-json-home-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageJsonLd) }}
        />
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <Script
          id="ld-json-faqpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="A0ew7rDIrELHZli1Z6TB1w"
          strategy="afterInteractive"
          async
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

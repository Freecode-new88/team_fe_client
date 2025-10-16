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
    default: "Thaibet | ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    template: "%s | ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 — Thaibet",
  },
  description:
    "ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 อัปเดตรายวัน ระบุเงื่อนไขและช่วงปล่อยสิทธิ์ชัดเจน สมัครใช้งานง่าย ระบบฝาก–ถอนอัตโนมัติ ปลอดภัย โปร่งใส",
  applicationName: "Thaibet — ศูนย์รวมโปร & โค้ดเครดิตฟรี",
  authors: [{ name: "ทิมล่าโปร" }],
  generator: "Next.js",
  keywords: [
    "ศูนย์รวมโปรโมชัน", "โค้ดเครดิตฟรี", "F168", "MK8",
    "เครดิตฟรีล่าสุด", "โค้ดเครดิตฟรีวันนี้", "โปรสมาชิกใหม่",
    "สล็อต", "บาคาร่า", "คาสิโนออนไลน์", "เว็บตรง",
    "ฝากถอนออโต้", "ไม่ต้องแชร์", "ยืนยันตัวตน"
  ],
  category: "โปรโมชั่นและส่วนลด",
  alternates: {
    canonical: "https://thaibetz.com/",
    languages: { "th-TH": "https://thaibetz.com/" },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8",
    url: "https://thaibetz.com/",
    title: "ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน) | Thaibet",
    description:
      "ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 อัปเดตรายวัน ระบุเงื่อนไขและช่วงปล่อยสิทธิ์ชัดเจน สมัครใช้งานง่าย ระบบฝาก–ถอนอัตโนมัติ ปลอดภัย โปร่งใส",
    images: [
      {
        url: "https://thaibetz.com/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaibet – ศูนย์รวมโปร & โค้ดเครดิตฟรี F168/MK8",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",      // ถ้ายังไม่มีแอคเคานต์ทางการ คงไว้ก่อน
    creator: "@thaibetz",
    title: "Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    description:
      "ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 อัปเดตรายวัน ระบุเงื่อนไขและช่วงปล่อยสิทธิ์ชัดเจน สมัครใช้งานง่าย ระบบฝาก–ถอนอัตโนมัติ ปลอดภัย โปร่งใส",
    images: ["https://thaibetz.com/og/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/thaibet-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/thaibet-icon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/icons/thaibet-icon-180.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/icons/thaibet-icon-32.png"]
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "6B6z7GYEpScXkuFyiryYsnPPcuHXoYviBFPcdzWgftM",
    yandex: "6617f160bacf4988",
    other: {
      "msvalidate.01": "1C15A36A3A5BC7B9C3B25F930B875D3C",
    }
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
    name: "Thaibet",
    legalName: "Thaibet",
    slogan: "Thaibet - ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
    url: "https://thaibetz.com/",
    logo: "https://thaibetz.com/icons/thaibet-icon-512.png",
    image: "https://thaibetz.com/og/og.webp",
    description:
      "Thaibet - ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 อัปเดตรายวัน ระบุเงื่อนไขชัดเจน ระบบฝาก–ถอนอัตโนมัติ ปลอดภัย โปร่งใส",
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
      "https://x.com/thaibetz",
      "https://x.com/CosplayFeverX"
    ]
  };

  /* ✅ JSON-LD: WebSite (เปิด SearchAction + ใช้แบรนด์ไลน์เดียวกัน) */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thaibet",
    alternateName: "Thaibet - ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    description:
      "Thaibet - ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 อัปเดตรายวัน ระบุเงื่อนไขชัดเจน ระบบฝาก–ถอนอัตโนมัติ ปลอดภัย โปร่งใส",
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: { "@type": "ImageObject", url: "https://thaibetz.com/icons/thaibet-icon-512.png" }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thaibetz.com/search?q={query}",
      "query-input": "required name=query"
    },
    sameAs: ["https://x.com/thaibetz"]
  };

  /* ✅ JSON-LD: CollectionPage (โฮมเป็นหน้ารวม — เหมาะกับศูนย์รวมรายการ) */
  const homeWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Thaibet - ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี F168/MK8 (อัปเดตทุกวัน)",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    isPartOf: { "@type": "WebSite", name: "Thaibet", url: "https://thaibetz.com/" },
    description:
      "ติดตามโปรโมชันและโค้ดเครดิตฟรี F168/MK8 อัปเดตรายวัน ระบุช่วงปล่อยสิทธิ์และเงื่อนไขชัดเจน พร้อมลิงก์ทางการและคำแนะนำใช้งานอย่างปลอดภัย",
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
    /* ใส่รายการจริงตอนเรนเดอร์: mapping โค้ดวันนี้ → ItemList/Offer */
    hasPart: {
      "@type": "ItemList",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: 0, // ← อัปเดตเป็นจำนวนจริง
      itemListElement: [
        /* ตัวอย่างโครงสร้าง (เติมจริงตอนเรนเดอร์)
        {
          "@type": "Offer",
          name: "โค้ดเครดิตฟรี 20 — F168",
          brand: { "@type": "Brand", name: "F168" },
          price: 0,
          priceCurrency: "THB",
          availability: "http://schema.org/InStock",
          validThrough: "2025-10-14T23:59:59+07:00",
          url: "https://thaibetz.com/freecode/f168-20"
        }
        */
      ]
    },
    about: [
      { "@type": "Thing", name: "F168" },
      { "@type": "Thing", name: "MK8" },
      { "@type": "Thing", name: "ศูนย์รวมโปรโมชัน" },
      { "@type": "Thing", name: "ศูนย์รวมโค้ดเครดิตฟรี" },
      { "@type": "Thing", name: "โค้ดโปรโมชั่น" },
      { "@type": "Thing", name: "โค้ดเครดิตฟรีวันนี้" },
      { "@type": "Thing", name: "โค้ดเครดิตฟรีล่าสุด" },
      { "@type": "Thing", name: "โปรโมชัน F168" },
      { "@type": "Thing", name: "โปรโมชัน MK8" },
      { "@type": "Thing", name: "โบนัสต้อนรับ" },
      { "@type": "Thing", name: "โปรสมาชิกใหม่" },
      { "@type": "Thing", name: "โบนัสฝากครั้งแรก" },
      { "@type": "Thing", name: "เทิร์นโอเวอร์" },
      { "@type": "Thing", name: "เงื่อนไขการถอน" },
      { "@type": "Thing", name: "ช่วงเวลาปล่อยสิทธิ์" },
      { "@type": "Thing", name: "การแจ้งเตือนรอบสิทธิ์" },
      { "@type": "Thing", name: "ระบบฝาก–ถอนอัตโนมัติ" },
      { "@type": "Thing", name: "การยืนยันตัวตน" },
      { "@type": "Thing", name: "ข้อกำหนดและเงื่อนไข" },
      { "@type": "Thing", name: "นโยบายความเป็นส่วนตัว" },
      { "@type": "Thing", name: "แนวทางการใช้งานอย่างรับผิดชอบ" },
      { "@type": "Thing", name: "ศูนย์ช่วยเหลือลูกค้า" },
      { "@type": "Thing", name: "ความปลอดภัยของผู้ใช้" },
      { "@type": "Thing", name: "ความโปร่งใสในการให้ข้อมูล" }
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
        name: "วิธีรับโค้ดและเครดิตฟรี F168/MK8 ทำอย่างไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "เข้าเว็บ thaibetz.com เลือกแบรนด์ F168 หรือ MK8 ตรวจสอบเงื่อนไขและสถานะโค้ด กดรับสิทธิ์และปฏิบัติตามขั้นตอน ระบบจะยืนยันโดยอัตโนมัติ"
        }
      },
      {
        "@type": "Question",
        name: "มีการปล่อยสิทธิ์วันละกี่รอบ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "มีหลายรอบต่อวัน โดยจะแจ้งอัปเดตตามเวลาจริงบนหน้าเว็บไซต์ โปรดติดตามประกาศล่าสุด"
        }
      },
      {
        "@type": "Question",
        name: "ต้องฝากขั้นต่ำเท่าไรเพื่อรับเครดิตฟรี?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "ขึ้นอยู่กับเงื่อนไขของแต่ละโปรโมชัน กรุณาอ่านรายละเอียดใต้รายการก่อนกดรับสิทธิ์"
        }
      },
      {
        "@type": "Question",
        name: "การฝาก–ถอนอัตโนมัติใช้เวลานานไหม?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "โดยทั่วไปใช้เวลาไม่กี่วินาทีถึงประมาณ 1 นาที หากล่าช้าเกินปกติ กรุณาติดต่อฝ่ายสนับสนุน"
        }
      },
      {
        "@type": "Question",
        name: "ถ้ารับโค้ดไม่ทันควรทำอย่างไร?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "รอรอบปล่อยสิทธิ์ถัดไป หรือเปิดการแจ้งเตือนบนหน้าเว็บไซต์เพื่อไม่ให้พลาดโค้ดใหม่"
        }
      }
    ]
  };
  return (
    <html lang="th">
      <head>
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
        async
      />
    </html>
  );
}

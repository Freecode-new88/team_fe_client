import type { Metadata } from "next";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import ScrollUp from "@/components/ScrollUp";
import "./globals.css";
import Script from "next/script";
import MobileBottomBar from "./components/BottomBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://thaibetz.com/"), // ← ใส่โดเมนจริงของคุณ
  title: {
    default: "แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย",
    template: "%s | แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย",
  },
  description:
    "อัปเดตโค้ดและเครดิตฟรี F168, MK8 ทุกวัน สมัครง่าย ฝาก-ถอนออโต้ ปลอดภัย โปร่งใส ระบุช่วงปล่อยสิทธิ์ชัดเจน ไม่พลาดโปรดี ๆ",
  applicationName: "โค้ด & เครดิตฟรี F168/MK8",
  authors: [{ name: "ทิมล่าโปร" }],
  generator: "Next.js",
  keywords: [
    "F168", "MK8", "แจกโค้ด", "เครดิตฟรี",
    "คาสิโนออนไลน์", "สล็อต", "บาคาร่า", "เว็บตรง",
    "ฝาก-ถอนออโต้", "โปรโมชั่นคาสิโน", "สล็อตแตกง่าย",
  ],
  category: "โปรโมชั่น ส่วนลด",
  alternates: {
    canonical: "https://thaibetz.com/",
    languages: { "th-TH": "https://thaibetz.com/" },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน",
    url: "https://thaibetz.com/",
    title: "แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย",
    description:
      "รวมโค้ดและเครดิตฟรีอัปเดตทุกวัน สมัครง่าย ฝาก-ถอนออโต้ ปลอดภัย โปร่งใส ไม่พลาดช่วงปล่อยสิทธิ์",
    images: [
      {
        url: "https://thaibetz.com/og/og.png", // แนะนำ 1200x630
        width: 1200,
        height: 630,
        alt: "โค้ด & เครดิตฟรี F168, MK8 อัปเดตทุกวัน",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CosplayFeverX",
    creator: "@CosplayFeverX",
    title: "แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย",
    description:
      "อัปเดตโค้ดและเครดิตฟรี F168, MK8 ทุกวัน สมัครง่าย ฝาก-ถอนออโต้ ปลอดภัย โปร่งใส ระบุช่วงปล่อยสิทธิ์ชัดเจน",
    images: ["http://thaibetz.com/og/og.png"],
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
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
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
  {/* ✅ JSON-LD: Organization */ }
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ทิมล่าโปร",
    url: "https://thaibetz.com/",
    logo: "https://thaibetz.com/icons/icon-512.png",
    image: "https://thaibetz.com/og/og.png",
    description:
      "ศูนย์รวมโค้ดและเครดิตฟรี อัปเดตทุกวัน โปร่งใส ปลอดภัย ฝาก-ถอนออโต้",
    foundingDate: "2025-01-01",
    founder: [{ "@type": "Person", name: "ทีมล่าโปร" }],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@thaibetz.com",
        url: "https://thaibetz.com/contact",
        areaServed: "TH",
        availableLanguage: ["th"],
      },
    ],
    address: { "@type": "PostalAddress", addressCountry: "TH" },
    sameAs: [
      "https://twitter.com/yourhandle",
    ],
  };
  {/* ✅ JSON-LD: WebSite */ }
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ทิมล่าโปร",
    alternateName: "TimLaPro",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    description:
      "ศูนย์รวมโค้ดและเครดิตฟรี อัปเดตทุกวัน โปร่งใส ปลอดภัย ฝาก-ถอนออโต้",
    publisher: {
      "@type": "Organization",
      name: "ทิมล่าโปร",
      url: "https://thaibetz.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaibetz.com/icons/icon-512.png"
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thaibetz.com/search?q={query}",
      "query-input": "required name=query"
    },
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://twitter.com/yourhandle",
      "https://www.instagram.com/yourhandle",
      "https://www.youtube.com/@yourchannel"
    ]
  };
  {/* ✅ JSON-LD: WebPage (หน้าโฮม) */ }

  const homeWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "แจกโค้ด & เครดิตฟรี F168, MK8 ทุกวัน — ฝาก-ถอนออโต้ — ปลอดภัย",
    url: "https://thaibetz.com/",
    inLanguage: "th-TH",
    description:
      "ติดตามโค้ดและเครดิตฟรีจาก F168, MK8 อัปเดตทุกวัน สมัครง่าย ฝาก-ถอนออโต้ ปลอดภัย โปร่งใส ระบุช่วงปล่อยสิทธิ์ชัดเจน",
    isPartOf: {
      "@type": "WebSite",
      name: "ทิมล่าโปร",
      url: "https://thaibetz.com/"
    },
    publisher: {
      "@type": "Organization",
      name: "ทิมล่าโปร",
      url: "https://thaibetz.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaibetz.com/icons/icon-512.png"
      }
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://thaibetz.com/og/og.png"
    },
    about: [
      { "@type": "Thing", name: "F168" },
      { "@type": "Thing", name: "MK8" },
      { "@type": "Thing", name: "เครดิตฟรี" },
      { "@type": "Thing", name: "ฝาก-ถอนออโต้" }
    ]
  };
  {/* ✅ JSON-LD: FAQPage */ }
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "วิธีรับโค้ดและเครดิตฟรี F168, MK8 ทำอย่างไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เข้าเว็บ thaibetz.com รอโค้ดที่ยังไม่ถูกใช้ปรากฏ กรอกโค้ด เลือกแบรนด์ F168 หรือ MK8 จากนั้นทำตามเงื่อนไข กด Claim/ยืนยัน ระบบจะให้สิทธิ์ทันที (หากโค้ดเต็มให้รอรอบปล่อยสิทธิ์ถัดไป)"
        }
      },
      {
        "@type": "Question",
        "name": "ปล่อยสิทธิ์แจกโค้ดทุกวันกี่รอบ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "โดยทั่วไปจะมีการปล่อยสิทธิ์หลายรอบต่อวัน และ โปรดติดตามอัปเดต Realtime บนหน้าเว็บ"
        }
      },
      {
        "@type": "Question",
        "name": "ต้องฝากขั้นต่ำเท่าไรเพื่อรับเครดิตฟรี?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เงื่อนไขฝากขั้นต่ำขึ้นอยู่กับแต่ละโปรฯ กรุณาอ่านรายละเอียดใต้โปรฯ นั้น ๆ บนหน้าเว็บไซต์ก่อนกดรับสิทธิ์"
        }
      },
      {
        "@type": "Question",
        "name": "การฝาก-ถอนออโต้ใช้เวลานานไหม?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ระบบออโต้โดยทั่วไปใช้เวลาเพียงไม่กี่วินาทีถึง 1 นาที หากล่าช้าเกินปกติให้ติดต่อฝ่ายสนับสนุนทันที"
        }
      },
      {
        "@type": "Question",
        "name": "ถ้ารับโค้ดไม่ทันต้องทำอย่างไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "สามารถรอรอบปล่อยสิทธิ์ถัดไป หรือกดติดตามแจ้งเตือนบนหน้าเว็บเพื่อไม่ให้พลาดโค้ดรอบใหม่"
        }
      }
    ]
  };
  return (
    <html lang="th">
      <head>
        <meta name="msvalidate.01" content="1C15A36A3A5BC7B9C3B25F930B875D3C" />
      </head>
      <body style={{ margin: '0px' }}>
        <Preloader />
        <Header />
        {children}
        <ScrollUp />
        <MobileBottomBar
          left={{ label: "สมัคร F168", href: "/register-f168" }}
          right={{ label: "สมัคร MK8", href: "/register-mk8" }}
        />
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
    </html>
  );
}

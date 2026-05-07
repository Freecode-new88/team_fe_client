import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fab } from "@/components/Fab";
import MobileBottomBar from "./components/BottomBar";
import LazyToastContainer from "./components/LazyToastContainer";
import { F168lINK, MK8LINK } from "@/config/site";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/* 🔹 SEO Metadata (คุณภาพสูง)                                               */
/* -------------------------------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://thaideal.co/"),
  alternates: { canonical: "https://thaideal.co" },
  title: {
    default: "Thaideal | รวมโปรโมชัน เครดิตฟรี F168/MK8",
    template: "%s | Thaideal",
  },
  description:
    "Thaideal รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168/MK8 อัปเดตทุกวัน พร้อมเงื่อนไขจริงจากแหล่งทางการ",
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    url: "https://thaideal.co/",
    title: "Thaideal | รวมโปรโมชัน เครดิตฟรี F168/MK8",
    description:
      "รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168 / MK8 อัปเดตทุกวัน พร้อมเงื่อนไขจริงจากแหล่งทางการ",
    images: [
      {
        url: "https://thaideal.co/og/og-v1.webp",
        width: 1200,
        height: 630,
        alt: "Thaideal – เว็บไซต์ที่ได้รับการรับรองอย่างเป็นทางการ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaidealt",
    creator: "@thaidealt",
    title: "Thaideal | รวมโปรโมชัน เครดิตฟรี F168/MK8",
    description:
      "อัปเดตโปรโมชันและโค้ดเครดิตฟรี F168/MK8 ทุกวัน ใช้งานง่าย ปลอดภัย และโปร่งใส",
    images: ["https://thaideal.co/og/og-v1.webp"],
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
const buildDate = new Date().toISOString(); // ← แก้วันที่เวลาที่ deploy จริง
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
    dateModified: buildDate,
    inLanguage: "th-TH",
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
        <meta
          name="description"
          content="Thaideal รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีจาก F168/MK8 อัปเดตทุกวัน พร้อมเงื่อนไขจริงจากแหล่งทางการ"
        />

        {/* ✅ Verification */}
        <meta name="msvalidate.01" content="1C15A36A3A5BC7B9C3B25F930B875D3C" />
        <meta name="yandex-verification" content="d4d6f898304da230" />
        <meta
          name="ahrefs-site-verification"
          content="331fc5cd20258534cbd5350c2f14552462a6314fc939757dfcecc1554bc30388"
        />

        {/* ✅ Combined JSON-LD */}
        <Script
          id="ld-json-all"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ⚡ Lazy GA4: load only after user interaction */}
        <Script id="lazy-ga4" strategy="afterInteractive">
          {`
  function loadGA4() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-GKZCJB90H9';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-GKZCJB90H9', {
      transport_type: 'beacon'
    });

    window.removeEventListener('scroll', loadGA4);
    window.removeEventListener('mousemove', loadGA4);
    window.removeEventListener('touchstart', loadGA4);
    window.removeEventListener('click', loadGA4);
  }

  window.addEventListener('scroll', loadGA4);
  window.addEventListener('mousemove', loadGA4);
  window.addEventListener('touchstart', loadGA4);
  window.addEventListener('click', loadGA4);
`}
        </Script>

        {/* ✅ Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="wU5GkV8gO2jtwxj7Hi8X8A"
          strategy="lazyOnload"
        />
      </head>

      <body className={`${prompt.className} m-0 bg-black text-white antialiased`}>
        <Header />
        <main id="main">{children}</main>
        <Fab />
        <MobileBottomBar
          left={{ label: "สมัคร F168", href: F168lINK }}
          right={{ label: "สมัคร MK8", href: MK8LINK }}
        />
        <Footer />
        <LazyToastContainer />
      </body>
    </html>
  );
}

// app/(legal)/privacy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaideal",
  description:
    "Thaideal ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน ตามหลัก PDPA และ GDPR เพื่อความปลอดภัย โปร่งใส และน่าเชื่อถือสูงสุด.",
  alternates: { canonical: "https://thaideal.co/privacy/" },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaideal.co/privacy/",
    siteName: "Thaideal — ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaideal",
    description:
      "อ่านนโยบายความเป็นส่วนตัวของ Thaideal เพื่อเข้าใจแนวทางการเก็บ ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณตามหลัก PDPA และ GDPR.",
    images: [
      {
        url: "https://thaideal.co/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaideal — นโยบายความเป็นส่วนตัว",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaideal",
    creator: "@thaideal",
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaideal",
    description:
      "Thaideal ให้ความสำคัญกับการปกป้องข้อมูลของคุณ ตามหลัก PDPA และ GDPR เพื่อความปลอดภัยสูงสุด.",
    images: ["https://thaideal.co/og/og.webp"],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thaideal.co/privacy/",
    url: "https://thaideal.co/privacy/",
    name: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaideal",
    inLanguage: "th-TH",
    description:
      "Thaideal อธิบายแนวทางการเก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน รวมถึงการใช้คุกกี้และเครื่องมือวิเคราะห์ ตามหลัก PDPA และ GDPR.",
    publisher: { "@id": "https://thaideal.co/#organization" },
    isPartOf: { "@id": "https://thaideal.co/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "หน้าแรก",
          item: "https://thaideal.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "นโยบายความเป็นส่วนตัว",
          item: "https://thaideal.co/privacy/",
        },
      ],
    },
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <main
        className="mx-auto max-w-3xl px-5 sm:px-6 md:px-8 py-10 leading-relaxed text-gray-900 dark:text-gray-100"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* ✅ Breadcrumb SEO */}
        <nav
          aria-label="breadcrumb"
          className="text-[13px] text-gray-400 mb-3"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1"
            >
              <Link
                href="/"
                itemProp="item"
                className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline"
              >
                <span itemProp="name">หน้าหลัก</span>
              </Link>
              <meta itemProp="position" content="1" />
              <span className="text-gray-500">›</span>
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              aria-current="page"
              className="text-gray-300 font-semibold"
            >
              <span itemProp="name">นโยบายความเป็นส่วนตัว</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* ✅ Title */}
        <header className="mb-5">
          <h1
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
            itemProp="headline"
          >
            นโยบายความเป็นส่วนตัว (Privacy Policy)
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            อัปเดตล่าสุด: 16 ตุลาคม 2025
          </p>
        </header>

        {/* ✅ Main Content */}
        <article
          className="prose prose-sm sm:prose-base dark:prose-invert prose-a:text-cyan-400"
          itemProp="mainEntity"
        >
          <p>
            Thaideal (“เรา”) ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งาน (“คุณ”)
            เอกสารนี้อธิบายการเก็บ ใช้ ปกป้อง และแบ่งปันข้อมูล รวมถึงสิทธิของคุณภายใต้ PDPA และ GDPR.
          </p>

          <h2>1) ข้อมูลที่เราเก็บ</h2>
          <ul>
            <li>ข้อมูลการใช้งาน เช่น หน้าที่เข้าชม การคลิก อุปกรณ์ และ IP (แบบย่อ)</li>
            <li>คุกกี้และเทคโนโลยีที่คล้ายกัน เพื่อปรับปรุงประสบการณ์ของคุณ</li>
            <li>ข้อมูลที่คุณส่งโดยสมัครใจ เช่น อีเมลหรือแบบฟอร์มติดต่อ</li>
          </ul>

          <h2>2) การใช้ข้อมูล</h2>
          <ul>
            <li>ให้บริการเนื้อหา “ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี” อย่างปลอดภัย</li>
            <li>วิเคราะห์และปรับปรุงประสบการณ์ผู้ใช้งาน</li>
            <li>ป้องกันการใช้งานที่ไม่เหมาะสม</li>
            <li>แจ้งข่าวสารสำคัญหรือการเปลี่ยนแปลงนโยบาย</li>
          </ul>

          <h2>3) คุกกี้</h2>
          <p>
            เราใช้คุกกี้จำเป็นเพื่อให้เว็บไซต์ทำงานได้ปกติ และคุกกี้วิเคราะห์เพื่อพัฒนาเว็บไซต์
            คุณสามารถตั้งค่าบราว์เซอร์ให้ปฏิเสธคุกกี้ได้ แต่บางฟีเจอร์อาจใช้งานไม่ได้สมบูรณ์.
          </p>

          <h2>4) เครื่องมือวิเคราะห์ข้อมูล</h2>
          <ul>
            <li>
              <strong>Google Analytics 4 (GA4):</strong> ใช้วิเคราะห์พฤติกรรมผู้ใช้โดยไม่ระบุตัวตน
            </li>
            <li>
              <strong>Ahrefs Analytics:</strong> ใช้วัดประสิทธิภาพและการเข้าชมเว็บไซต์.
            </li>
          </ul>

          <h2>5) ลิงก์ภายนอกและพันธมิตร</h2>
          <p>
            เว็บไซต์นี้อาจมีลิงก์ไปยังพันธมิตร เช่น F168 และ MK8 ซึ่งมีนโยบายความเป็นส่วนตัวของตนเอง โปรดตรวจสอบก่อนใช้งาน.
          </p>

          <h2>6) การเปิดเผยข้อมูล</h2>
          <ul>
            <li>ผู้ให้บริการเทคนิค เช่น ระบบโฮสติ้งและวิเคราะห์ข้อมูล</li>
            <li>หน่วยงานรัฐเมื่อมีกฎหมายบังคับใช้</li>
            <li>กรณีควบรวมกิจการ โดยยังคงมาตรฐานการปกป้องข้อมูล</li>
          </ul>

          <h2>7) การเก็บรักษาและความปลอดภัย</h2>
          <p>
            เราเก็บข้อมูลเท่าที่จำเป็น และใช้มาตรการความปลอดภัยระดับอุตสาหกรรม
            อย่างไรก็ตาม ไม่มีระบบใดปลอดภัย 100%.
          </p>

          <h2>8) สิทธิของผู้ใช้</h2>
          <ul>
            <li>ขอเข้าถึงหรือรับสำเนาข้อมูลของคุณ</li>
            <li>ขอแก้ไข หรือลบข้อมูล</li>
            <li>คัดค้านหรือจำกัดการประมวลผล</li>
            <li>ถอนความยินยอม (ถ้ามี)</li>
          </ul>

          <h2>9) ติดต่อเรา</h2>
          <p>
            อีเมล: <strong>admin@thaideal.co</strong>
            <br />
            หน้าเว็บติดต่อ:{" "}
            <Link href="/contact-us/" className="text-cyan-400 hover:underline">
              thaideal.co/contact-us
            </Link>
          </p>

          <p className="text-xs text-gray-400">
            Thaideal ดำเนินการตามหลัก PDPA และ GDPR เพื่อคุ้มครองข้อมูลของผู้ใช้งานทุกคน.
          </p>
        </article>
      </main>

      {/* ✅ JSON-LD Schema */}
      <Script
        id="ld-json-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// app/(legal)/privacy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว ",
  description:
    "นโยบายความเป็นส่วนตัวของ Thaibet อธิบายวิธีเก็บ ใช้ และปกป้องข้อมูลส่วนบุคคลของผู้ใช้ตามหลัก PDPA และ GDPR เพื่อความปลอดภัยและความโปร่งใสในการใช้งานเว็บไซต์.",
  keywords: [
    "นโยบายความเป็นส่วนตัว",
    "Privacy Policy",
    "Thaibet",
    "PDPA",
    "GDPR",
    "คุ้มครองข้อมูลส่วนบุคคล",
    "คุกกี้",
    "Analytics",
  ],
  alternates: {
    canonical: "https://thaibetz.com/privacy/",
  },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaibetz.com/privacy/",
    siteName: "Thaibet — ศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี",
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaibet",
    description:
      "Thaibet ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน โดยปฏิบัติตามหลัก PDPA และ GDPR อย่างเคร่งครัด เพื่อให้การใช้งานเว็บไซต์ปลอดภัยและโปร่งใส.",
    images: [
      {
        url: "https://thaibetz.com/og/og.webp",
        width: 1200,
        height: 630,
        alt: "Thaibet — นโยบายความเป็นส่วนตัว",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",
    creator: "@thaibetz",
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaibet",
    description:
      "อ่านนโยบายความเป็นส่วนตัวของ Thaibet เพื่อเข้าใจแนวทางการเก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคลของคุณ ตามกฎหมาย PDPA และ GDPR.",
    images: ["https://thaibetz.com/og/og.webp"],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thaibetz.com/privacy/",
    name: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaibet",
    url: "https://thaibetz.com/privacy/",
    inLanguage: "th-TH",
    description:
      "เอกสารนโยบายความเป็นส่วนตัวของ Thaibet อธิบายการเก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน รวมถึงการใช้คุกกี้และเครื่องมือวิเคราะห์ข้อมูล ตามหลัก PDPA และ GDPR.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://thaibetz.com/#website",
      name: "Thaibet",
      url: "https://thaibetz.com/",
    },
    about: [
      { "@type": "Thing", name: "นโยบายความเป็นส่วนตัว" },
      { "@type": "Thing", name: "การคุ้มครองข้อมูลส่วนบุคคล" },
      { "@type": "Thing", name: "PDPA" },
      { "@type": "Thing", name: "GDPR" },
      { "@type": "Thing", name: "คุกกี้" },
      { "@type": "Thing", name: "การวิเคราะห์ข้อมูล" },
    ],
    publisher: {
      "@type": "Organization",
      "@id": "https://thaibetz.com/#organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://thaibetz.com/icons/thaibet-icon-512.png",
      },
    },
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px" }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 32 }}>
            นโยบายความเป็นส่วนตัว (Privacy Policy)
          </h1>
          <p style={{ margin: "8px 0", color: "rgba(0,0,0,0.6)" }}>
            ปรับปรุงล่าสุด: 16 ตุลาคม 2025
          </p>
        </header>

        <section style={{ display: "grid", gap: 16 }}>
          <p>
            Thaibet (“เรา”) ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้ (“คุณ”)
            เอกสารนี้อธิบายประเภทข้อมูลที่เราเก็บ วิธีใช้ ปกป้อง และแบ่งปันข้อมูล
            รวมถึงสิทธิของคุณตามกฎหมาย PDPA (ประเทศไทย)
            และหลักการ GDPR (สหภาพยุโรป)
            หากคุณใช้งานเว็บไซต์{" "}
            <Link href="https://thaibetz.com/">thaibetz.com</Link>{" "}
            ถือว่าคุณยอมรับนโยบายนี้.
          </p>

          <h2 id="what-we-collect">1) ข้อมูลที่เราเก็บ</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ข้อมูลการใช้งาน เช่น หน้าที่เข้าชม การคลิก แหล่งที่มา อุปกรณ์ และ IP (แบบย่อ)</li>
            <li>คุกกี้และเทคโนโลยีที่คล้ายกัน เพื่อปรับปรุงประสบการณ์และวัดผลการใช้งาน</li>
            <li>ข้อมูลที่คุณส่งให้โดยสมัครใจ เช่น อีเมลหรือแบบฟอร์มติดต่อ (ถ้ามี)</li>
          </ul>

          <h2 id="how-we-use">2) การใช้ข้อมูล</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ให้บริการเนื้อหา “ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี” อย่างถูกต้องและปลอดภัย</li>
            <li>วิเคราะห์และปรับปรุงประสบการณ์ผู้ใช้งาน</li>
            <li>ป้องกันการเข้าถึงหรือการใช้งานที่ไม่เหมาะสม</li>
            <li>สื่อสารข่าวสารสำคัญหรือแจ้งการเปลี่ยนแปลงนโยบาย</li>
          </ul>

          <h2 id="cookies">3) คุกกี้</h2>
          <p>
            เราใช้คุกกี้จำเป็นเพื่อให้เว็บไซต์ทำงานได้ตามปกติ
            และคุกกี้วิเคราะห์เพื่อปรับปรุงคุณภาพบริการ
            คุณสามารถตั้งค่าบราว์เซอร์ให้ปฏิเสธคุกกี้ได้
            แต่บางฟีเจอร์อาจทำงานได้ไม่สมบูรณ์.
          </p>

          <h2 id="analytics">4) เครื่องมือวิเคราะห์ข้อมูล</h2>
          <ul style={{ marginTop: 8 }}>
            <li><strong>Google Analytics 4 (GA4):</strong> ใช้วัดผลและวิเคราะห์พฤติกรรมของผู้ใช้ ข้อมูลถูกเก็บแบบไม่ระบุตัวตน.</li>
            <li><strong>Ahrefs Web Analytics:</strong> ใช้วิเคราะห์ประสิทธิภาพและการเข้าชมเว็บไซต์.</li>
          </ul>
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
            หมายเหตุ: ไม่มีการเก็บข้อมูลส่วนบุคคลที่อ่อนไหว และใช้การปิดบัง IP ตามนโยบายของเครื่องมือวิเคราะห์.
          </p>

          <h2 id="links">5) ลิงก์ภายนอกและพันธมิตร</h2>
          <p>
            เว็บไซต์นี้มีลิงก์ไปยังแบรนด์พันธมิตร เช่น F168 และ MK8
            ซึ่งมีนโยบายความเป็นส่วนตัวของตนเอง โปรดตรวจสอบก่อนใช้งาน.
          </p>

          <h2 id="sharing">6) การเปิดเผยข้อมูล</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ผู้ให้บริการทางเทคนิค เช่น โฮสติ้งหรือระบบวิเคราะห์ข้อมูล</li>
            <li>หน่วยงานรัฐหรือข้อกำหนดทางกฎหมาย เมื่อจำเป็น</li>
            <li>ในกรณีการควบรวมกิจการ โดยยังคงรักษามาตรฐานการปกป้องข้อมูล</li>
          </ul>

          <h2 id="security">7) การเก็บรักษาและความปลอดภัย</h2>
          <p>
            เราเก็บข้อมูลเท่าที่จำเป็นและใช้มาตรการรักษาความปลอดภัยตามมาตรฐานอุตสาหกรรม
            อย่างไรก็ตาม ไม่มีระบบใดปลอดภัย 100%.
          </p>

          <h2 id="rights">8) สิทธิของผู้ใช้</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ขอเข้าถึงหรือรับสำเนาข้อมูลของคุณ</li>
            <li>ขอให้แก้ไข หรือลบข้อมูล</li>
            <li>คัดค้านหรือจำกัดการประมวลผล</li>
            <li>ถอนความยินยอม (หากอาศัยฐานความยินยอม)</li>
          </ul>
          <p>หากต้องการใช้สิทธิ โปรดติดต่อเราได้ที่ช่องทางด้านล่าง.</p>

          <h2 id="contact">9) ติดต่อเรา</h2>
          <p>
            อีเมล: <b>admin@thaibetz.com</b><br />
            หน้าเว็บติดต่อ: <Link href="/contact-us/">thaibetz.com/contact-us</Link>
          </p>

          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
            Thaibet ดำเนินการตามหลัก PDPA และ GDPR เพื่อคุ้มครองข้อมูลของผู้ใช้ทุกคน.
          </p>
        </section>
      </main>

      <Script
        id="ld-json-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

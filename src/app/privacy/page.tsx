// app/(legal)/privacy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaibet",
  description:
    "อ่านนโยบายความเป็นส่วนตัวของ Thaibet เพื่อทำความเข้าใจว่าข้อมูลส่วนบุคคลของคุณถูกเก็บ ใช้ และปกป้องอย่างไร รวมถึงสิทธิของคุณภายใต้ PDPA และหลักการ GDPR",
  keywords: [
    "นโยบายความเป็นส่วนตัว",
    "Privacy Policy",
    "Thaibet",
    "PDPA",
    "GDPR",
    "การคุ้มครองข้อมูลส่วนบุคคล",
    "คุกกี้",
    "Analytics",
  ],
  alternates: {
    canonical: "https://thaibetz.com/privacy",
  },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaibetz.com/privacy",
    siteName: "Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaibet",
    description:
      "Thaibet ให้ความสำคัญกับข้อมูลส่วนบุคคลของผู้ใช้ เรียนรู้วิธีที่เราเก็บ ใช้ ปกป้อง และแบ่งปันข้อมูล รวมถึงสิทธิของคุณตามกฎหมาย PDPA และ GDPR",
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
      "Thaibet อธิบายนโยบายคุ้มครองข้อมูลส่วนบุคคล วิธีจัดการคุกกี้ และสิทธิผู้ใช้ตาม PDPA/GDPR",
    images: ["https://thaibetz.com/og/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://thaibetz.com/privacy",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://thaibetz.com/privacy",
    },
    name: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Thaibet",
    url: "https://thaibetz.com/privacy",
    inLanguage: "th-TH",
    description:
      "นโยบายความเป็นส่วนตัวของ Thaibet อธิบายแนวทางในการเก็บ ใช้ และปกป้องข้อมูลส่วนบุคคล รวมถึงการใช้คุกกี้ การวิเคราะห์ข้อมูล และสิทธิของผู้ใช้ตาม PDPA/GDPR",
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
      { "@type": "Thing", name: "Google Analytics 4" },
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
            เอกสารนี้อธิบายประเภทข้อมูลที่เราเก็บ วิธีใช้ แบ่งปัน เก็บรักษา
            และสิทธิของคุณตามกฎหมาย (เช่น PDPA ของไทย และหลักการ GDPR)
            รวมถึงวิธีติดต่อเรา หากคุณใช้งานเว็บไซต์{" "}
            <Link href="https://thaibetz.com/">thaibetz.com</Link>{" "}
            ถือว่าคุณได้อ่านและยอมรับนโยบายนี้แล้ว
          </p>

          <h2 id="what-we-collect">1) ข้อมูลที่เราเก็บ</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              <strong>ข้อมูลการใช้งาน</strong> เช่น หน้าที่เข้าชม การคลิก
              แหล่งที่มา ประเภทอุปกรณ์ และที่อยู่ IP (แบบย่อ)
            </li>
            <li>
              <strong>คุกกี้และเทคโนโลยีคล้ายกัน</strong> เพื่อจดจำพฤติกรรม
              ปรับปรุงประสบการณ์ และวัดผลการใช้งาน
            </li>
            <li>
              <strong>ข้อมูลที่คุณส่งให้โดยสมัครใจ</strong> เช่น
              อีเมลหรือแบบฟอร์มติดต่อ (หากมี)
            </li>
          </ul>

          <h2 id="how-we-use">2) การใช้ข้อมูล</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              เพื่อให้บริการ “ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี” อย่างถูกต้อง
            </li>
            <li>ปรับปรุงประสบการณ์ผู้ใช้และประสิทธิภาพเว็บไซต์</li>
            <li>ป้องกันการทุจริตหรือการใช้งานที่ผิดกฎหมาย</li>
            <li>สื่อสารข่าวสารสำคัญหรือตอบกลับคำร้องของคุณ</li>
          </ul>

          <h2 id="cookies">3) คุกกี้</h2>
          <p>
            เราใช้คุกกี้จำเป็น (Strictly Necessary) เพื่อให้เว็บทำงานได้ตามปกติ
            และคุกกี้วิเคราะห์เพื่อปรับปรุงคุณภาพการใช้งาน
            คุณสามารถตั้งค่าบราว์เซอร์ให้ปฏิเสธคุกกี้ได้
            แต่อาจส่งผลต่อการทำงานของบางฟีเจอร์
          </p>

          <h2 id="analytics">4) เครื่องมือ Analytics</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              <strong>Google Analytics 4 (GA4)</strong>:
              ใช้วัดผลและเข้าใจพฤติกรรมการใช้งานของผู้ใช้
              ข้อมูลจะถูกเก็บในรูปแบบไม่ระบุตัวตน (anonymized)
            </li>
            <li>
              <strong>Ahrefs Web Analytics</strong>:
              ใช้เพื่อวิเคราะห์ทราฟฟิกและประสิทธิภาพหน้าเว็บ
            </li>
          </ul>
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
            หมายเหตุ: เราไม่เก็บข้อมูลส่วนบุคคลที่อ่อนไหว
            และใช้การปกปิด IP ตามนโยบายของเครื่องมือวิเคราะห์
          </p>

          <h2 id="ads-affiliates">5) ลิงก์ภายนอก/พันธมิตร</h2>
          <p>
            เว็บไซต์นี้มีลิงก์ไปยังแบรนด์พันธมิตร เช่น F168 และ MK8
            การคลิกลิงก์ดังกล่าวอาจนำคุณไปยังเว็บไซต์บุคคลที่สาม
            ซึ่งมีนโยบายความเป็นส่วนตัวของตนเอง
            โปรดอ่านนโยบายของเว็บไซต์ปลายทางก่อนใช้งาน
          </p>

          <h2 id="sharing">6) การแบ่งปันข้อมูล</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              <strong>ผู้ประมวลผลข้อมูล</strong> เช่น ผู้ให้บริการโฮสติ้งหรือ Analytics
              ซึ่งอยู่ภายใต้ข้อตกลงรักษาความลับ
            </li>
            <li>
              <strong>ข้อกำหนดทางกฎหมาย</strong> เมื่อต้องเปิดเผยข้อมูลเพื่อปฏิบัติตามกฎหมาย
              หรือปกป้องสิทธิและความปลอดภัยของผู้ใช้
            </li>
            <li>
              <strong>การโอนย้ายธุรกิจ</strong> เช่น การควบรวมกิจการ
              โดยจะยังคงรักษามาตรฐานความปลอดภัยของข้อมูล
            </li>
          </ul>

          <h2 id="retention-security">7) การเก็บรักษาและความปลอดภัย</h2>
          <p>
            เราเก็บข้อมูลเท่าที่จำเป็นตามวัตถุประสงค์
            และใช้มาตรการป้องกันทางเทคนิคเพื่อปกป้องข้อมูลจากการเข้าถึงโดยไม่ได้รับอนุญาต
            อย่างไรก็ตาม ไม่มีระบบใดปลอดภัย 100%
          </p>

          <h2 id="rights">8) สิทธิของคุณ</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ขอรับสำเนาข้อมูลส่วนบุคคลของคุณ</li>
            <li>ขอให้แก้ไขหรือลบข้อมูล</li>
            <li>คัดค้านหรือจำกัดการประมวลผล</li>
            <li>ถอนความยินยอม (หากอาศัยฐานความยินยอม)</li>
          </ul>
          <p>
            หากต้องการใช้สิทธิ โปรดติดต่อเรา
            (ดูรายละเอียดในหัวข้อ “ติดต่อเรา”)
          </p>

          <h2 id="minors">9) ผู้เยาว์</h2>
          <p>
            เว็บไซต์นี้ไม่ได้มีวัตถุประสงค์สำหรับผู้เยาว์
            หากพบว่ามีการเก็บข้อมูลจากผู้เยาว์โดยไม่ตั้งใจ
            เราจะดำเนินการลบโดยเร็วที่สุด
          </p>

          <h2 id="changes">10) การเปลี่ยนแปลงนโยบาย</h2>
          <p>
            เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยจะแสดงวันที่ปรับปรุงล่าสุดไว้ด้านบน
            การใช้เว็บไซต์ต่อถือว่ายอมรับนโยบายฉบับปรับปรุง
          </p>

          <h2 id="contact">11) ติดต่อเรา</h2>
          <p>
            อีเมล: <b>admin@thaibetz.com</b>
            <br />
            หน้าเว็บติดต่อ:{" "}
            <Link href="/contact-us">thaibetz.com/contact-us</Link>
          </p>

          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
            Thaibet ดำเนินการตามหลักการ PDPA/GDPR เพื่อคุ้มครองข้อมูลของผู้ใช้ทุกคน
          </p>
        </section>
      </main>

      {/* ✅ JSON-LD สำหรับหน้า Privacy */}
      <Script
        id="ld-json-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

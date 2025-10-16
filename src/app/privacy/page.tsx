// app/(legal)/privacy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | Thaibet",
  description:
    "นโยบายความเป็นส่วนตัวของ Thaibet อธิบายข้อมูลที่เราเก็บ ใช้อย่างไร แบ่งปันกับใคร สิทธิของผู้ใช้ และช่องทางติดต่อ พร้อมรายละเอียดคุกกี้/Analytics",
  alternates: { canonical: "https://thaibetz.com/privacy" },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaibetz.com/privacy",
    siteName: "Thaibet",
    title: "นโยบายความเป็นส่วนตัว | Thaibet",
    description:
      "นโยบายความเป็นส่วนตัวของ Thaibet อธิบายข้อมูลที่เราเก็บ ใช้อย่างไร แบ่งปันกับใคร สิทธิของผู้ใช้ และช่องทางติดต่อ พร้อมรายละเอียดคุกกี้/Analytics",
    images: [{ url: "https://thaibetz.com/og/og.webp", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "16 ตุลาคม 2025";

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "นโยบายความเป็นส่วนตัว | Thaibet",
    url: "https://thaibetz.com/privacy",
    inLanguage: "th-TH",
    isPartOf: { "@type": "WebSite", name: "Thaibet", url: "https://thaibetz.com/" },
    about: { "@type": "Thing", name: "Privacy Policy" },
    dateModified: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: { "@type": "ImageObject", url: "https://thaibetz.com/icons/thaibet-icon-512.png" },
    },
  };

  return (
    <>
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px" }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 32 }}>นโยบายความเป็นส่วนตัว</h1>
          <p style={{ margin: "8px 0", color: "rgba(0,0,0,0.6)" }}>
            ปรับปรุงล่าสุด: {LAST_UPDATED}
          </p>
        </header>

        <section style={{ display: "grid", gap: 16 }}>
          <p>
            Thaibet (“เรา”) ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้ (“คุณ”)
            เอกสารนี้อธิบายประเภทข้อมูลที่เราเก็บ วิธีใช้ แชร์ เก็บรักษา
            สิทธิของคุณตามกฎหมายที่เกี่ยวข้อง (เช่น PDPA ของไทย และหลักการ GDPR)
            รวมถึงวิธีติดต่อเรา หากคุณใช้งานเว็บไซต์{" "}
            <Link href="https://thaibetz.com/">thaibetz.com</Link>{" "}
            ถือว่าได้อ่านและยอมรับนโยบายนี้
          </p>

          <h2 id="what-we-collect">1) ข้อมูลที่เราเก็บ</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              <strong>ข้อมูลการใช้งาน</strong> เช่น หน้าที่เข้าชม การคลิก การอ้างอิง
              ประเภทเบราว์เซอร์/อุปกรณ์ ที่อยู่ IP แบบย่อ การตั้งค่าภาษา
            </li>
            <li>
              <strong>คุกกี้และเทคโนโลยีคล้ายกัน</strong> เพื่อจดจำพฤติกรรมการใช้งาน
              วัดผล และปรับปรุงประสบการณ์
            </li>
            <li>
              <strong>ข้อมูลที่คุณส่งให้โดยสมัครใจ</strong> เช่น อีเมล/ฟอร์มติดต่อ
              (หากมี)
            </li>
          </ul>

          <h2 id="how-we-use">2) เราใช้ข้อมูลอย่างไร</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ให้บริการ “ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี” ตามวัตถุประสงค์ของเว็บ</li>
            <li>วิเคราะห์และปรับปรุงประสิทธิภาพ/ประสบการณ์ผู้ใช้</li>
            <li>ป้องกันการทุจริต การใช้งานที่ผิดกฎหมาย และปัญหาทางเทคนิค</li>
            <li>สื่อสารประกาศสำคัญหรือตอบกลับคำร้องของคุณ</li>
          </ul>

          <h2 id="cookies">3) คุกกี้</h2>
          <p>
            เราใช้คุกกี้จำเป็น (strictly necessary) สำหรับการทำงานพื้นฐานของเว็บ และคุกกี้เพื่อการวิเคราะห์การใช้งาน
            คุณสามารถตั้งค่าบราว์เซอร์ให้ปฏิเสธคุกกี้บางประเภทได้
            แต่อาจทำให้บางฟังก์ชันทำงานไม่สมบูรณ์
          </p>

          <h2 id="analytics">4) เครื่องมือ Analytics</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              <strong>Google Analytics 4 (GA4)</strong>:
              เราใช้เพื่อวัดผลการใช้งานเว็บไซต์ โดย GA4 อาจประมวลผลข้อมูลการใช้งานแบบไม่ระบุตัวตน
              คุณสามารถศึกษาเพิ่มเติมและตั้งค่าการเลือกไม่ให้ติดตามได้จาก
              นโยบายของ Google
            </li>
            <li>
              <strong>Ahrefs Web Analytics</strong>:
              ใช้เพื่อทำความเข้าใจทราฟฟิกและประสิทธิภาพของหน้า
            </li>
          </ul>
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
            หมายเหตุ: เราไม่ได้รวบรวมข้อมูลส่วนบุคคลที่อ่อนไหวผ่าน Analytics
            และพยายามใช้ IP anonymization/การสุ่มตัวอย่างข้อมูลตามที่เครื่องมือรองรับ
          </p>

          <h2 id="ads-affiliates">5) ลิงก์ภายนอก/พันธมิตร</h2>
          <p>
            เว็บไซต์นี้มีลิงก์ไปยังแบรนด์/พันธมิตร เช่น F168 และ MK8
            การคลิกลิงก์ดังกล่าวอาจทำให้คุณไปยังเว็บไซต์บุคคลที่สาม
            ซึ่งมีนโยบายความเป็นส่วนตัวของตนเอง
            โปรดศึกษานโยบายของผู้ให้บริการปลายทางก่อนใช้งาน
          </p>

          <h2 id="sharing">6) การแบ่งปันข้อมูล</h2>
          <ul style={{ marginTop: 8 }}>
            <li>
              <strong>ผู้ประมวลผลข้อมูล</strong> (เช่น ผู้ให้บริการโฮสติ้ง/Analytics)
              เฉพาะที่จำเป็นต่อการให้บริการและภายใต้ข้อตกลงรักษาความลับ
            </li>
            <li>
              <strong>ตามกฎหมาย</strong> เมื่อจำเป็นต้องเปิดเผยเพื่อปฏิบัติตามกฎหมาย
              คำสั่งศาล หรือปกป้องสิทธิ ความปลอดภัย และทรัพย์สินของเรา/ผู้ใช้
            </li>
            <li>
              <strong>การโอนย้ายทางธุรกิจ</strong> เช่น การควบรวม/โอนกิจการ
              โดยจะยังคงคุ้มครองข้อมูลภายใต้นโยบายนี้หรือเทียบเท่า
            </li>
          </ul>

          <h2 id="retention-security">7) การเก็บรักษาและความปลอดภัย</h2>
          <p>
            เราเก็บข้อมูลเท่าที่จำเป็นตามวัตถุประสงค์ที่ระบุไว้เท่านั้น
            และใช้มาตรการทางเทคนิค/องค์กรเพื่อช่วยป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต
            ทั้งนี้ ไม่มีระบบใดปลอดภัย 100% คุณควรรักษาความปลอดภัยอุปกรณ์ของคุณด้วย
          </p>

          <h2 id="rights">8) สิทธิของคุณ</h2>
          <ul style={{ marginTop: 8 }}>
            <li>ขอรับสำเนาข้อมูลที่เกี่ยวข้องกับคุณ</li>
            <li>ขอให้แก้ไขหรือลบข้อมูล</li>
            <li>คัดค้านหรือจำกัดการประมวลผลในบางกรณี</li>
            <li>ถอนความยินยอม (หากอาศัยฐานความยินยอม)</li>
          </ul>
          <p>
            เพื่อใช้สิทธิ โปรดติดต่อเรา (ดูหัวข้อ “ติดต่อเรา”)
            เราอาจต้องยืนยันตัวตนก่อนดำเนินการ
          </p>

          <h2 id="minors">9) ผู้เยาว์</h2>
          <p>
            เว็บไซต์นี้มุ่งให้ข้อมูลทั่วไปและโปรโมชันจากพันธมิตร ไม่ได้มีวัตถุประสงค์สำหรับผู้ที่อายุต่ำกว่าเกณฑ์บรรลุนิติภาวะตามกฎหมายที่บังคับใช้
            หากพบว่ามีการเก็บข้อมูลจากผู้เยาว์โดยไม่ตั้งใจ เราจะลบออกโดยเร็ว
          </p>

          <h2 id="changes">10) การเปลี่ยนแปลงนโยบาย</h2>
          <p>
            เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยจะแสดงวันที่ปรับปรุงล่าสุดไว้ด้านบน
            การใช้บริการต่อเนื่องหลังการปรับปรุงถือว่ายอมรับนโยบายฉบับปรับปรุง
          </p>

          <h2 id="contact">11) ติดต่อเรา</h2>
          <p>
            อีเมล: <a href="mailto:admin@thaibetz.com">admin@thaibetz.com</a>
            <br />
            หน้าเว็บติดต่อ: <Link href="/contact-us">thaibetz.com/contact-us</Link>
          </p>
        </section>
      </main>

      {/* JSON-LD สำหรับหน้า Privacy */}
      <Script
        id="ld-json-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

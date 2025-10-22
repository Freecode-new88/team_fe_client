'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import styles from './contactus.module.css';

export default function ContactUsClient() {
  const qrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // QR animation
  useEffect(() => {
    const el = qrRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add(styles.qrVisible);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Contact list animation
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('li')) as HTMLElement[];
    items.forEach((li, i) => li.style.setProperty('--i', String(i)));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add(styles.infoVisible);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://thaibetz.com/contact-us/",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://thaibetz.com/contact-us/" },
    name: "ติดต่อ Thaibet (Contact Us)",
    url: "https://thaibetz.com/contact-us/",
    inLanguage: "th-TH",
    description:
      "ช่องทางการติดต่อทีมงาน Thaibet สำหรับการแจ้งปัญหา เสนอแนะ และสอบถามข้อมูลเพิ่มเติมเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรี",
    publisher: {
      "@type": "Organization",
      "@id": "https://thaibetz.com/#organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: { "@type": "ImageObject", url: "https://thaibetz.com/icons/thaibet-icon-512.png" },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaibetz.com/" },
        { "@type": "ListItem", position: 2, name: "ติดต่อเรา", item: "https://thaibetz.com/contact-us/" },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "Thaibet",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "admin@thaibetz.com",
          availableLanguage: ["th"],
          areaServed: "TH",
          url: "https://thaibetz.com/contact-us/",
        },
      ],
      sameAs: ["https://x.com/thaibetz", "https://t.me/NEUNG55"],
    },
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <section className={styles.hero} aria-label="ช่องทางการติดต่อ Thaibet">
        <div className={styles.contactcontainer}>
          <div className={styles.left}>
            <nav className={styles.breadcrumb} aria-label="เส้นทางหน้าเว็บ">
              <ol>
                <li><Link href="/">หน้าหลัก</Link></li>
                <li aria-current="page">ติดต่อเรา</li>
              </ol>
            </nav>

            <h1 className={styles.title}>
              <span className={styles.gradient}>ติดต่อ Thaibet</span>
            </h1>

            <p className={styles.lead}>
              ช่องทางอย่างเป็นทางการสำหรับติดต่อ Thaibet — แจ้งปัญหา เสนอแนะ
              หรือขอแก้ไขข้อมูลโปรโมชันและโค้ดเครดิตฟรีจากพันธมิตร F168 และ MK8
              ทีมงานพร้อมให้ข้อมูลอย่างโปร่งใสและอัปเดตทุกวัน
            </p>

            <ul className={styles.infoList} ref={listRef}>
              <li>
                <Link href="https://t.me/NEUNG55" target="_blank" rel="noopener noreferrer me">
                  <Image src="/images/tele.png" alt="Telegram icon" width={40} height={40} priority />
                  <span>Telegram: @NEUNG55</span>
                </Link>
              </li>
              <li>
                <Link href="https://x.com/thaibetz" target="_blank" rel="noopener noreferrer me">
                  <Image src="/images/x.png" alt="X (Twitter) icon" width={50} height={50} priority />
                  <span>X (Twitter): @thaibetz</span>
                </Link>
              </li>
              <li>
                <div>
                  <Image src="/images/email.svg" alt="Email icon" width={42} height={42} />
                  <span>อีเมลฝ่ายสนับสนุน: admin&#8203;@thaibetz.com</span>
                </div>
              </li>
              <li>
                <Link href="/privacy">
                  <Image src="/images/privacy.svg" alt="Privacy icon" width={42} height={42} />
                  <span>นโยบายความเป็นส่วนตัว</span>
                </Link>
              </li>
            </ul>

            <div className={styles.notice}>
              <p>
                <strong>ข้อชี้แจง:</strong> Thaibet เป็นเว็บไซต์รวบรวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีเท่านั้น
                ไม่ได้ให้บริการเกมหรือธุรกรรมใด ๆ โปรดตรวจสอบเงื่อนไขของผู้ให้บริการต้นทางก่อนทำรายการ
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.qrCard} ref={qrRef} data-motion="drop">
              <Image
                src="/images/TGQR.png"
                alt="QR code ติดต่อ Thaibet ทาง Telegram"
                width={320}
                height={320}
                priority
              />
              <p className={styles.qrCaption}>สแกนเพื่อติดต่อผ่าน Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ JSON-LD */}
      <Script
        id="ld-json-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}

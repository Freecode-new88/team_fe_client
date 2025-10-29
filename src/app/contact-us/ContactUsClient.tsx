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
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add(styles.qrVisible);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Contact list animation
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('li')) as HTMLElement[];
    items.forEach((li, i) => li.style.setProperty('--i', String(i)));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add(styles.infoVisible);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    items.forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://thaideal.co/contact-us/",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://thaideal.co/contact-us/" },
    name: "ติดต่อ Thaideal (Contact Us)",
    url: "https://thaideal.co/contact-us/",
    inLanguage: "th-TH",
    description:
      "หน้าติดต่อทีมงาน Thaideal สำหรับสอบถามข้อมูลทั่วไป เสนอแนะ หรือแจ้งปัญหาเกี่ยวกับเนื้อหาโปรโมชันและโค้ดเครดิตฟรีจากพันธมิตร F168 และ MK8.",
    publisher: {
      "@type": "Organization",
      "@id": "https://thaideal.co/#organization",
      name: "Thaideal",
      url: "https://thaideal.co/",
      logo: { "@type": "ImageObject", url: "https://thaideal.co/icons/thaibet-icon-512.png" },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaideal.co/" },
        { "@type": "ListItem", position: 2, name: "ติดต่อเรา", item: "https://thaideal.co/contact-us/" },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "Thaideal",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "admin@thaideal.co",
          availableLanguage: ["th"],
          areaServed: "TH",
          url: "https://thaideal.co/contact-us/",
        },
      ],
      sameAs: ["https://x.com/thaideal", "https://t.me/NEUNG55"],
    },
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <section className={styles.hero} aria-label="ช่องทางการติดต่อ Thaideal">
        <div className={styles.contactcontainer}>
          <div className={styles.left}>
            <nav className={styles.breadcrumb} aria-label="เส้นทางหน้าเว็บ">
              <ol>
                <li><Link href="/">หน้าหลัก</Link></li>
                <li aria-current="page">ติดต่อเรา</li>
              </ol>
            </nav>

            <h1 className={styles.title}>
              <span className={styles.gradient}>ติดต่อ Thaideal</span>
            </h1>

            <p className={styles.lead}>
              ช่องทางอย่างเป็นทางการสำหรับติดต่อ Thaideal — แจ้งปัญหา เสนอแนะ
              หรือสอบถามข้อมูลเพิ่มเติมเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจากพันธมิตร F168 และ MK8
              ทีมงานยินดีให้ข้อมูลและอัปเดตข่าวสารอย่างโปร่งใส
            </p>

            <ul className={styles.infoList} ref={listRef}>
              <li>
                <Link href="https://t.me/NEUNG55" target="_blank" rel="noopener noreferrer me">
                  <Image src="/images/tele.png" alt="Telegram ติดต่อ Thaideal" width={40} height={40} priority />
                  <span>Telegram: @NEUNG55</span>
                </Link>
              </li>
              <li>
                <Link href="https://x.com/thaideal" target="_blank" rel="noopener noreferrer me">
                  <Image src="/images/x.png" alt="X (Twitter) ติดต่อ Thaideal" width={50} height={50} priority />
                  <span>X (Twitter): @thaideal</span>
                </Link>
              </li>
              <li>
                <div>
                  <Image src="/images/email.svg" alt="ไอคอนอีเมล Thaideal" width={42} height={42} />
                  <span>อีเมลฝ่ายสนับสนุน: admin&#8203;@thaideal.co</span>
                </div>
              </li>
              <li>
                <Link href="/privacy">
                  <Image src="/images/privacy.svg" alt="ไอคอนนโยบายความเป็นส่วนตัว" width={42} height={42} />
                  <span>นโยบายความเป็นส่วนตัว</span>
                </Link>
              </li>
            </ul>

            <div className={styles.notice}>
              <p>
                <strong>ข้อชี้แจง:</strong> Thaideal เป็นเว็บไซต์รวบรวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีเท่านั้น
                ไม่มีการให้บริการเกมหรือธุรกรรมทางการเงินใด ๆ
                โปรดตรวจสอบเงื่อนไขของผู้ให้บริการต้นทางก่อนใช้งานจริง.
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.qrCard} ref={qrRef} data-motion="drop">
              <Image
                src="/images/TGQR.png"
                alt="QR code ติดต่อ Thaideal ทาง Telegram (Official)"
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

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import styles from './contactus.module.css';

export default function ContactUsPage() {
  const qrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // ********** Animation: QR (เดิม) **********
  useEffect(() => {
    const el = qrRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add(styles.qrVisible);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ********** Animation: Contact list (เดิม) **********
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('li')) as HTMLElement[];
    items.forEach((li, i) => li.style.setProperty('--i', String(i)));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add(styles.infoVisible);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    items.forEach(li => io.observe(li));
    return () => io.disconnect();
  }, []);

  // ✅ JSON-LD: ContactPage (ช่วย E-E-A-T และผล SERP)
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "ติดต่อ Thaibet - ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
    url: "https://thaibetz.com/contact-us/",
    inLanguage: "th-TH",
    description:
      "ติดต่อ Thaibet สำหรับข้อเสนอแนะ แก้ไขข้อมูลโปรโมชัน/โค้ดเครดิตฟรี และการแจ้งปัญหาการใช้งาน",
    publisher: {
      "@type": "Organization",
      name: "Thaibet",
      url: "https://thaibetz.com/",
      logo: { "@type": "ImageObject", url: "https://thaibetz.com/icons/icon-512.png" }
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://thaibetz.com/" },
        { "@type": "ListItem", position: 2, name: "ติดต่อเรา", item: "https://thaibetz.com/contact-us/" }
      ]
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
          url: "https://thaibetz.com/contact-us/"
        }
      ],
      sameAs: [
        "https://x.com/thaibetz",
        "https://t.me/NEUNG55"
      ]
    }
  };

  return (
    <>
      {/* Section หลัก */}
      <section className={styles.hero} aria-label="ช่องทางการติดต่อ Thaibet">
        <div className={styles.contactcontainer}>
          {/* Left: ข้อมูลติดต่อแบบเป็นทางการ */}
          <div className={styles.left}>
            <nav className={styles.breadcrumb} aria-label="เส้นทางหน้าเว็บ">
              <ol>
                <li><Link href="/">หน้าหลัก</Link></li>
                <li aria-current="page">ติดต่อเรา</li>
              </ol>
            </nav>

            <h1 className={styles.title}>
              <span className={styles.gradient}>
                ติดต่อ Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี
              </span>
            </h1>

            <p className={styles.lead}>
              หากพบข้อมูลคลาดเคลื่อน ต้องการเสนอแนะ หรือประสงค์ให้เพิ่ม/แก้ไขรายการโปรโมชันและโค้ดเครดิตฟรี
              สามารถติดต่อเราได้ผ่านช่องทางอย่างเป็นทางการด้านล่าง ทีมงานจะตรวจสอบและอัปเดตข้อมูลอย่างโปร่งใส
            </p>

            <ul className={styles.infoList} ref={listRef} aria-label="ช่องทางการติดต่ออย่างเป็นทางการ">
              <li>
                <Link
                  href="https://t.me/NEUNG55"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2"
                  aria-label="เปิด Telegram ติดต่อ Thaibet"
                >
                  <Image
                    src="/images/tele.png"
                    alt="ไอคอน Telegram"
                    width={40}
                    height={40}
                    priority
                    draggable="false"
                  />
                  <span>Telegram: @NEUNG55</span>
                </Link>
              </li>

              <li>
                <Link
                  href="https://x.com/thaibetz"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-2"
                  aria-label="เปิดบัญชี X (Twitter) ทางการของ Thaibet"
                >
                  <Image
                    src="/images/x.png"
                    alt="ไอคอน X (Twitter)"
                    width={50}
                    height={50}
                    priority
                    draggable="false"
                  />
                  <span>X (Twitter): @thaibetz</span>
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:admin@thaibetz.com"
                  className="inline-flex items-center gap-2"
                  aria-label="ส่งอีเมลถึงฝ่ายสนับสนุน Thaibet"
                >
                  <Image
                    src="/images/email.svg"
                    alt="ไอคอนอีเมล"
                    width={42}
                    height={42}
                    draggable="false"
                  />
                  <span>อีเมลฝ่ายสนับสนุน: admin@thaibetz.com</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2"
                  aria-label="อ่านนโยบายความเป็นส่วนตัว"
                >
                  <Image
                    src="/images/privacy.svg"
                    alt="ไอคอนความเป็นส่วนตัว"
                    width={42}
                    height={42}
                    draggable="false"
                  />
                  <span>นโยบายความเป็นส่วนตัว</span>
                </Link>
              </li>
            </ul>

            {/* ข้อชี้แจงแบบเป็นทางการ */}
            <div className={styles.notice} role="note" aria-label="ข้อชี้แจงสำคัญ">
              <p>
                <strong>ข้อชี้แจง:</strong> Thaibet เป็นผู้รวบรวมและนำเสนอข้อมูลเท่านั้น มิได้ให้บริการเกมหรือรับทำธุรกรรมใด ๆ
                ธุรกรรมทั้งหมดดำเนินการกับผู้ให้บริการต้นทางโดยตรง โปรดตรวจสอบเงื่อนไขของแต่ละแบรนด์ก่อนดำเนินการ
              </p>
            </div>
          </div>

          {/* Right: QR Telegram */}
          <div className={styles.right}>
            <div className={styles.qrCard} ref={qrRef} data-motion="drop">
              <Image
                src="/images/TGQR.png"
                alt="คิวอาร์โค้ดสำหรับติดต่อ Thaibet ทาง Telegram"
                width={320}
                height={320}
                priority
                draggable="false"
              />
              <p className={styles.qrCaption}>สแกนเพื่อติดต่อผ่าน Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <Script
        id="ld-json-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './contactus.module.css';

export default function ContactUsPage() {
  const qrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // ********** (Code ส่วน useEffect Logic เดิม) **********
  // QR
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

  // Contact Info
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
  // ********** (สิ้นสุด Logic) **********

  return (
    // ปรับ aria-label ให้เป็นภาษาไทย
    <section className={styles.hero} aria-label="ช่องทางการติดต่อเรา">
      <div className={styles.contactcontainer}>
        {/* Left: simple info block */}
        <div className={styles.left}>
          {/* ปรับ Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="เส้นทางหน้าเว็บ">
            <ol>
              <li><Link href="/">หน้าหลัก</Link></li>
              <li aria-current="page">ติดต่อเรา</li>
            </ol>
          </nav>
          
          {/* ปรับ H1 เน้นคีย์เวิร์ด */}
          <h1 className={styles.title}><span className={styles.gradient}>ติดต่อเรา: รับโปรโมชั่นและอัปเดตผ่าน Telegram และ Twitter</span></h1>
          <p className={styles.lead}>
            คุณสามารถรับโปรโมชั่นรายวันได้ที่กลุ่ม **Telegram** ห้ามพลาดโอกาสในการแจกพอยท์และข่าวสารอัปเดตสำคัญ เข้าร่วมกลุ่มเลย และอย่าลืมติดตามเราทาง **Twitter** ด้วย!!
          </p>

          <ul className={styles.infoList} ref={listRef}>
            <li>
               <Link
                href="https://t.me/NEUNG55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Open Telegram bot @f168th_bot"
              >
                <Image
                  src="/images/tele.png"
                  // ปรับ alt
                  alt="ไอคอนผู้ใช้ Telegram"
                  width={40}
                  height={40}
                  priority
                  draggable="false"
                />
                <span>@NEUNG55</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/thaibetz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Open X Twitter Thaibet Office"
              >
              <Image
                src="/images/x.png"
                // ปรับ alt
                alt="ไอคอนผู้ใช้ X"
                width={50}
                height={50}
                priority
                draggable="false"
              />
              <span>Thaibet Office</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Telegram QR */}
        <div className={styles.right}>
          <div className={styles.qrCard} ref={qrRef} data-motion="drop">
            <Image
              src="/images/TGQR.png"
              // ปรับ alt ชัดเจน
              alt="คิวอาร์โค้ดสำหรับติดต่อเราทาง Telegram"
              width={320}
              height={320}
              priority
              draggable="false"
            />
            <p className={styles.qrCaption}>สแกนเพื่อติดต่อเราผ่าน Telegram</p> {/* ปรับข้อความ */}
          </div>
        </div>
      </div>
    </section>
  );
}
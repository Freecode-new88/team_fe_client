'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import styles from './aboutus.module.css';

/** ✅ ตัวเลขสถิติแบบเป็นทางการ */
const counters = [
  { id: 'codes', icon: '/images/fan1.png', label: 'โค้ดที่ตรวจสอบแล้ว (วันนี้)', end: 128 },
  { id: 'updates', icon: '/images/fan2.png', label: 'รอบอัปเดตวันนี้', end: 12 },
  { id: 'brands', icon: '/images/fan3.png', label: 'แบรนด์ที่ครอบคลุม', end: 2 },
  { id: 'users', icon: '/images/fan4.png', label: 'ผู้ใช้ที่ติดตาม', end: 1050 },
];

export default function AboutUsPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const featsRef = useRef<HTMLUListElement>(null);

  // ✅ นับตัวเลข
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    let started = false;
    const els = Array.from(node.querySelectorAll<HTMLElement>('[data-count]'));
    const run = () => {
      const duration = 1400;
      els.forEach((el) => {
        const end = Number(el.dataset.end || '0');
        const start = 0;
        const startedAt = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - startedAt) / duration);
          const val = Math.floor(start + (end - start) * (t * (2 - t)));
          el.textContent = val.toLocaleString();
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // ✅ แสดงฟีเจอร์
  useEffect(() => {
    const root = featsRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('[data-choose-item]')) as HTMLElement[];
    items.forEach((el, i) => el.style.setProperty('--i', String(i)));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.featureVisible);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      {/* ✅ Section บน */}
      <section className={styles.top}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <nav className={styles.breadcrumb}>
              <ol>
                <li><Link href="/">หน้าหลัก</Link></li>
                <li aria-current="page">เกี่ยวกับเรา</li>
              </ol>
            </nav>

            <h1 className={styles.title}>
              <span className={styles.gradient}>
                Thaideal | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี
              </span>
            </h1>

            <p className={styles.lead}>
              Thaideal เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีจากแบรนด์ยอดนิยม
              โดยมุ่งเน้นการรวบรวม ตรวจสอบความถูกต้องของข้อมูล และสรุปเงื่อนไขอย่างโปร่งใส
              เพื่อให้ผู้ใช้ตัดสินใจได้อย่างมีข้อมูล
            </p>
            <p className={styles.lead}>
              ข้อมูลอัปเดตตลอดวัน ครอบคลุมช่วงเวลาปล่อยสิทธิ์ เงื่อนไขการรับ เทิร์นโอเวอร์
              และข้อจำกัดการถอน ใช้งานง่ายจากทุกอุปกรณ์
            </p>
          </div>

          <div className={styles.topRight}>
            <Image
              src="/images/about1.webp"
              alt="Thaideal ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี"
              width={720}
              height={560}
              className={styles.heroImg}
              priority
              draggable="false"
            />
          </div>
        </div>

        <div className={styles.statsGrid} ref={statsRef}>
          {counters.map((c) => (
            <div key={c.id} className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <Image src={c.icon} alt={c.label} width={76} height={76} draggable="false" />
              </div>
              <div className={styles.statValue} data-count data-end={c.end}>0</div>
              <div className={styles.statLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Section ล่าง */}
      <section className={styles.choose}>
        <div className={styles.chooseInner}>
          <div className={styles.chooseLeft}>
            <Image
              src="/images/about.webp"
              alt="เหตุผลที่ผู้ใช้เลือก Thaideal"
              width={700}
              height={560}
              className={styles.heroImg}
              draggable="false"
            />
          </div>

          <div className={styles.chooseRight}>
            <h2 className={styles.title}>
              <span className={styles.gradient}>เหตุผลที่ผู้ใช้เลือก Thaideal</span>
            </h2>

            <ul className={styles.features} ref={featsRef}>
              <li data-choose-item>ข้อมูลผ่านการตรวจสอบ: แหล่งที่มาอ้างอิงได้ อัปเดตรอบต่อรอบ</li>
              <li data-choose-item>เงื่อนไขชัดเจน: เทิร์นโอเวอร์/การถอน/ข้อจำกัด อ่านง่าย</li>
              <li data-choose-item>ติดตามรอบสิทธิ์: แจ้งเตือนช่วงเวลาปล่อยสิทธิ์</li>
              <li data-choose-item>คุ้มครองผู้ใช้: นโยบายความเป็นส่วนตัวและความปลอดภัย</li>
            </ul>

            <div className={styles.notice}>
              <p>
                <strong>ข้อชี้แจง:</strong> Thaideal เป็นผู้ให้ข้อมูลเท่านั้น
                ไม่ได้ให้บริการเกมหรือธุรกรรมการเงิน
              </p>
              <p>
                หากพบข้อมูลคลาดเคลื่อน กรุณา <Link href="/contact-us/">ติดต่อฝ่ายสนับสนุน</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="ld-json-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://thaideal.co/about-us/" },
            name: "เกี่ยวกับ Thaideal — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
            description:
              "Thaideal เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีจากแบรนด์ยอดนิยม พร้อมสรุปเงื่อนไขและช่องทางติดต่ออย่างโปร่งใส",
            publisher: {
              "@type": "Organization",
              name: "Thaideal",
              url: "https://thaideal.co/",
              logo: {
                "@type": "ImageObject",
                url: "https://thaideal.co/icons/thaibet-icon-512.png",
              },
            },
            inLanguage: "th-TH",
            dateModified: new Date().toISOString(),
          }),
        }}
      />
    </main>
  );
}

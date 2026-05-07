'use client';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import styles from './aboutus.module.css';

/* -------------------------------------------------------------------------- */
/* 🔹 ข้อมูลสถิติ (เรียงตามลำดับการอ่านเพื่อ Core Web Vitals)               */
/* -------------------------------------------------------------------------- */
const counters = [
  { id: 'codes', icon: '/images/fan1.png', label: 'โค้ดที่ตรวจสอบแล้ว (วันนี้)', end: 128 },
  { id: 'updates', icon: '/images/fan2.png', label: 'รอบอัปเดตวันนี้', end: 12 },
  { id: 'brands', icon: '/images/fan3.png', label: 'แบรนด์ที่ครอบคลุม', end: 2 },
  { id: 'users', icon: '/images/fan4.png', label: 'ผู้ใช้ที่ติดตาม', end: 1050 },
];

export default function AboutUsPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const featsRef = useRef<HTMLUListElement>(null);

  /* ✅ ตัวนับตัวเลข (lazy-run เมื่อเห็นบนจอ) */
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    let started = false;
    const els = node.querySelectorAll<HTMLElement>('[data-count]');
    const animateCount = () => {
      els.forEach((el) => {
        const end = Number(el.dataset.end || '0');
        const start = 0;
        const startAt = performance.now();
        const duration = 1200;
        const step = (now: number) => {
          const progress = Math.min(1, (now - startAt) / duration);
          const eased = progress * (2 - progress);
          const val = Math.floor(start + (end - start) * eased);
          el.textContent = val.toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animateCount();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /* ✅ ฟีเจอร์เลื่อนเข้าแบบ fade-in */
  useEffect(() => {
    const list = featsRef.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll('[data-choose-item]')) as HTMLElement[];
    items.forEach((el, i) => el.style.setProperty('--i', String(i)));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.featureVisible);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className={`${styles.page} px-4 sm:px-6 md:px-10`}>
      {/* ============================================================= */}
      {/* ✅ Section: Hero / Overview */}
      {/* ============================================================= */}
      <section className={`${styles.top} grid grid-cols-1 md:grid-cols-2 gap-8`}>
        {/* -------- Left Text -------- */}
        <div className={`${styles.topLeft} flex flex-col gap-3`}>
          <nav
            aria-label="breadcrumb"
            className="text-[13px] sm:text-sm font-medium text-gray-300 mb-3"
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
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline-offset-2 hover:underline"
                >
                  <span itemProp="name">หน้าหลัก</span>
                </Link>
                <meta itemProp="position" content="1" />
                <span className="text-gray-500 px-1">›</span>
              </li>

              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                aria-current="page"
                className="text-white drop-shadow-sm"
              >
                <span itemProp="name">เกี่ยวกับเรา</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className={`${styles.title} text-2xl sm:text-3xl md:text-4xl font-bold leading-snug`}>
            <span className={styles.gradient}>
              Thaideal | เว็บไซต์ข้อมูลและวิเคราะห์โปรโมชัน เครดิตฟรี
            </span>
          </h1>

          <p className={`${styles.lead} text-gray-200 text-sm sm:text-base`}>
            Thaideal ให้ข้อมูลและวิเคราะห์โปรโมชันจากแหล่งที่ตรวจสอบได้
            มุ่งเน้นความโปร่งใสของเงื่อนไขและช่วงเวลาปล่อยสิทธิ์ เพื่อให้ผู้ใช้ตัดสินใจได้อย่างมีข้อมูล
          </p>

          <p className={`${styles.lead} text-gray-200 text-sm sm:text-base`}>
            ระบบอัปเดตข้อมูลทุกวันจากหลายแหล่ง พร้อมตรวจสอบความถูกต้องของโค้ด
            เงื่อนไขเทิร์นโอเวอร์ และข้อจำกัดการถอนอย่างต่อเนื่อง
          </p>
        </div>

        {/* -------- Right Image -------- */}
        <div className={`${styles.topRight} flex justify-center`}>
          <Image
            src="/images/about1.webp"
            alt="ภาพประกอบ Thaideal — เว็บไซต์วิเคราะห์โปรโมชันเครดิตฟรี"
            width={640}
            height={480}
            className="rounded-xl w-full h-auto object-cover max-w-[500px]"
            priority
            loading="eager"
            sizes="(max-width: 768px) 90vw, 500px"
          />
        </div>
      </section>

      {/* ============================================================= */}
      {/* ✅ Section: Stats / Numbers */}
      {/* ============================================================= */}
      <section
        ref={statsRef}
        aria-label="สถิติการอัปเดตข้อมูล"
        className={`${styles.statsGrid} grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 mb-14`}
      >
        {counters.map((c) => (
          <div
            key={c.id}
            className="flex flex-col items-center text-center rounded-lg bg-gradient-to-b from-gray-900/40 to-gray-800/20 p-4 shadow-md backdrop-blur-sm"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2">
              <Image
                src={c.icon}
                alt={c.label || "ไอคอนสถิติ Thaideal"}
                width={76}
                height={76}
                className="object-contain w-full h-full"
                draggable={false}
                loading="lazy"
              />
            </div>
            <div
              className="text-xl sm:text-2xl font-extrabold text-cyan-400 tabular-nums"
              data-count
              data-end={c.end}
            >
              0
            </div>
            <p className="text-[13px] sm:text-sm text-gray-300">{c.label}</p>
          </div>
        ))}
      </section>

      {/* ============================================================= */}
      {/* ✅ Section: Reasons / Features */}
      {/* ============================================================= */}
      <section
        className={`${styles.choose} grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
      >
        {/* ---- Left Image ---- */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/about.webp"
            alt="เหตุผลที่ผู้ใช้เลือก Thaideal"
            width={680}
            height={520}
            className="rounded-xl w-full h-auto max-w-[480px]"
            loading="lazy"
            sizes="(max-width: 768px) 90vw, 480px"
          />
        </div>

        {/* ---- Right Features ---- */}
        <div className={`${styles.chooseRight} flex flex-col gap-4`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            <span className={styles.gradient}>เหตุผลที่ผู้ใช้เลือก Thaideal</span>
          </h2>

          <ul
            ref={featsRef}
            className="flex flex-col gap-2 text-sm sm:text-base text-gray-200 leading-relaxed"
          >
            <li data-choose-item>ข้อมูลผ่านการตรวจสอบ แหล่งอ้างอิงชัดเจนและอัปเดตรอบต่อรอบ</li>
            <li data-choose-item>เงื่อนไขชัดเจน เช่น เทิร์นโอเวอร์ การถอน หรือข้อจำกัดต่าง ๆ</li>
            <li data-choose-item>ติดตามช่วงเวลาปล่อยสิทธิ์ได้แบบเรียลไทม์</li>
            <li data-choose-item>คุ้มครองข้อมูลผู้ใช้ตามนโยบายความเป็นส่วนตัว</li>
          </ul>

          <div className={`${styles.notice} text-xs sm:text-sm text-gray-400 mt-3`}>
            <p>
              <strong>ข้อชี้แจง:</strong> Thaideal เป็นเว็บไซต์ให้ข้อมูลเท่านั้น
              ไม่ได้ให้บริการเกมหรือธุรกรรมทางการเงินทุกประเภท
            </p>
            <p>
              หากพบข้อมูลไม่ถูกต้อง กรุณา{" "}
              <Link href="/contact-us/" className="underline hover:text-cyan-400">
                ติดต่อฝ่ายสนับสนุน
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* ✅ Structured Data (SEO Schema) */}
      {/* ============================================================= */}
      <Script
        id="ld-json-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://thaideal.co/about-us/",
            },
            name: "เกี่ยวกับ Thaideal — เว็บไซต์วิเคราะห์และให้ข้อมูลโปรโมชันเครดิตฟรี",
            description:
              "Thaideal ให้ข้อมูลและวิเคราะห์โปรโมชันเครดิตฟรีจากหลายแหล่ง เพื่อความเข้าใจและการตัดสินใจที่โปร่งใสของผู้ใช้",
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

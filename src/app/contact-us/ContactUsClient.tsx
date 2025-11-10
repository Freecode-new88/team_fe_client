'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './contactus.module.css';

export default function ContactUsClient() {
  const qrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /* ✅ Animate QR fade-in */
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
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ✅ Animate Contact items (lazy fade) */
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


  return (
    <main className={`${styles.hero} px-4 sm:px-6 md:px-10`} aria-label="ช่องทางการติดต่อ Thaideal">
      <div className={`${styles.contactcontainer} grid grid-cols-1 md:grid-cols-2 gap-8 items-start`}>
        {/* ---------- LEFT TEXT ---------- */}
        <div className={`${styles.left} flex flex-col gap-3`}>
          {/* ✅ Breadcrumb */}
          <nav
            className="text-[13px] sm:text-sm text-gray-400 mb-3"
            aria-label="breadcrumb"
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
                <span className="text-gray-500 px-1">›</span>
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                aria-current="page"
                className="text-white font-semibold"
              >
                <span itemProp="name">ติดต่อเรา</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className={`${styles.title} text-2xl sm:text-3xl font-bold text-white leading-snug`}>
            <span className={styles.gradient}>ติดต่อ Thaideal</span>
          </h1>

          <p className={`${styles.lead} text-gray-200 text-sm sm:text-base`}>
            ช่องทางอย่างเป็นทางการสำหรับติดต่อ Thaideal — เพื่อสอบถาม แจ้งปัญหา
            หรือเสนอแนะเพิ่มเติมเกี่ยวกับโปรโมชันและโค้ดเครดิตฟรีจากพันธมิตรของเรา.
          </p>

          {/* ✅ Contact List */}
          <ul className={`${styles.infoList} flex flex-col gap-3 mt-2`} ref={listRef}>
            <li className="flex items-center gap-3">
              <Link
                href="https://t.me/NEUNG55"
                target="_blank"
                rel="noopener noreferrer me"
                className="flex items-center gap-3 hover:opacity-90 transition"
              >
                <Image
                  src="/images/tele.png"
                  alt="Telegram ติดต่อ Thaideal"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  loading="lazy"
                />
                <span className="text-gray-100 text-sm sm:text-base">Telegram: @NEUNG55</span>
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <Image
                src="/images/email.svg"
                alt="อีเมลฝ่ายสนับสนุน Thaideal"
                width={42}
                height={42}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                loading="lazy"
              />
              <span className="text-gray-100 text-sm sm:text-base break-all">
                อีเมล: admin@thaidealt.co
              </span>
            </li>

            {/* ✅ New: Address / Website / Brand / Phone / Hashtag */}
            <li className="flex items-center gap-3">
              <span className="text-gray-100 text-sm sm:text-base">
                เว็บไซต์:{" "}
                <Link href="https://thaideal.co" target="_blank" className="text-cyan-400 hover:underline">
                  https://thaideal.co
                </Link>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-gray-100 text-sm sm:text-base">
                ที่อยู่: 123 ถนนสุขุมวิท แขวงคลองตัน เขตวัฒนา กรุงเทพมหานคร 10110
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-gray-100 text-sm sm:text-base">ชื่อแบรนด์: Thaideal</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-gray-100 text-sm sm:text-base">
                เบอร์โทรศัพท์:{" "}
                <Link href="tel:+66901234567" className="text-cyan-400 hover:underline">
                  +66 90 123 4567
                </Link>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="text-gray-100 text-sm sm:text-base">แฮชแท็ก: #Thaideal #โปรโมชัน #เครดิตฟรี</span>
            </li>

            <li className="flex items-center gap-3">
              <Link href="/privacy" className="flex items-center gap-3 hover:opacity-90 transition">
                <Image
                  src="/images/privacy.svg"
                  alt="นโยบายความเป็นส่วนตัว Thaideal"
                  width={42}
                  height={42}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  loading="lazy"
                />
                <span className="text-gray-100 text-sm sm:text-base">นโยบายความเป็นส่วนตัว</span>
              </Link>
            </li>
          </ul>

          <div className={`${styles.notice} text-xs sm:text-sm text-gray-400 mt-4`}>
            <p>
              <strong>ข้อชี้แจง:</strong> Thaideal เป็นเว็บไซต์ให้ข้อมูลเท่านั้น
              ไม่มีการให้บริการเกมหรือธุรกรรมทางการเงินทุกประเภท
              โปรดตรวจสอบเงื่อนไขจากผู้ให้บริการต้นทางก่อนใช้งานจริง.
            </p>
          </div>
        </div>

        {/* ---------- RIGHT QR ---------- */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <div
            ref={qrRef}
            className="rounded-xl bg-black/40 p-4 shadow-[0_0_20px_#ff00aa33] backdrop-blur-sm transition-transform duration-700"
            data-motion="drop"
          >
            <Image
              src="/images/TGQR.png"
              alt="QR code ติดต่อ Thaideal ทาง Telegram"
              width={280}
              height={280}
              className="rounded-lg object-contain w-[220px] sm:w-[260px] md:w-[280px]"
              priority
            />
            <p className="text-center text-gray-200 text-sm mt-2">
              สแกนเพื่อติดต่อผ่าน Telegram
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

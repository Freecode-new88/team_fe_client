'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './aboutus.module.css';

/** ✅ ตัวเลขแบบ “เป็นทางการ” (งดคำอวดอ้างผลลัพธ์) */
const counters = [
  { id: 'codes',   icon: '/images/fan1.png', label: 'โค้ดที่ตรวจสอบแล้ว (วันนี้)', end: 128 },
  { id: 'updates', icon: '/images/fan2.png', label: 'รอบอัปเดตวันนี้',           end: 12  },
  { id: 'brands',  icon: '/images/fan3.png', label: 'แบรนด์ที่ครอบคลุม',         end: 2   },
  { id: 'users',   icon: '/images/fan4.png', label: 'ผู้ใช้ที่ติดตาม',            end: 1050},
];

export default function AboutUsPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const featsRef = useRef<HTMLUListElement>(null);

  // ********** Logic นับตัวเลข (เดิม) **********
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    let started = false;
    const els = Array.from(node.querySelectorAll<HTMLElement>('[data-count]'));

    const run = () => {
      const duration = 1400; // ms
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

  // ********** Logic เผยฟีเจอร์เมื่อเลื่อนเห็น (เดิม) **********
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
      {/* Top section */}
      <section className={styles.top}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <nav className={styles.breadcrumb} aria-label="เส้นทางหน้าเว็บ">
              <ol>
                <li><Link href="/">หน้าหลัก</Link></li>
                <li aria-current="page">เกี่ยวกับเรา</li>
              </ol>
            </nav>

            {/* ✅ H1 ทางการ + แบรนด์ไลน์ */}
            <h1 className={styles.title}>
              <span className={styles.gradient}>
                เกี่ยวกับ Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี
              </span>
            </h1>

            {/* ✅ คำอธิบายองค์กรแบบเป็นทางการ (ชัดเจตนา: ศูนย์รวมข้อมูล ไม่ใช่ผู้ให้บริการเกม) */}
            <p className={styles.lead}>
              Thaibet เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีสำหรับแบรนด์ที่ได้รับความนิยม
              โดยมุ่งเน้นการรวบรวม ตรวจสอบความถูกต้องของข้อมูล และสรุปเงื่อนไขอย่างโปร่งใส
              เพื่อให้ผู้ใช้ตัดสินใจได้อย่างมีข้อมูล เราไม่ให้บริการเกม และไม่เกี่ยวข้องกับการทำธุรกรรมของผู้ให้บริการ
            </p>
            <p className={styles.lead}>
              ข้อมูลที่นำเสนอจะอัปเดตเป็นรอบ ๆ ตลอดวัน ครอบคลุมรายการสำคัญ เช่น
              ช่วงเวลาปล่อยสิทธิ์ ข้อกำหนดการรับสิทธิ์ เทิร์นโอเวอร์ ข้อจำกัดการถอน
              และช่องทางติดต่ออย่างเป็นทางการของแต่ละแบรนด์
              เป้าหมายของเราคือ “ข้อมูลครบ อ่านจบในหน้าเดียว” และใช้งานได้จากทุกอุปกรณ์
            </p>
          </div>

          <div className={styles.topRight}>
            <Image
              src="/images/about1.webp"
              alt="ภาพประกอบ: Thaibet ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี"
              width={720}
              height={560}
              className={styles.heroImg}
              priority
              draggable="false"
            />
          </div>
        </div>

        {/* ✅ ตัวชี้วัดแบบเป็นกลาง/ตรวจสอบได้ */}
        <div className={styles.statsGrid} ref={statsRef} aria-label="สรุปสถิติการอัปเดต">
          {counters.map((c) => (
            <div key={c.id} className={styles.statItem} role="group" aria-roledescription="ตัวชี้วัด">
              <div className={styles.statIconWrap}>
                <Image src={c.icon} alt={`ไอคอน ${c.label}`} width={76} height={76} draggable="false" />
              </div>
              <div className={styles.statValue} data-count data-end={c.end} aria-live="polite">0</div>
              <div className={styles.statLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom choose section */}
      <section className={styles.choose}>
        <div className={styles.chooseInner}>
          <div className={styles.chooseLeft}>
            <Image
              src="/images/about.webp"
              alt="เหตุผลที่ผู้ใช้เลือก Thaibet"
              width={700}
              height={560}
              className={styles.heroImg}
              draggable="false"
            />
          </div>

          <div className={styles.chooseRight}>
            {/* ✅ H2 ทางการ */}
            <h2 className={styles.title}>
              <span className={styles.gradient}>เหตุผลที่ผู้ใช้เลือก Thaibet</span>
            </h2>

            {/* ✅ รายการคุณค่า/มาตรฐานแบบเป็นทางการ */}
            <ul className={styles.features} ref={featsRef} aria-label="คุณค่าหลักของบริการ">
              <li data-choose-item style={{ ['--i' as any]: 0 }}>
                <Image src="/images/choose1.png" alt="ไอคอนการตรวจสอบข้อมูล" width={42} height={42} draggable="false" />
                <span>ข้อมูลผ่านการตรวจสอบ: แหล่งที่มาอ้างอิงได้ อัปเดตรอบต่อรอบ</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 1 }}>
                <Image src="/images/choose2.png" alt="ไอคอนเงื่อนไขชัดเจน" width={42} height={42} draggable="false" />
                <span>เงื่อนไขชัดเจน: เทิร์นโอเวอร์/การถอน/ข้อจำกัด แยกเป็นหัวข้ออ่านง่าย</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 2 }}>
                <Image src="/images/choose3.png" alt="ไอคอนแจ้งเตือน" width={42} height={42} draggable="false" />
                <span>ติดตามรอบสิทธิ์: ระบุช่วงเวลาปล่อยสิทธิ์ พร้อมตัวเลือกการแจ้งเตือน</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 3 }}>
                <Image src="/images/choose4.png" alt="ไอคอนความเป็นส่วนตัวและความปลอดภัย" width={42} height={42} draggable="false" />
                <span>คุ้มครองผู้ใช้: แนวนโยบายความเป็นส่วนตัว และแนวทางการใช้งานอย่างรับผิดชอบ</span>
              </li>
            </ul>

            {/* ✅ กล่องประกาศ/ข้อชี้แจงแบบเป็นทางการ */}
            <div className={styles.notice} role="note" aria-label="ข้อชี้แจงสำคัญ">
              <p>
                <strong>ข้อชี้แจง:</strong> Thaibet เป็นผู้ให้ข้อมูลและการรวบรวมลิงก์/โปรโมชันเท่านั้น
                มิได้เป็นผู้ให้บริการเกมหรือรับฝาก–ถอนใด ๆ ธุรกรรมทั้งหมดดำเนินการกับผู้ให้บริการต้นทางโดยตรง
                โปรดอ่านข้อกำหนดและเงื่อนไขของแต่ละแบรนด์ก่อนตัดสินใจรับสิทธิ์
              </p>
              <p>
                หากพบข้อมูลคลาดเคลื่อน สามารถติดต่อ <Link href="/contact" aria-label="ติดต่อฝ่ายสนับสนุน">ฝ่ายสนับสนุน</Link> เพื่อให้เราปรับปรุงได้ทันที
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

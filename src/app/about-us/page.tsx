'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './aboutus.module.css';

// แปลเนื้อหาในอาร์เรย์ counters
const counters = [
  { id: 'win', icon: '/images/fan1.png', label: 'ยอดชนะวันนี้', end: 13125 }, 
  { id: 'live', icon: '/images/fan2.png', label: 'ทัวร์นาเมนต์สด', end: 2789 }, 
  { id: 'happy', icon: '/images/fan3.png', label: 'ผู้ชนะที่พึงพอใจ', end: 12043 }, 
  { id: 'players', icon: '/images/fan4.png', label: 'ผู้เล่นออนไลน์', end: 1050 }, 
];

export default function AboutUsPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const featsRef = useRef<HTMLUListElement>(null);

  // ********** (Code ส่วน useEffect Logic เดิม) **********
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
  // ********** (สิ้นสุด Logic) **********

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
            <h1 className={styles.title}><span className={styles.gradient}>เกี่ยวกับ F168 & MK8 แพลตฟอร์มเกมออนไลน์ที่น่าเชื่อถือ</span></h1> 
            <p className={styles.lead}>**F168 และ MK8** กลายเป็นรูปแบบความบันเทิงยอดนิยมสำหรับผู้คนทั่วโลก แพลตฟอร์มเหล่านี้มีเกมหลากหลาย ตั้งแต่เกมแบบดั้งเดิมอย่างโป๊กเกอร์ แบล็คแจ็ค และรูเล็ต ไปจนถึงเกมที่ทันสมัยกว่า เช่น สล็อตและการเดิมพันกีฬาเสมือนจริง</p>
            <p className={styles.lead}>แพลตฟอร์มเหล่านี้มีเกมหลากหลาย ตั้งแต่เกมแบบดั้งเดิมอย่างโป๊กเกอร์ แบล็คแจ็ค และรูเล็ต ไปจนถึงเกมที่ทันสมัยกว่า เช่น วิดีโอสล็อตและการเดิมพันกีฬาเสมือนจริง คาสิโนออนไลน์มีข้อดีคือสามารถเข้าถึงได้จากทุกที่ทุกเวลา ทำให้เป็นตัวเลือกที่สะดวกสำหรับผู้เล่นหลายคน</p>
          </div>
          <div className={styles.topRight}>
            <Image src="/images/about1.png" alt="ภาพรวมแพลตฟอร์มเกม F168 และ MK8" width={720} height={560} className={styles.heroImg} priority draggable="false" />
          </div>
        </div>
        <div className={styles.statsGrid} ref={statsRef}>
          {counters.map((c) => (
            <div key={c.id} className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <Image src={c.icon} alt={`ไอคอนสถิติ ${c.label}`} width={76} height={76} draggable="false"/>
              </div>
              <div className={styles.statValue} data-count data-end={c.end}>0</div>
              <div className={styles.statLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom choose section */}
      <section className={styles.choose}>
        <div className={styles.chooseInner}>
          <div className={styles.chooseLeft}>
            <Image src="/images/about.png" alt="เหตุผลที่ควรเลือกเล่นเกมกับ F168 และ MK8" width={700} height={560} className={styles.heroImg} draggable="false" />
          </div>
          <div className={styles.chooseRight}>
            <h2 className={styles.title}><span className={styles.gradient}>ทำไมต้องเลือกเรา F168 & MK8</span></h2> 
            <ul className={styles.features} ref={featsRef}>
              <li data-choose-item style={{ ['--i' as any]: 0 }}>
                <Image src="/images/choose1.png" alt="ไอคอนโอกาสชนะรางวัลใหญ่" width={42} height={42} draggable="false"/>
                <span>โอกาสในการชนะรางวัลใหญ่</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 1 }}>
                <Image src="/images/choose2.png" alt="ไอคอนเรียนรู้เกมใหม่" width={42} height={42} draggable="false"/>
                <span>เรียนรู้เกมใหม่ๆ</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 2 }}>
                <Image src="/images/choose3.png" alt="ไอคอนเล่นฟรีและโบนัส" width={42} height={42} draggable="false"/>
                <span>เล่นฟรีและโบนัส</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 3 }}>
                <Image src="/images/choose4.png" alt="ไอคอนรับรางวัลความภักดี" width={42} height={42} draggable="false" />
                <span>รับรางวัลความภักดี</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
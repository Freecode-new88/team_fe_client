'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../f168.module.css';

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: 'จะรับโค้ดโปรโมชันได้อย่างไร?', a: 'เลื่อนขึ้นไปที่ส่วน “กล่องโค้ด” แล้วเลือกโค้ดที่ยังว่างเพื่อคัดลอกใช้งาน' },
  { q: 'วิธีเคลมโค้ดทำอย่างไร?', a: 'นำโค้ดวางในช่องใส่โค้ด กด “ตรวจสอบเลย” และยืนยันแคปชา จากนั้นกดรับสิทธิ์' },
  { q: 'เคลมโค้ดได้กี่ครั้ง?', a: 'ส่วนใหญ่โปรโมชันอนุญาต 1 ครั้งต่อบัญชี โปรดอ่านเงื่อนไขในแต่ละโปร' },
  { q: 'เป็นผู้ใช้ใหม่ เคลมได้ไหม?', a: 'ได้แน่นอน ผู้ใช้ใหม่สามารถเคลมโปรและรับโบนัสแต้มพิเศษได้ตามเงื่อนไข' },
  { q: 'โปรโมชันมีวันหมดอายุไหม?', a: 'มี โปรจะหมดอายุตามเวลาที่กำหนด หากเกินเวลาจะไม่สามารถรับสิทธิ์ได้ โปรดเคลมให้ทันเวลา' },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // reveal แบบทีละชิ้นเมื่อเลื่อนถึง
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const nodes = wrapRef.current?.querySelectorAll<HTMLElement>('[data-faq-item]');
    if (!nodes || nodes.length === 0) return;

    nodes.forEach((el, i) => el.style.setProperty('--i', String(i)));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.faqVisible);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={`${styles.fqa} mb-[50px] md:mb-0`}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>คำถามที่พบบ่อย</h2>
      </div>

      <div className={styles.faqWrap} ref={el => { wrapRef.current = el; }}>
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              data-faq-item
              style={{ ['--i' as any]: i }}
            >
              <button
                type="button"
                className={`${styles.faqButton} ${!isOpen ? styles.collapsed : ''}`}
                aria-expanded={isOpen}
                aria-controls={`faq-body-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {item.q}
              </button>

              <div id={`faq-body-${i}`} className={styles.faqBody}>
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

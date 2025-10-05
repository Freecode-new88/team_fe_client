'use client'
import { useEffect, useRef } from 'react';
import styles from '../f168.module.css'

type PROCESS = { step: string; title: string; text: string }

const procs: PROCESS[] = [
  {
    step: "01",
    title: "รับโค้ดจากกล่องโค้ด",
    text: "เลือกโค้ดที่ยังว่าง (Available) แล้วคัดลอกเพื่อใช้งาน"
  },
  {
    step: "02",
    title: "ใส่โค้ดและตรวจสอบสิทธิ์",
    text: "วางโค้ดลงในช่อง แล้วกด “ตรวจสอบเลย” และยืนยันแคปชา"
  },
  {
    step: "03",
    title: "กรอกชื่อบัญชีผู้ใช้",
    text: "ผ่านแคปชาแล้ว ใส่บัญชีผู้ใช้ที่ต้องการรับสิทธิ์ให้ครบถ้วน"
  },
  {
    step: "04",
    title: "รอระบบยืนยันและรับโปรโมชั่น",
    text: "รอสักครู่ ระบบจะมอบสิทธิ์ให้อัตโนมัติ จากนั้นเริ่มใช้งานโปรได้ทันที"
  },
];

export default function Process() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLElement>('[data-step-item]');
    if (!items || items.length === 0) return;

    items.forEach((el, i) => el.style.setProperty('--i', String(i)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.stepVisible);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.process}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>ขั้นตอนรับโปรโมชั่น</h2>
      </div>

      <div className={styles.processGrid} ref={(el) => { gridRef.current = el; }}>
        {procs.map((item, i) => (
          <div
            key={i}
            className={styles.processItem}
            data-step-item
            style={{ ['--i' as any]: i }}
          >
            <div className={styles.processIconWrap}>
              <div className={styles.processIcon}><span>{item.step}</span></div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

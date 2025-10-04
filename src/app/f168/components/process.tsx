'use client'
import { useEffect, useRef } from 'react';
import styles from '../f168.module.css'

type PROCESS = { step: string; title: string; text: string }

const procs: PROCESS[] = [
    {step: "01", title: "Get The Code From the Box", text: "At the code box, You can get the available codes"},
    {step: "02", title: "Put In code and check availity", text: "Click the Check Now button and solve the captcha"},
    {step: "03", title: "Your Account Name", text: "After successfully solve the captcha, Put in your account"},
    {step: "04", title: "Wait a while and Enjou the promotion", text: "After wait a while, You can enjoy our promotion"},
]

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
          <h2 className={styles.gradientFont}>Steps to Enjoy The Promotion</h2>
        </div>

        <div className={styles.processGrid} ref={(el) => { gridRef.current = el; }}>
            {procs.map((item, i) => {
          return (
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
          )
        })}
        </div>
      </section>
  )
}

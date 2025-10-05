'use client'
import { useEffect, useRef, useState } from 'react';
import styles from '../f168.module.css'

type Games = { img: string; title: string; }

const games: Games[] = [
  { img: "/images/1.jpg", title: "Dice Rolling" },
  { img: "/images/2.jpg", title: "Blackjack" },
  { img: "/images/3.jpg", title: "Roulette" },
  { img: "/images/4.jpg", title: "Spin" },
  { img: "/images/5.jpg", title: "Poker" },
  { img: "/images/6.jpg", title: "Spin" },
  { img: "/images/1.jpg", title: "Dice Rolling" },
  { img: "/images/2.jpg", title: "Blackjack" },
]


export default function Game() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setVisible((prev) => {
              if (prev.has(index)) return prev;
              const next = new Set(prev);
              next.add(index);
              return next;
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className={styles.game}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>เกมยอดนิยม</h2>
      </div>

      <div className={styles.gameGrid}>
        {games.map((item, i) => {
          const inViewClass = visible.has(i) ? styles.inView : '';
          return (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className={`${styles.gameItem} ${inViewClass}`}
              style={{ ['--i' as any]: i }} // used for stagger delay
            >
              <div className={styles.gameImg}>
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}
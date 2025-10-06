'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './aboutus.module.css';

const counters = [
  { id: 'win', icon: '/images/fan1.png', label: 'Today Win', end: 13125 },
  { id: 'live', icon: '/images/fan2.png', label: 'Live Tournaments', end: 2789 },
  { id: 'happy', icon: '/images/fan3.png', label: 'Happy Winners', end: 12043 },
  { id: 'players', icon: '/images/fan4.png', label: 'Online Players', end: 1050 },
];

export default function AboutUsPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const featsRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
  const $ = (id: string) =>
    document.querySelector<HTMLElement>(`[data-id="${id}"]`);
  const getNum = (el: HTMLElement | null) =>
    el ? Number(el.textContent?.replace(/,/g, '') || 0) : 0;
  const setNum = (el: HTMLElement | null, v: number) => {
    if (el) el.textContent = v.toLocaleString();
  };
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const winEl = $('win');
  const happyEl = $('happy');
  const playersEl = $('players');

  let timeouts: number[] = [];

  const scheduleWinHappy = () => {
    const delay = rand(1000, 10000);      // 1–10s
    const inc = rand(2, 5);    // 2-5 random
    const t = window.setTimeout(() => {
      setNum(winEl, getNum(winEl) + inc);
      setNum(happyEl, getNum(happyEl) + inc);
      scheduleWinHappy();
    }, delay);
    timeouts.push(t);
  };

  const schedulePlayers = () => {
    const delay = rand(1000, 5000);
    const inc = rand(1, 2);
    const t = window.setTimeout(() => {
      setNum(playersEl, getNum(playersEl) + inc);
      schedulePlayers();
    }, delay);
    timeouts.push(t);
  };

  scheduleWinHappy();
  schedulePlayers();

  return () => {
    timeouts.forEach(clearTimeout);
    timeouts = [];
  };
}, []);

  return (
    <main className={styles.page}>
      {/* Top section */}
      <section className={styles.top}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
            <h1 className={styles.title}><span className={styles.gradient}>About Our Platform</span></h1>
            <p className={styles.lead}>F168 & MK8 have become a popular form of entertainment game site for people all over the world. These platforms offer a wide range of games from traditional games like poker blackjack and roulette to more modern games like slots and virtual sports betting.</p>
            <p className={styles.lead}>These platforms offer a wide range of games from traditional games like poker blackjack and roulette to more modern games like video slots and virtual sports betting. Online casinos have the advantage of being accessible from anywhere at any time making them a convenient option for many players.</p>
          </div>
          <div className={styles.topRight}>
            <Image src="/images/about1.png" alt="About platform" width={720} height={560} className={styles.heroImg} priority draggable="false" />
          </div>
        </div>
        <div className={styles.statsGrid} ref={statsRef}>
          {counters.map((c) => (
            <div key={c.id} className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <Image src={c.icon} alt="" width={76} height={76} draggable="false"/>
              </div>
              <div className={styles.statValue} data-count data-id={c.id} data-end={c.end}>0</div>
              <div className={styles.statLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom choose section */}
      <section className={styles.choose}>
        <div className={styles.chooseInner}>
          <div className={styles.chooseLeft}>
            <Image src="/images/about.png" alt="About" width={700} height={560} className={styles.heroImg} draggable="false" />
          </div>
          <div className={styles.chooseRight}>
            <h2 className={styles.title}><span className={styles.gradient}>Why Choose Us</span></h2>
            <ul className={styles.features} ref={featsRef}>
              <li data-choose-item style={{ ['--i' as any]: 0 }}>
                <Image src="/images/choose1.png" alt="Feature" width={42} height={42} draggable="false"/>
                <span>Opportunity To Win Big</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 1 }}>
                <Image src="/images/choose2.png" alt="Feature" width={42} height={42} draggable="false"/>
                <span>Learn New Games</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 2 }}>
                <Image src="/images/choose3.png" alt="Feature" width={42} height={42} draggable="false"/>
                <span>Free Play And Bonuses</span>
              </li>
              <li data-choose-item style={{ ['--i' as any]: 3 }}>
                <Image src="/images/choose4.png" alt="Feature" width={42} height={42} draggable="false" />
                <span>Earning Loyalty Rewards</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './contactus.module.css';

export default function ContactUsPage() {
  const qrRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // QR
  useEffect(() => {
    const el = qrRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add(styles.qrVisible);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Contact Info
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('li')) as HTMLElement[];
    items.forEach((li, i) => li.style.setProperty('--i', String(i)));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add(styles.infoVisible);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    items.forEach(li => io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.hero} aria-label="Contact us">
      <div className={styles.contactcontainer}>
        {/* Left: simple info block */}
        <div className={styles.left}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className={styles.title}><span className={styles.gradient}>Join Us For More Updates</span></h1>
          <p className={styles.lead}>
            You can get daily promotions at the telegram group.
            Don't miss the amazing chance of giveaways points and import update NEWS. Join the group now!!
          </p>

          <ul className={styles.infoList} ref={listRef}>
            <li>
              <Image
                src="/images/tele.png"
                alt="Telegram user"
                width={40}
                height={40}
                priority
                draggable="false"
              />
              <span>Telegram username</span>
            </li>
            <li>
              <Image
                src="/images/line.png"
                alt="Line user"
                width={50}
                height={50}
                priority
                draggable="false"
              />
              <span>Line</span>
            </li>
          </ul>
        </div>

        {/* Right: Telegram QR */}
        <div className={styles.right}>
          <div className={styles.qrCard} ref={qrRef} data-motion="drop">
            <Image
              src="/images/TGQR.png"
              alt="Telegram QR"
              width={320}
              height={320}
              priority
              draggable="false"
            />
            <p className={styles.qrCaption}>Scan to contact us on Telegram</p>
          </div>
        </div>
      </div>
    </section>
  );
}
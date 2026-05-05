'use client';
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "../f168.module.css";
import { F168lINK, MK8LINK } from "@/config/site";

type Game = { img: string; title: string; web: string; path: string };

const games: Game[] = [
  {
    "img": "/images/mk8/refer-friends-triple-bonus-1-3-commission.webp",
    "title": "ชวนเพื่อน รับโบนัส 3 ต่อ ค่าคอมมิชันสูงสุด 1.3%",
    "web": "mk8",
    "path": "refer-friends-triple-bonus-1-3-commission"
  },
  {
    "img": "/images/mk8/daily-profit-bonus-slots-fishing-card-games.webp",
    "title": "โบนัสกำไรรายวัน",
    "web": "mk8",
    "path": "daily-profit-bonus-slots-fishing-card-games"
  },
  {
    "img": "/images/mk8/first-deposit-bonus-20.webp",
    "title": "ฝากครั้งแรก รับเพิ่ม 188",
    "web": "mk8",
    "path": "first-deposit-bonus-188"
  },
  {
    "img": "/images/mk8/lucky-wheel-spin-and-win.webp",
    "title": "วงล้อนำโชค ลุ้นรางวัลทุกวัน",
    "web": "mk8",
    "path": "lucky-wheel-spin-and-win"
  },
  {
    "img": "/images/mk8/monthly-random-giveaways-bonus.webp",
    "title": "สุ่มแจกทุกเดือน สำหรับสมาชิก (รายเดือน/พิเศษ/ลับ)",
    "web": "mk8",
    "path": "monthly-random-giveaways-bonus"
  },
  {
    "img": "/images/mk8/register-get-28-8-free-credit.webp",
    "title": "สมัครใหม่ รับเครดิตฟรี 28.8 บาท",
    "web": "mk8",
    "path": "register-get-28-8-free-credit"
  },
  {
    "img": "/images/mk8/usdt-deposit-bonus-2-percent.webp",
    "title": "ฝาก USDT รับเพิ่ม 2%",
    "web": "mk8",
    "path": "usdt-deposit-bonus-2-percent"
  },
  {
    "img": "/images/f168/last-number-lucky.avif",
    "title": "เลขท้ายสล็อตนำโชครับได้ทุกวัน สูงสุดถึง 28,888",
    "web": "f168",
    "path": "lucky-slot-last-digits-bonus"
  },
  {
    "img": "/images/f168/get-188.avif",
    "title": "ฝากครั้งแรกของยูส 188 บาท",
    "web": "f168",
    "path": "first-deposit-188-bonus",
  },
  {
    "img": "/images/f168/daily-bonus.avif",
    "title": "เทิร์นรายวันโบนัสรับได้สูงสุดถึง 15,888",
    "web": "f168",
    "path": "daily-turnover-bonus-15888"
  },
  {
    "img": "/images/f168/get-more-2-percent.avif",
    "title": "ฝาก USDT รับเพิ่ม 2%",
    "web": "f168",
    "path": "usdt-deposit-bonus-2percent",
  },
  {
    "img": "/images/f168/get-more-10-percent.avif",
    "title": "ฝากทุกวัน รับเพิ่ม 10%",
    "web": "f168",
    "path": "daily-deposit-bonus-10percent"
  }
]

const mk8Events: Record<string, string> = {
  "register-get-28-8-free-credit.webp": "pro_m_km28",
  "lucky-wheel-spin-and-win.webp": "pro_m_lk01",
};
const f168Events: Record<string, string> = {
  "get-more-10-percent.avif": "pro_f_cnv10",
  "last-number-lucky.avif": "pro_f_lucky",
};

function trackAndOpen(img: string, web: "mk8" | "f168", path: string) {
  const event = web === "mk8" ? mk8Events[img.split("/").pop() || ""] : f168Events[img.split("/").pop() || ""];
  const link = web === "mk8" ? MK8LINK : F168lINK;

  // ✅ ส่ง gtag event (ไม่ block UI)
  requestIdleCallback?.(() => {
    const win = window as any;
    if (win?.gtag && event) {
      win.gtag("event", event, {
        location: "promo_grid",
        image: img,
        web,
        link_url: link,
      });
    }
  });

  // ✅ เปิดในแท็บเดียวหลัง track
  window.location.href = `/promotion-info/${path}/`;
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Promotions() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const uniqueGames = useMemo(() => Array.from(new Map(games.map(g => [g.img, g])).values()), []);
  const [picked, setPicked] = useState<Game[]>(() => uniqueGames.slice(0, 8));

  // ✅ สุ่มหลัง mount (1 ครั้ง)
  useEffect(() => setPicked(shuffle(uniqueGames).slice(0, 8)), [uniqueGames]);

  // ✅ Lazy animation เฉพาะที่มองเห็น
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setVisible(prev => new Set([...prev, idx]));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, [picked.length]);

  return (
    <section
      className={styles.game}
      aria-labelledby="promotion-section-title"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className={styles.sectionHeading}>
        <h2
          id="promotion-section-title"
          className={styles.gradientFont}
          itemProp="name"
        >
          โปรโมชั่นร้อนแรง 🔥
        </h2>
      </div>

      {/* ✅ Mobile-first grid */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-5">
        {picked.map((item, i) => {
          const inView = visible.has(i) ? styles.inView : "";
          const href = `/promotion-info/${item.path}/`;

          return (
            <article
              key={item.img}
              ref={(el) => void (itemRefs.current[i] = el)}
              data-index={i}
              className={`${inView} col-span-6 sm:col-span-4 lg:col-span-3`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <a
                href={href}
                aria-label={item.title}
                onClick={e => {
                  e.preventDefault();
                  trackAndOpen(item.img, item.web as "mk8" | "f168", item.path);
                }}
                className="group relative block overflow-hidden rounded-xl border border-white/10 shadow-md bg-black/30 backdrop-blur-sm transition-transform duration-200 will-change-transform hover:scale-[1.02]"
                itemProp="url"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={372}
                  height={198}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover"
                  draggable={false}
                  itemProp="image"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm sm:text-base font-semibold">
                    ข้อมูลโปรโมชั่น
                  </span>
                </div>
              </a>
              <h3
                className="mt-2 text-center text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2"
                itemProp="name"
              >
                {item.title}
              </h3>
              <meta itemProp="position" content={String(i + 1)} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

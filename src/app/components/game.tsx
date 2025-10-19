'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from '../f168.module.css'
import { F168lINK, MK8LINK } from '@/config/site';

type Games = { img: string; title: string; web: string }

const games: Games[] = [
  {
    "img": "/images/mk8/refer-friends-triple-bonus-1-3-commission.webp",
    "title": "ชวนเพื่อน รับโบนัส 3 ต่อ ค่าคอมมิชันสูงสุด 1.3%",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/daily-profit-bonus-slots-fishing-card-games.webp",
    "title": "โบนัสกำไรรายวัน (สล็อต/ยิงปลา/เกมไพ่)",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/first-deposit-bonus-20.webp",
    "title": "ฝากครั้งแรก รับเพิ่ม 20%",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/lucky-wheel-spin-and-win.webp",
    "title": "วงล้อนำโชค ลุ้นรางวัลทุกวัน",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/monthly-random-giveaways-bonus.webp",
    "title": "สุ่มแจกทุกเดือน สำหรับสมาชิก (รายเดือน/พิเศษ/ลับ)",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/refer-friends-triple-bonus-1-3-commission.webp",
    "title": "ชวนเพื่อน รับโบนัส 3 ต่อ ค่าคอมมิชันสูงสุด 1.3%",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/register-get-28-8-free-credit.webp",
    "title": "สมัครใหม่ รับเครดิตฟรี 28.8 บาท",
    "web": "mk8"
  },
  {
    "img": "/images/mk8/usdt-deposit-bonus-2-percent.webp",
    "title": "ฝาก USDT รับเพิ่ม 2%",
    "web": "mk8"
  },
  {
    "img": "/images/f168/all-bank.webp",
    "title": "รองรับทุกธนาคารในไทย",
    "web": "f168"
  },
  {
    "img": "/images/f168/get-36.webp",
    "title": "สมัครใหม่ รับเครดิตฟรี 36 บาท",
    "web": "f168"
  },
  {
    "img": "/images/f168/get-more-2-percent.webp",
    "title": "ฝาก USDT รับเพิ่ม 2%",
    "web": "f168"
  },
  {
    "img": "/images/f168/get-more-10-percent.webp",
    "title": "ฝากทุกวัน รับเพิ่ม 10%",
    "web": "f168"
  }
]

const mk8Events: Record<string, string> = {
  "daily-deposit-10-any-amount-up-to-2888.webp": "register_m_cnv10",
  "daily-profit-bonus-slots-fishing-card-games.webp": "register_m_sf01",
  "daily-turnover-bonus-slots-fishing-card.webp": "register_m_sf03",
  "first-deposit-bonus-20.webp": "register_m_la20",
  "lucky-wheel-spin-and-win.webp": "register_m_lk01",
  "monthly-random-giveaways-bonus.webp": "register_m_bn08",
  "refer-friends-triple-bonus-1-3-commission.webp": "register_m_nnp01",
  "register-get-28-8-free-credit.webp": "register_m_km28",
  "usdt-deposit-bonus-2-percent.webp": "register_m_usdt01",
};

const f168Events: Record<string, string> = {
  "all-bank.webp": "register_f_trc",
  "get-36.webp": "register_f_free36",
  "get-more-2-percent.webp": "register_f_usdt01",
  "get-more-10-percent.webp": "register_f_cnv10",
};

const baseName = (path: string) => path.split("/").pop() ?? path;

function trackAndOpen(imgPath: string, web: "mk8" | "f168") {
  const file = baseName(imgPath);

  const event =
    web === "mk8" ? mk8Events[file] : f168Events[file];

  if (typeof window !== "undefined" && (window as any).gtag && event) {
    (window as any).gtag("event", event, {
      location: "game_grid",
      image: file,
      web,
      link_url: web === "mk8" ? MK8LINK : F168lINK,
    });
  }
  const url = web === "mk8" ? MK8LINK : F168lINK;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win) win.opener = null;
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Game() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // กำจัดซ้ำด้วย img (ถือเป็น unique id)
  const uniqueGames = useMemo(() => {
    const map = new Map<string, Games>();
    for (const g of games) if (!map.has(g.img)) map.set(g.img, g);
    return Array.from(map.values());
  }, []);

  // เริ่มต้นด้วย 8 อันแรก (ให้ตรง SSR) แล้วค่อยสุ่มหลัง mount
  const [picked, setPicked] = useState<Games[]>(() => uniqueGames.slice(0, 8));

  useEffect(() => {
    setPicked(shuffle(uniqueGames).slice(0, 8));
  }, [uniqueGames]);

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

    itemRefs.current.slice(0, picked.length).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [picked.length]);


  return (

    <section className={styles.game}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>โปรโมชั่นร้อนแรง</h2>
      </div>

      {/* Grid: มือถือ 1 คอลัมน์ (12/12), แท็บเล็ต 3 คอลัมน์ (4/12), พีซี 4 คอลัมน์ (3/12) */}
      <div className="grid grid-cols-12 gap-4 p-5">
        {picked.map((item, i) => {
          const inViewClass = visible.has(i) ? styles.inView : "";

          return (
            <div
              key={item.img}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className={`${inViewClass} col-span-12 md:col-span-4 lg:col-span-3`}
              style={{ ["--i" as any]: i }}
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={item.title}
                onClick={() => trackAndOpen(item.img, item.web as "mk8" | "f168")}
                className="group relative w-full overflow-hidden rounded-xl shadow transition hover:shadow-lg cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  draggable="false"
                  loading="lazy"
                  className="w-full h-auto block transform-gpu transition duration-300 ease-out group-hover:scale-105"
                />
                {/* hover overlay */}
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center
                         bg-blue-600/60 opacity-0 group-hover:opacity-100
                         transition duration-300 ease-out"
                >
                  <span className="text-white text-lg md:text-xl font-semibold drop-shadow px-4 py-2">
                    ลงทะเบียนรับสิทธิ์ทันที
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from '../f168.module.css'
import { F168lINK, MK8LINK } from '@/config/site';

type Games = { img: string; title: string; web: string }

const games: Games[] = [
  {
    img: "/images/mk8/refer-friends-triple-bonus-1-3-commission.png",
    title: "แนะนำเพื่อนรับโบนัสเน้นๆไปเลย3ต่อ ค่าคอมมิชชั่นสูงสุด 1.3%",
    web: "mk8"
  },
  {
    img: "/images/mk8/daily-profit-bonus-slots-fishing-card-games.png",
    title: "โบนัสกำไรรายวัน (สล๊อต-ยิงปลา-เกมไพ่)",
    web: "mk8"
  },
  {
    "img": "/images/mk8/first-deposit-bonus-20.jpg",
    "title": "ฝากครั้งแรกของยูส 20%",
    web: "mk8"
  },
  {
    "img": "/images/mk8/lucky-wheel-spin-and-win.jpg",
    "title": "วงล้อนำโชค",
    web: "mk8"
  },
  {
    "img": "/images/mk8/monthly-random-giveaways-bonus.jpg",
    "title": "สุ่มแจกทุกเดือน (โบนัสรายเดือน • โบนัสสมาชิก • โบนัสลึกลับ)",
    web: "mk8"
  },
  {
    "img": "/images/mk8/refer-friends-triple-bonus-1-3-commission.png",
    "title": "แนะนำเพื่อน รับโบนัส 3 ต่อ ค่าคอมมิชชั่นสูงสุด 1.3%",
    web: "mk8"
  },
  {
    "img": "/images/mk8/register-get-28-8-free-credit.jpg",
    "title": "ลงทะเบียนรับเครดิตฟรี 28.8",
    web: "mk8"
  },
  {
    "img": "/images/mk8/usdt-deposit-bonus-2-percent.jpg",
    "title": "โบนัสฝากเงิน USDT รับเพิ่ม 2%",
    web: "mk8"
  },
  {
    "img": "/images/f168/all-bank.png",
    "title": "รองรับธนาคารทุกแห่งในประเทศไทย",
    web: "f168"
  },
  {
    "img": "/images/f168/get-36.png",
    "title": "ลงทะเบียนรับเครดิตฟรี 36 บาท",
    web: "f168"
  },
  {
    "img": "/images/f168/get-more-2-percent.png",
    "title": "โบนัสฝากเงิน USDT รับเพิ่ม 2%",
    web: "f168"
  },
  {
    "img": "/images/f168/get-more-10-percent.png",
    "title": "ฝากรายวันรับเพิ่ม 10%",
    web: "f168"
  }
]

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

  function openSafe(url?: string) {
    if (!url) return;
    const win = window.open(url, "_blank", "noopener,noreferrer"); // no referrer + no opener
    if (win) win.opener = null; // extra guard
  }

  return (
    <section className={styles.game}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.gradientFont}>เกมยอดนิยม</h2>
      </div>

      {/* Grid: มือถือ 1 คอลัมน์ (12/12), แท็บเล็ต 3 คอลัมน์ (4/12), พีซี 4 คอลัมน์ (3/12) */}
      <div className="grid grid-cols-12 gap-4 p-5">
        {picked.map((item, i) => {
          const inViewClass = visible.has(i) ? styles.inView : '';
          return (
            <div
              onClick={() => {
                if (item.web == "mk8") {
                  openSafe(MK8LINK)
                } else if (item.web == "f168") {
                  openSafe(F168lINK)
                }
              }}
              key={item.img}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className={`${inViewClass} col-span-12 md:col-span-4 lg:col-span-3`}
              style={{ ['--i' as any]: i }}
            >
              <div className="group relative w-full overflow-hidden rounded-xl shadow transition hover:shadow-lg cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto block transform-gpu transition duration-300 ease-out group-hover:scale-105"
                />
                {/* hover overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center
                          bg-blue-600/60 opacity-0 group-hover:opacity-100
                          transition duration-300 ease-out">
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
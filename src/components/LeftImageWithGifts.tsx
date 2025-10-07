"use client";
import { useMemo } from "react";
import { Gift } from "lucide-react";

type Sticker = { x: string; y: string; label: string; delay: string };

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/** สร้างสติ๊กเกอร์ N ชิ้นแบบสุ่ม (โซนซ้ายของภาพ) */
function makeStickers(n = 6): Sticker[] {
  const labels = ["เครดิตฟรี", "ฟรีโค้ด"];
  const pts: { x: number; y: number }[] = [];
  const result: Sticker[] = [];

  // พื้นที่สุ่ม (เปอร์เซ็นต์ของภาพ) — ปรับได้
  const X_MIN = 4, X_MAX = 28;   // ซ้ายของภาพ
  const Y_MIN = 10, Y_MAX = 70;  // กลางแนวตั้ง
  const MIN_DIST = 9;            // กันซ้อนกันมากเกินไป

  for (let i = 0; i < n; i++) {
    let x = 0, y = 0, tries = 0;
    do {
      x = rand(X_MIN, X_MAX);
      y = rand(Y_MIN, Y_MAX);
      tries++;
      if (tries > 20) break; // ยอมถ้าเลี่ยงชนไม่ได้
    } while (pts.some(p => Math.hypot(p.x - x, p.y - y) < MIN_DIST));

    pts.push({ x, y });
    result.push({
      x: `${x}%`,
      y: `${y}%`,
      label: labels[i % labels.length],
      delay: `${rand(0, 0.6).toFixed(2)}s`,
    });
  }
  return result;
}

export function LeftImageWithGifts({
  count = 6,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  // สุ่มครั้งเดียวตอนเมานต์
  const stickers = useMemo(() => makeStickers(count), [count]);

  return  stickers.map((s, i) => (
        <div
          key={i}
          className="
            absolute -translate-x-1/2 -translate-y-1/2
            flex items-center gap-1 rounded-full
            px-2.5 py-1.5 shadow-[0_0_12px_rgba(255,0,140,.8)]
            border border-pink-300/60 backdrop-blur-sm
            animate-[float_3s_ease-in-out_infinite]
          "
          style={{ left: s.x, top: s.y, animationDelay: s.delay }}
        >
          <Gift className="h-4 w-4 shrink-0 text-white drop-shadow" aria-hidden />
        </div>
      ))
  
}

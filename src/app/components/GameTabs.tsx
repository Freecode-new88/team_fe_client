'use client';
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { game_list } from "@/promotions/game_list";

// 🔹 ใช้ random แต่ deterministic (ไม่เปลี่ยนทุก render)
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GameTabs() {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // ✅ Detect viewport
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    setHydrated(true);
    return () => window.removeEventListener("resize", check);
  }, []);

  const randomGames = useMemo(() => {
    const count = isMobile ? 12 : 24;
    return shuffle(game_list).slice(0, count);
  }, [isMobile]);

  if (!hydrated) return null;

  return (
    <section
      className="py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0b0f17] via-[#0e121c] to-[#101520]"
      aria-labelledby="featured-games-title"
    >
      <header className="text-center mb-10">
        <h2
          id="featured-games-title"
          className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-md"
        >
          🎮 เกมน่าเล่นประจำสัปดาห์
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
          รวมเกมสล็อตยอดนิยมจากทุกค่าย เล่นง่าย แตกหนัก พร้อมรีวิวจริงจากผู้เล่น!
        </p>
      </header>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {randomGames.map((game, index) => (
          <article
            key={game.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Game"
            className="col-span-1 flex flex-col bg-[#121826] rounded-2xl shadow-lg shadow-black/30 overflow-hidden border border-gray-800 hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <Link
              href={`/slots/${game.path}/`}
              prefetch={false}
              itemProp="url"
              aria-label={`เล่นเกมสล็อต ${game.name}`}
              className="group relative block"
            >
              <Image
                src={game.img}
                alt={`ภาพตัวอย่างเกมสล็อต ${game.name}`}
                width={372}
                height={198}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                draggable={false}
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-3 transition-opacity duration-300">
                <span className="text-white text-sm font-semibold px-3 py-1 rounded-full bg-cyan-600/80 backdrop-blur-sm shadow-md">
                  ดูรายละเอียด
                </span>
              </div>
            </Link>

            <div className="p-3 flex flex-col flex-1">
              <h3
                className="text-center text-white text-sm sm:text-base font-semibold mb-2 line-clamp-2"
                itemProp="name"
              >
                {game.name}
              </h3>

              {game.meta?.provider && (
                <p className="text-xs text-gray-400 text-center mb-2">
                  ผู้ให้บริการ: <span className="text-cyan-400">{game.meta.provider}</span>
                </p>
              )}

              {game.meta.ratingValue && game.meta.ratingCount && (
                <div
                  className="flex items-center justify-center gap-1 text-yellow-400 mt-auto"
                  itemProp="aggregateRating"
                  itemScope
                  itemType="https://schema.org/AggregateRating"
                >
                  <span className="text-base">⭐</span>
                  <span itemProp="ratingValue" className="font-semibold">
                    {game.meta.ratingValue}
                  </span>
                  <span className="text-xs text-gray-400">/ 5</span>
                  <meta itemProp="ratingCount" content={game.meta.ratingCount} />
                </div>
              )}

              <meta itemProp="position" content={String(index + 1)} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

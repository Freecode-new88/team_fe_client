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

  // ✅ Check once for mobile viewport
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    setHydrated(true);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ UseMemo เพื่อป้องกัน re-random ทุก render
  const randomGames = useMemo(() => {
    const count = isMobile ? 12 : 24;
    return shuffle(game_list).slice(0, count);
  }, [isMobile]);

  if (!hydrated) return null;

  return (
    <section
      className="py-8 px-4 md:px-8 lg:px-16 bg-transparent"
      style={{ backgroundImage: 'url("/images/steps.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
      aria-labelledby="featured-games-title"
    >
      {/* 🔹 Title with SEO semantic */}
      <header className="text-center mb-8">
        <h2
          id="featured-games-title"
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          🎮 เกมน่าเล่น
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mt-1 max-w-lg mx-auto">
          รวมเกมสล็อตยอดนิยมจากทุกค่าย เล่นง่าย แตกบ่อย พร้อมรีวิวและทดลองเล่นฟรี
        </p>
      </header>

      {/* 🔹 Game Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-3 sm:gap-4"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {randomGames.map((game, index) => (
          <article
            key={game.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Game"
            className="col-span-1 flex flex-col"
          >
            <Link
              href={`/slots/${game.path}/`}
              prefetch={false} // ✅ ป้องกัน network prefetch ที่ไม่จำเป็น
              itemProp="url"
              aria-label={`เล่นเกมสล็อต ${game.name}`}
              className="block group relative rounded-xl overflow-hidden shadow-md hover:shadow-cyan-400/40 transition-transform duration-200"
            >
              <Image
                src={game.img}
                alt={`ภาพตัวอย่างเกมสล็อต ${game.name}`}
                width={372}
                height={198}
                loading="lazy" // ✅ Lazy load
                decoding="async" // ✅ Non-blocking
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                className="w-full h-auto object-cover will-change-transform transition-transform duration-200 group-hover:scale-[1.03]"
                draggable={false}
                itemProp="image"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                <span className="text-white text-sm font-semibold px-2 py-1 rounded-md bg-cyan-600/70">
                  ดูรายละเอียด
                </span>
              </div>
            </Link>
            <h3
              className="text-center text-white mt-2 text-sm sm:text-base font-semibold line-clamp-2"
              itemProp="name"
            >
              {game.name}
            </h3>
            {game.meta?.provider && (
              <meta itemProp="creator" content={game.meta.provider} />
            )}
            {game.meta?.rtp && (
              <meta itemProp="aggregateRating" content={String(game.meta.rtp)} />
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </article>
        ))}
      </div>
    </section>
  );
}

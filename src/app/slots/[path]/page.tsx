import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { game_list } from "@/promotions/game_list";
import PlayButton from "@/app/components/PlayButton";

export async function generateStaticParams() {
  return game_list.map((game) => ({ path: game.path }));
}

// ✅ Safe shuffle
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function generateMetadata({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;
  const game = game_list.find((g) => g.path === path);
  if (!game) return { title: "ไม่พบเกมนี้ | Thaideal" };

  const description = `${game.name} รีวิวเกมสล็อต ${game.meta.provider} | อัตรา RTP ${game.meta.rtp} | ฟีเจอร์ ${game.meta.volatility} | ทดลองเล่นฟรีบน Thaideal!`;

  return {
    title: `${game.name} | รีวิวเกมสล็อต`,
    description,
    openGraph: {
      title: game.name,
      description,
      images: [game.img],
      url: `https://thaideal.co/slots/${path}/`,
    },
    alternates: {
      canonical: `https://thaideal.co/slots/${path}/`,
    },
  };
}

export default async function GamePage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;
  const game = game_list.find((g) => g.path === path);
  if (!game) notFound();

  return (
    <main
      className="min-h-screen bg-black text-white py-8 px-4 md:px-8 lg:px-16"
      itemScope
      itemType="https://schema.org/Game"
    >
      {/* ✅ Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="text-[13px] sm:text-sm font-medium text-gray-300 mb-4"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-1"
          >
            <Link
              href="/"
              itemProp="item"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline-offset-2 hover:underline"
            >
              <span itemProp="name">หน้าหลัก</span>
            </Link>
            <meta itemProp="position" content="1" />
            <span className="text-gray-500 px-1">›</span>
          </li>

          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
            className="text-white drop-shadow-sm"
          >
            <span itemProp="name">{game.name}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* === Title === */}
      <header className="text-center mb-8">
        <h1
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          itemProp="name"
        >
          {game.name}
        </h1>
        <p className="text-gray-400 text-sm mt-2" itemProp="description">
          เกมสล็อตจากค่าย {game.meta.provider} | RTP {game.meta.rtp} | ความผันผวน {game.meta.volatility}
        </p>
      </header>

      {/* === Game Info === */}
      <article
        className="border border-cyan-400/40 rounded-2xl p-5 md:p-8 bg-black/40 backdrop-blur-sm shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={game.img}
              alt={`ภาพเกมสล็อต ${game.name}`}
              width={400}
              height={400}
              loading="eager"
              priority
              decoding="async"
              className="w-64 md:w-80 rounded-xl shadow-lg border border-cyan-400/40 object-cover"
              itemProp="image"
            />
          </div>

          {/* Info */}
          <div className="space-y-2 text-gray-300 text-sm md:text-base">
            {[
              ["🎯 RTP", game.meta.rtp],
              ["⚡ ความผันผวน", game.meta.volatility],
              ["💰 รางวัลสูงสุด", game.meta.maximum_Win],
              ["💸 เดิมพันต่ำสุด", game.meta.minBet],
              ["💸 เดิมพันสูงสุด", game.meta.maxBet],
              ["🎮 ผู้ให้บริการ", game.meta.provider],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                <span>{label}</span>
                <strong className="text-white">{value || "-"}</strong>
              </div>
            ))}

            {/* ✅ Rating Schema */}
            {game.meta.ratingValue && game.meta.ratingCount && (
              <div
                className="flex items-center justify-between mt-4 text-yellow-400"
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <span className="flex items-center gap-1">
                  ⭐ <span itemProp="ratingValue">{game.meta.ratingValue}</span> / 5
                </span>
                <span className="text-sm text-gray-400">
                  (<span itemProp="ratingCount">{game.meta.ratingCount}</span> รีวิว)
                </span>
              </div>
            )}

            {game.meta.provider_img && (
              <div className="flex justify-center py-4">
                <Image
                  src={game.meta.provider_img}
                  alt={game.meta.provider}
                  width={160}
                  height={60}
                  loading="lazy"
                  decoding="async"
                  className="h-10 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Licensing */}
        {game.meta.licensing?.length > 0 && (
          <section className="mt-8 text-center" aria-label="หน่วยงานกำกับดูแลเกม">
            <p className="text-white font-semibold mb-3">
              หน่วยงานกำกับดูแลและผู้ทดสอบมาตรฐานเกม
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {game.meta.licensing.map((lic, i) => (
                <a
                  key={i}
                  href={lic.website}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-90 transition"
                >
                  {lic.logo && (
                    <Image
                      src={lic.logo}
                      alt={lic.name}
                      width={60}
                      height={30}
                      loading="lazy"
                      decoding="async"
                      className="object-contain bg-white rounded p-1"
                    />
                  )}
                  <span className="text-xs text-gray-400 mt-1">{lic.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <PlayButton />
            </div>
          </section>
        )}
      </article>

      {/* === รีวิวเกม === */}
      <section className="mt-12 prose prose-invert max-w-none text-gray-300 leading-relaxed">
        <h2 className="text-cyan-400 font-bold text-2xl mb-2">รีวิวเกม</h2>
        <div dangerouslySetInnerHTML={{ __html: game.review }} />
      </section>

      {/* === วิธีเล่น === */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-pink-400 mb-3">วิธีเล่น</h2>
        <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: game.how_to_play }} />
      </section>

      {/* === ฟีเจอร์เกม === */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-3">ฟีเจอร์เกม</h2>
        <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: game.features }} />
      </section>

      {/* === เกมแนะนำเพิ่มเติม === */}
      {game.recommended && (
        <section className="mt-16 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-3">เกมแนะนำเพิ่มเติม</h2>
          <div dangerouslySetInnerHTML={{ __html: game.recommended }} />
        </section>
      )}

      {/* === เกมที่น่าสนใจอื่น ๆ === */}
      <section
        className="mt-14"
        itemScope
        itemType="https://schema.org/ItemList"
        aria-label="เกมสล็อตอื่น ๆ"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-3">🎰 เกมที่น่าสนใจอื่น ๆ</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {shuffle(game_list)
            .slice(0, 10)
            .map((g, i) => (
              <article
                key={g.path}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Game"
                className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl p-3 hover:shadow-cyan-400/30 transition"
              >
                <Link href={`/slots/${g.path}/`} prefetch={false} aria-label={`ดูรายละเอียดเกม ${g.name}`}>
                  <Image
                    src={g.img}
                    alt={`เกมสล็อต ${g.name}`}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    className="w-20 h-20 rounded-lg object-cover border border-cyan-400/40"
                  />
                </Link>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm line-clamp-2" itemProp="name">
                    {g.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">
                    RTP {g.meta?.rtp || "96%"} • {g.meta?.provider}
                  </p>

                  {/* ⭐ Rating for related games */}
                  {g.meta?.ratingValue && g.meta?.ratingCount && (
                    <p
                      className="text-yellow-400 text-xs mt-1"
                      itemProp="aggregateRating"
                      itemScope
                      itemType="https://schema.org/AggregateRating"
                    >
                      ⭐ <span itemProp="ratingValue">{g.meta.ratingValue}</span>/5
                      &nbsp;(<span itemProp="ratingCount">{g.meta.ratingCount}</span> รีวิว)
                    </p>
                  )}

                  <Link
                    href={`/slots/${g.path}/`}
                    className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-600 text-white hover:from-cyan-400 hover:via-purple-400 hover:to-pink-500 transition"
                  >
                    รีวิวและทดลองเล่น
                  </Link>
                  <meta itemProp="position" content={String(i + 1)} />
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

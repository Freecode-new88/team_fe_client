import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { promotionList } from "@/promotions/list";
import { F168lINK, MK8LINK } from "@/config/site";

// ✅ For static export (required)
export async function generateStaticParams() {
  return promotionList.map((promo) => ({ path: promo.path }));
}

// ✅ SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ path: string }> }): Promise<Metadata> {
  const { path } = await params; // ✅ ต้อง await ก่อน
  const promo = promotionList.find((p) => p.path === path);

  if (!promo) {
    return { title: "ไม่พบโปรโมชัน | Thaibet" };
  }

  return {
    title: `${promo.title}`,
    description: promo.subtitle,
    keywords: promo.keywords.join(", "),
    openGraph: {
      title: promo.title,
      description: promo.subtitle,
      images: promo.imgs,
    },
  };
}

// ✅ Main Page
export default async function PromotionInfoPage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params; // ✅ ต้อง await ก่อน
  const promo = promotionList.find((p) => p.path === path);

  if (!promo) notFound();

  return (
    <main className="min-h-screen bg-[url('/images/game.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-5xl mx-auto bg-black/70 backdrop-blur-sm rounded-2xl border border-cyan-400/40 shadow-2xl p-6 md:p-10">

        {/* === Header === */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text mb-4 leading-tight">
            {promo.title}
          </h1>

          {promo.subtitle && (
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-3">
              {promo.subtitle}
            </p>
          )}

          {/* ✅ วันที่อัปเดตล่าสุด */}
          <p className="text-sm text-gray-400">
            อัปเดตล่าสุด:{" "}
            <time dateTime={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()}>
              {new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </header>

        {/* === Main Image === */}
        {promo.imgs?.[0] && (
          <div className="w-full mb-8">
            <img
              src={promo.imgs[0]}
              alt={promo.title}
              className="w-full h-auto rounded-xl border border-cyan-400/30 shadow-lg hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        {/* === Description === */}
        <article
          className="prose prose-invert max-w-none text-gray-200 leading-relaxed prose-headings:text-cyan-300 prose-strong:text-pink-400"
          dangerouslySetInnerHTML={{ __html: promo.description }}
        />

        {/* === Promotion Info Cards === */}
        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            รายละเอียดโปรโมชั่น
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="bg-gradient-to-r from-cyan-800/50 to-cyan-600/30 p-4 rounded-lg border border-cyan-400/40">
              <span className="block text-cyan-300 font-semibold text-lg">อัตราโบนัส</span>
              <span className="text-white text-xl font-bold">{promo.bonusRate || "-"}</span>
            </div>
            <div className="bg-gradient-to-r from-purple-800/50 to-purple-600/30 p-4 rounded-lg border border-purple-400/40">
              <span className="block text-purple-300 font-semibold text-lg">โบนัสสูงสุด</span>
              <span className="text-white text-xl font-bold">{promo.maxBonus ?? "-"} บาท</span>
            </div>
            <div className="bg-gradient-to-r from-pink-800/50 to-pink-600/30 p-4 rounded-lg border border-pink-400/40">
              <span className="block text-pink-300 font-semibold text-lg">ฝากขั้นต่ำ</span>
              <span className="text-white text-xl font-bold">{promo.minDeposit ?? "-"} บาท</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-800/50 to-blue-600/30 p-4 rounded-lg border border-cyan-400/40">
              <span className="block text-cyan-300 font-semibold text-lg">เทิร์นโอเวอร์</span>
              <span className="text-white text-xl font-bold">{promo.turnover || "-"}</span>
            </div>
            <div className="bg-gradient-to-r from-purple-800/50 to-pink-600/30 p-4 rounded-lg border border-purple-400/40 col-span-full">
              <span className="block text-purple-300 font-semibold text-lg mb-1">หมวดหมู่</span>
              <span className="text-white text-lg font-bold">{promo.category?.join(", ") || "-"}</span>
            </div>
          </div>
        </section>

        {/* === Keyword Section === */}
        {promo.keywords && promo.keywords.length > 0 && (
          <section className="mt-12">
            <h3 className="text-center text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              คีย์เวิร์ดที่เกี่ยวข้อง
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {promo.keywords.map((kw) => (
                <span
                  key={kw}
                  className="bg-black/50 border border-cyan-400/30 text-cyan-200 px-3 py-1 rounded-full hover:bg-cyan-600/30 transition-colors"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* === CTA Button === */}
        <div className="text-center mt-16 mb-32">
          <a
            href={promo.web == "f168" ? F168lINK : MK8LINK}
            target="_blank" rel="noopener noreferrer"
            className="inline-block text-lg font-bold px-8 py-3 rounded-xl
                       bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                       hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500
                       transition-all duration-300 shadow-lg hover:scale-105"
          >
            📘 ข้อมูลเพิ่มเติม
          </a>
        </div>
      </div>
    </main>
  );
}

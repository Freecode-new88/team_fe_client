import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { promotionList } from "@/promotions/list";
import { F168lINK, MK8LINK } from "@/config/site";
import Link from "next/link";

const baseUrl = "https://thaideal.co/";

export async function generateStaticParams() {
  return promotionList.map((promo) => ({ path: promo.path }));
}

// ✅ SEO metadata + canonical
export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string }>;
}): Promise<Metadata> {
  const { path } = await params;
  const promo = promotionList.find((p) => p.path === path);
  if (!promo) return { title: "ไม่พบโปรโมชั่น | Thaideal" };

  const canonical = `${baseUrl}promotion-info/${promo.path}/`;

  return {
    title: `${promo.title} | โปรโมชั่น ${promo.category?.[0] || ""} ${promo.web?.toUpperCase()}`,
    description: promo.subtitle,
    keywords: promo.keywords.join(", "),
    openGraph: {
      title: promo.title,
      description: promo.subtitle,
      url: canonical,
      images: promo.imgs,
    },
    alternates: { canonical },
  };
}

export default async function PromotionInfoPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const promo = promotionList.find((p) => p.path === path);
  if (!promo) notFound();

  return (
    <main
      className="min-h-screen bg-[url('/images/game.jpg')] bg-cover bg-center bg-no-repeat py-10 px-4 md:px-8 lg:px-16 text-white"
      itemScope
      itemType="https://schema.org/Promotion"
    >
      <meta itemProp="url" content={`${baseUrl}promotion-info/${promo.path}/`} />
      <meta itemProp="name" content={promo.title} />
      <meta itemProp="description" content={promo.subtitle} />

      <article
        className="max-w-5xl mx-auto bg-black/70 backdrop-blur-sm rounded-2xl border border-cyan-400/40 shadow-xl p-6 md:p-10"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <nav
          aria-label="breadcrumb"
          className="text-[13px] sm:text-sm font-medium text-gray-300 mb-5"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
            {/* 🔹 หน้าแรก */}
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
            {/* 🔹 หน้ารายละเอียดโปรโมชั่น */}
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              aria-current="page"
              className="text-white drop-shadow-sm"
            >
              <span itemProp="name">{promo.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
        {/* === Header === */}
        <header className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-3"
            itemProp="name"
          >
            {promo.title}
          </h1>
          {promo.subtitle && (
            <p
              className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
              itemProp="description"
            >
              {promo.subtitle}
            </p>
          )}
          <p className="text-sm text-gray-400 mt-2">
            อัปเดตล่าสุด:
            <time
              dateTime={new Date().toISOString()}
              itemProp="priceValidUntil"
            >
              {" "}
              {new Date().toLocaleDateString("th-TH", {
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
              alt={`โปรโมชั่น ${promo.title}`}
              width={1200}
              height={675}
              decoding="async"
              loading="eager"
              className="w-full h-auto rounded-xl border border-cyan-400/30 shadow-lg object-cover"
            />
          </div>
        )}

        {/* === Description === */}
        <section
          className="prose prose-invert max-w-none text-gray-200 leading-relaxed prose-headings:text-cyan-300 prose-strong:text-pink-400"
          dangerouslySetInnerHTML={{ __html: promo.description }}
        />

        {/* === Promotion Info === */}
        <section
          className="mt-10"
          aria-label="รายละเอียดโปรโมชั่น"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <h2 className="text-center text-2xl font-bold mb-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            รายละเอียดโปรโมชั่น
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-base">
            {[
              ["อัตราโบนัส", promo.bonusRate, "cyan"],
              ["โบนัสสูงสุด", promo.maxBonus ? `${promo.maxBonus} บาท` : "-", "purple"],
              ["ฝากขั้นต่ำ", promo.minDeposit ? `${promo.minDeposit} บาท` : "-", "pink"],
              ["เทิร์นโอเวอร์", promo.turnover || "-", "cyan"],
            ].map(([label, value, color]) => (
              <div
                key={label}
                className={`bg-gradient-to-r from-${color}-800/40 to-${color}-600/20 p-4 rounded-xl border border-${color}-400/40`}
              >
                <span className={`block text-${color}-300 font-semibold`}>{label}</span>
                <strong className="text-white text-xl">{value}</strong>
              </div>
            ))}

            <div className="bg-gradient-to-r from-purple-800/40 to-pink-600/20 p-4 rounded-xl border border-purple-400/40 col-span-full">
              <span className="block text-purple-300 font-semibold mb-1">หมวดหมู่</span>
              <strong className="text-white">{promo.category?.join(", ") || "-"}</strong>
            </div>
          </div>
        </section>

        {/* === Keywords === */}
        {promo.keywords?.length > 0 && (
          <section
            className="mt-10 text-center"
            aria-label="คีย์เวิร์ดที่เกี่ยวข้อง"
          >
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              คีย์เวิร์ดที่เกี่ยวข้อง
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {promo.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full bg-black/40 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-600/30 transition"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* === CTA Button === */}
        <section className="text-center mt-12">
          <a
            href={promo.web === "f168" ? F168lINK : MK8LINK}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="ไปยังเว็บไซต์สำหรับรับโปรโมชั่นเพิ่มเติม"
            className="inline-block text-lg font-bold px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:scale-105"
          >
            📘 ข้อมูลเพิ่มเติม
          </a>
        </section>
      </article>
    </main>
  );
}

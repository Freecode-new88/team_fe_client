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
  if (!promo) {
    return {
      title: "ไม่พบโปรโมชั่น | Thaideal",
      description: "ไม่พบหน้าโปรโมชั่นที่คุณค้นหา กลับไปดูโปรโมชันอื่น ๆ ของ Thaideal",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `${baseUrl}promotion-info/${promo.path}/`;

  return {
    title: { absolute: promo.title },
    description: promo.subtitle,
    keywords: promo.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "th_TH",
      siteName: "Thaideal",
      title: promo.title,
      description: promo.subtitle,
      url: canonical,
      images: promo.imgs.map((url) => ({
        url,
        width: 1200,
        height: 630,
        alt: `${promo.title} — โปรโมชั่น ${promo.web?.toUpperCase()} จาก Thaideal`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      site: "@thaidealt",
      creator: "@thaidealt",
      title: promo.title,
      description: promo.subtitle,
      images: promo.imgs,
    },
    robots: { index: true, follow: true },
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

  const canonical = `${baseUrl}promotion-info/${promo.path}/`;
  const offerSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        url: canonical,
        headline: promo.title,
        description: promo.subtitle,
        image: promo.imgs,
        keywords: promo.keywords?.join(", "),
        inLanguage: "th-TH",
        datePublished: "2023-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        author: {
          "@type": "Organization",
          name: "Thaideal",
          url: "https://thaideal.co/",
        },
        publisher: {
          "@type": "Organization",
          name: "Thaideal",
          url: "https://thaideal.co/",
          logo: {
            "@type": "ImageObject",
            url: "https://thaideal.co/icons/thaibet-icon-512.png",
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        about: {
          "@type": "Organization",
          name: promo.web?.toUpperCase() || "Thaideal",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "หน้าหลัก",
            item: "https://thaideal.co/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: promo.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <main
      className="relative min-h-screen py-10 px-4 md:px-8 lg:px-16 text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      {/* ✅ BG image — solid color first paint, image lazy-decoded */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#0b0b14]"
        style={{
          backgroundImage: "url('/images/game.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <article
        className="max-w-5xl mx-auto bg-black/70 backdrop-blur-sm rounded-2xl border border-cyan-400/40 shadow-xl p-6 md:p-10"
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
              <meta itemProp="position" content="2" />
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
            <time dateTime={new Date().toISOString()}>
              {" "}
              {new Date().toLocaleDateString("th-TH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </header>

        {/* === Main Image (LCP) === */}
        {promo.imgs?.[0] && (
          <div className="w-full mb-8">
            <img
              src={promo.imgs[0]}
              alt={`โปรโมชั่น ${promo.title}`}
              width={1200}
              height={675}
              decoding="async"
              loading="eager"
              // @ts-expect-error fetchpriority is valid HTML attr
              fetchpriority="high"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
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
        >
          <h2 className="text-center text-2xl font-bold mb-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            รายละเอียดโปรโมชั่น
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-base">
            {([
              {
                label: "อัตราโบนัส",
                value: promo.bonusRate,
                box: "bg-gradient-to-r from-cyan-800/40 to-cyan-600/20 border-cyan-400/40",
                text: "text-cyan-300",
              },
              {
                label: "โบนัสสูงสุด",
                value: promo.maxBonus ? `${promo.maxBonus} บาท` : "-",
                box: "bg-gradient-to-r from-purple-800/40 to-purple-600/20 border-purple-400/40",
                text: "text-purple-300",
              },
              {
                label: "ฝากขั้นต่ำ",
                value: promo.minDeposit ? `${promo.minDeposit} บาท` : "-",
                box: "bg-gradient-to-r from-pink-800/40 to-pink-600/20 border-pink-400/40",
                text: "text-pink-300",
              },
              {
                label: "เทิร์นโอเวอร์",
                value: promo.turnover || "-",
                box: "bg-gradient-to-r from-cyan-800/40 to-cyan-600/20 border-cyan-400/40",
                text: "text-cyan-300",
              },
            ]).map(({ label, value, box, text }) => (
              <div key={label} className={`${box} p-4 rounded-xl border`}>
                <span className={`block ${text} font-semibold`}>{label}</span>
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
                  className="px-3 py-1 rounded-full bg-black/40 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-600/30 transition-colors duration-150"
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
            className="inline-block text-lg font-bold px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-lg transition-transform duration-200 will-change-transform hover:scale-[1.03]"
          >
            📘 ข้อมูลเพิ่มเติม
          </a>
        </section>
      </article>
    </main>
  );
}

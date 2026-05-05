import type { MetadataRoute } from "next";
import { game_list } from "@/promotions/game_list";
import { promotionList } from "@/promotions/list";

export const dynamic = "force-static";

const baseUrl = "https://thaideal.co";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
const now = new Date();

const toUrl = (path: string) => new URL(path, baseUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: { path: string; changeFrequency: Freq; priority: number }[] = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/about-us/", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact-us/", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy/", changeFrequency: "monthly", priority: 0.5 },
  ];

  // ✅ Dynamically generated from promotionList — never out of sync
  const promoRoutes = promotionList.map((p) => ({
    path: `/promotion-info/${p.path}/`,
    changeFrequency: "weekly" as Freq,
    priority: 0.8,
  }));

  const gameRoutes = game_list.map((g) => ({
    path: `/slots/${g.path}/`,
    changeFrequency: "weekly" as Freq,
    priority: 0.7,
  }));

  return [...baseRoutes, ...promoRoutes, ...gameRoutes].map(
    ({ path, changeFrequency, priority }) => ({
      url: toUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })
  );
}

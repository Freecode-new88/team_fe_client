import type { MetadataRoute } from "next";
import { game_list } from "@/promotions/game_list"; // adjust import path if needed

export const dynamic = "force-static";

const baseUrl = "https://thaideal.co";

const promotionPaths = [
  "refer-friends-triple-bonus-1-3-commission",
  "daily-profit-bonus-slots-fishing-card-games",
  "first-deposit-bonus-188",
  "lucky-wheel-spin-and-win",
  "monthly-random-giveaways-bonus",
  "register-get-28-8-free-credit",
  "usdt-deposit-bonus-2-percent",
  "lucky-slot-last-digits-bonus",
  "first-deposit-188-bonus",
  "daily-turnover-bonus-15888",
  "usdt-deposit-bonus-2percent",
  "daily-deposit-bonus-10percent",
];

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
const now = new Date();

// helper
const toUrl = (path: string) => new URL(path, baseUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: { path: string; changeFrequency: Freq; priority: number }[] = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/about-us/", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact-us/", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy/", changeFrequency: "monthly", priority: 0.5 },
  ];

  const promoRoutes = promotionPaths.map((p) => ({
    path: `/promotion-info/${p}/`,
    changeFrequency: "weekly" as Freq,
    priority: 0.8,
  }));

  // ✅ add all game_list paths to sitemap
  const gameRoutes = game_list.map((g) => ({
    path: `/slots/${g.path}/`,
    changeFrequency: "weekly" as Freq,
    priority: 0.8,
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

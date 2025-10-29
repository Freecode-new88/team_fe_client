import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ สำหรับ static export

const baseUrl = "https://thaideal.co";

// รวม path โปรโมชันทั้งหมด
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // หน้า static หลัก
  const baseRoutes = [
    { path: baseUrl, changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about-us/", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/contact-us/", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy/", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  // โปรโมชันทั้งหมด
  const promoRoutes = promotionPaths.map((p) => ({
    path: `/promotion-info/${p}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // รวมทั้งหมด
  const routes = [...baseRoutes, ...promoRoutes];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

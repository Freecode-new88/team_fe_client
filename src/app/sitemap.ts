import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // ✅ จำเป็นสำหรับ static export

const baseUrl = 'https://thaibetz.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: '/',
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      path: '/about-us/',
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      path: '/contact-us/',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      path: '/privacy/',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(), // ✅ MetadataRoute.Sitemap รองรับ Date object ได้ตรง ๆ
    changeFrequency,
    priority,
  }));
}

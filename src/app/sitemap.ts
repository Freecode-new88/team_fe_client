import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // สำคัญสำหรับ output: 'export'

const baseUrl = 'https://thaibetz.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // ถ้ามีหน้าเพิ่ม ให้ใส่ในอาร์เรย์นี้ หรือ generate จากข้อมูลของคุณ
  const staticRoutes = [
    '',
    '/about-us/',
    '/contact-us/',
    '/privacy/',
  ];

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: path === '' ? 1 : 0.7,
  }));
}

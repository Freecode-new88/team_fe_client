import { NextResponse } from 'next/server';

export const dynamic = 'force-static'; // required for output: 'export'

const ROBOTS = `
User-agent: *
Allow: /

Sitemap: https://thaideal.co/sitemap.xml

# --- Optional: AI crawlers (remove or switch to Disallow as you wish) ---
User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /
`.trim();

export async function GET() {
  return new NextResponse(ROBOTS, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}

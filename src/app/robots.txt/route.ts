import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const ROBOTS = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# --- AI crawlers (remove or switch to Disallow to opt out) ---
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

Host: https://thaideal.co
Sitemap: https://thaideal.co/sitemap.xml
`;

export async function GET() {
  return new NextResponse(ROBOTS, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}

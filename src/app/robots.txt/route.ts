import { NextResponse } from 'next/server';

export const dynamic = 'force-static'; // สำคัญสำหรับ output: 'export'

export async function GET() {
  const body = `
User-Agent: *
Content-signal: search=yes,ai-input=yes,ai-train=yes
Allow: /
`.trim();

  const res = new NextResponse(body);
  res.headers.set('Content-Type', 'text/plain; charset=utf-8');
  return res;
}

'use client';
import Link from "next/link";
import clsx from "clsx";
import NextImage from "next/image";

export type MobileBottomBarProps = {
  left: { label: string; href: string };
  right: { label: string; href: string };
  className?: string;
};

export default function MobileBottomBar({ left, right, className }: MobileBottomBarProps) {
  // ✅ Track outbound link clicks (GA4 safe event)
  const handleRegisterClick = (brand: string, href: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "outbound_r_click", {
        brand,
        destination: href,
      });
    }
  };

  return (
    <div
      className={clsx(
        "md:hidden fixed inset-x-0 bottom-0 z-50",
        "bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500",
        "shadow-[0_-6px_20px_rgba(0,0,0,.25)]",
        "px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0)+10px)]",
        className
      )}
      role="contentinfo"
      aria-label="แถบลิงก์ด่วนสำหรับอุปกรณ์มือถือ"
    >
      <div className="mx-auto max-w-md">
        <div className="flex items-stretch gap-2 text-white text-sm font-semibold">
          {/* Left button: F168 */}
          <Link
            href={left.href}
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
            aria-label="สมัครบัญชี F168 อย่างเป็นทางการผ่าน Thaideal"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/0 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm transition-colors px-3 py-2 ring-1 ring-white/30"
            onClick={() => handleRegisterClick("F168", left.href)}
          >
            <NextImage
              src="/here/here.gif"
              alt="โลโก้ F168"
              aria-hidden
              width={128}
              height={45}
              className="block w-10 h-auto rounded-xl object-contain"
              draggable="false"
            />
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" />
            </svg>
            <span className="opacity-90">{left.label}</span>
          </Link>

          {/* Right button: MK8 */}
          <Link
            href={right.href}
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
            aria-label="สมัครบัญชี MK8 อย่างเป็นทางการผ่าน Thaideal"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/0 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm transition-colors px-3 py-2 ring-1 ring-white/30"
            onClick={() => handleRegisterClick("MK8", right.href)}
          >
            <NextImage
              src="/here/here.gif"
              alt="โลโก้ MK8"
              aria-hidden
              width={128}
              height={45}
              className="block w-10 h-auto rounded-xl object-contain"
              draggable="false"
            />
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M3 7l4 4 5-7 5 7 4-4v10H3V7z" />
            </svg>
            <span className="opacity-90">{right.label}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

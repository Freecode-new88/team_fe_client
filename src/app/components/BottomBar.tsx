'use client';
import Link from "next/link";
import clsx from "clsx";
import NextImage from "next/image";

export type MobileBottomBarProps = {
  left: { label: string; href: string };
  right: { label: string; href: string };
  className?: string;
};

/**
 * MobileBottomBar — fixed bottom bar (mobile only) with gradient bg + two CTA buttons
 * Tailwind required. Drop into your layout and add bottom padding to main content to avoid overlap.
 *
 * Usage:
 * <MobileBottomBar
 *   left={{ label: "สมัคร F168", href: "/register-f168" }}
 *   right={{ label: "สมัคร MK8", href: "/register-mk8" }}
 * />
 *
 * Tip: Add padding-bottom to your page container: `pb-20 md:pb-0` so content is not hidden behind the bar.
 */
export default function MobileBottomBar({ left, right, className }: MobileBottomBarProps) {
  const handleRegisterClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'register_m', {
        location: 'tab_mk8',
        link_text: 'สมัคร MK8',
        link_url: right.href,
      });
    }
  };

  const handleRegisterClickF168 = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'register_f', {
        location: 'tab_f168',
        link_text: 'สมัคร F168',
        link_url: left.href,
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
      aria-label="Bottom action bar"
    >
      <div className="mx-auto max-w-md">
        <div className="flex items-stretch gap-2 text-white text-sm font-semibold">
          {/* Left button */}
          <Link
            href={left.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/0 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm transition-colors px-3 py-2 ring-1 ring-white/30"
            onClick={handleRegisterClickF168}
          >
            <NextImage
              src="/here/here.gif"
               alt="ลงทะเบียนรับเครดิตฟรี F168"
              aria-hidden
              width={128}
              height={45}
              className="block w-10 h-auto rounded-xl object-contain"
              draggable="false"
            />
            {/* icon: lightning */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" />
            </svg>
            <span className="opacity-90">{left.label}</span>
          </Link>

          {/* Right button */}
          <Link
            href={right.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/0 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm transition-colors px-3 py-2 ring-1 ring-white/30"
            onClick={handleRegisterClick}
          >
            <NextImage
              src="/here/here.gif"
              alt="ลงทะเบียนรับเครดิตฟรี MK8"
              aria-hidden
              width={128}
              height={45}
              className="block w-10 h-auto rounded-xl object-contain"
              draggable="false"
            />
            {/* icon: crown */}
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

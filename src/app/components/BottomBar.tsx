'use client';
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export type MobileBottomBarProps = {
  left: { label: string; href: string };
  right: { label: string; href: string };
  className?: string;
};

export default function MobileBottomBar({ left, right, className }: MobileBottomBarProps) {
  // ✅ track click event safely (lazy check)
  const handleClick = (brand: string, href: string) => {
    const win = window as any;
    if (win?.gtag) {
      win.gtag("event", "outbound_r_click", { brand, destination: href });
    }
  };

  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500",
        "shadow-[0_-3px_8px_rgba(0,0,0,0.25)] backdrop-blur-sm",
        "px-2 sm:px-3 py-[6px]",
        "pb-[calc(env(safe-area-inset-bottom,0)+4px)]",
        "will-change-transform transition-none", 
        className
      )}
    >
      <div className="mx-auto max-w-md sm:max-w-lg">
        <div className="flex items-center gap-1 sm:gap-2 text-white text-[10px] sm:text-xs font-semibold leading-none select-none">
          {/* LEFT BUTTON */}
          <Link
            href={left.href}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            aria-label={`สมัครบัญชี ${left.label} อย่างเป็นทางการผ่าน Thaideal`}
            className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg bg-transparent hover:bg-white/10 active:bg-white/15 transition-colors px-2 sm:px-3 py-[5px] ring-1 ring-white/20"
            onClick={() => handleClick("F168", left.href)}
          >
            <Image
              src="/here/here.gif"
              alt={`โลโก้ ${left.label}`}
              width={64}
              height={24}
              decoding="async"
              loading="lazy"
              priority={false}
              className="w-6 sm:w-7 h-auto rounded-md object-contain"
              draggable={false}
            />
            <svg
              viewBox="0 0 24 24"
              width={12}
              height={12}
              fill="currentColor"
              aria-hidden="true"
              className="opacity-90 shrink-0"
            >
              <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" />
            </svg>
            <span className="opacity-90 truncate">{left.label}</span>
          </Link>

          {/* RIGHT BUTTON */}
          <Link
            href={right.href}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            aria-label={`สมัครบัญชี ${right.label} อย่างเป็นทางการผ่าน Thaideal`}
            className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg bg-transparent hover:bg-white/10 active:bg-white/15 transition-colors px-2 sm:px-3 py-[5px] ring-1 ring-white/20"
            onClick={() => handleClick("MK8", right.href)}
          >
            <Image
              src="/here/here.gif"
              alt={`โลโก้ ${right.label}`}
              width={64}
              height={24}
              decoding="async"
              loading="lazy"
              priority={false}
              className="w-6 sm:w-7 h-auto rounded-md object-contain"
              draggable={false}
            />
            <svg
              viewBox="0 0 24 24"
              width={12}
              height={12}
              fill="currentColor"
              aria-hidden="true"
              className="opacity-90 shrink-0"
            >
              <path d="M3 7l4 4 5-7 5 7 4-4v10H3V7z" />
            </svg>
            <span className="opacity-90 truncate">{right.label}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

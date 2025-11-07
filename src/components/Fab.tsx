"use client";

import Image from "next/image";

export function Fab() {
  const avatarUrl = "/images/ryan-giggs.jpg";

  const handleFabClick = () => {
    const win = window as any;
    win?.gtag?.("event", "chat_ai", {
      event_category: "interaction",
      event_label: "Telegram Floating Button",
      location: "fab",
      destination: "telegram_bot",
      link_url: "https://t.me/f168th_bot",
      debug_mode: true,
    });
  };

  return (
    <div className="fixed bottom-20 sm:bottom-10 right-5 z-50 group">
      <a
        href="https://t.me/f168th_bot"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="เปิด Telegram กับบอท f168th_bot"
        onClick={handleFabClick}
        className="
          cursor-pointer
          grid h-16 w-16 place-items-center overflow-hidden rounded-full
          bg-black
          border-2 border-pink-500
          ring-2 ring-pink-400/60
          shadow-[0_0_20px_#ff00aa,0_0_40px_#ff00aa]
          hover:shadow-[0_0_25px_#ff00aa,0_0_60px_#ff00aa]
          transition-all duration-200 ease-in-out
          focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/60
          active:scale-95
        "
      >
        <Image
          src={avatarUrl}
          alt="เปิดแชตกับ f168 Telegram Bot"
          width={64}
          height={64}
          className="rounded-full object-cover"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  );
}

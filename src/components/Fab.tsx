export function Fab() {
  const avatarUrl = "/images/ryan-giggs.jpg";

  return (
    <div className="fixed bottom-18 sm:bottom-10 right-5 z-50 group">
      <a
        href="https://t.me/f168th_bot"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="เปิด Telegram: f168th_bot"
        className="
          cursor-pointer
          grid h-16 w-16 place-items-center overflow-hidden rounded-full
          bg-black
          border-2 border-pink-500
          ring-2 ring-pink-400/60
          shadow-[0_0_20px_#ff00aa,0_0_40px_#ff00aa]
          hover:shadow-[0_0_25px_#ff00aa,0_0_60px_#ff00aa]
          transition
          focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/60
          active:scale-95
        "
      >
        <img
          src={avatarUrl}
          alt="ryan giggs"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </a>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { F168lINK, MK8LINK } from "@/config/site";
import Link from "next/link";

export default function PlayButton() {
  const [randomLink, setRandomLink] = useState<string>("");

  // randomize only after hydration (client-side)
  useEffect(() => {
    const links = [F168lINK, MK8LINK];
    const chosen = links[Math.floor(Math.random() * links.length)];
    setRandomLink(chosen);
  }, []);

  if (!randomLink) return null; // prevent hydration mismatch

  return (
    <Link
      href={randomLink}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={() => {
        requestIdleCallback?.(() => {
          const win = window as any;
          if (win?.gtag) {
            win.gtag("event", "click_p_g", {
              location: "promo_grid",
              link_url: randomLink,
            });
          }
        });
      }}
      className="inline-block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-600 text-white font-semibold text-sm px-6 py-2 rounded-full hover:from-cyan-400 hover:via-purple-400 hover:to-pink-500 transition"
    >
      🎮 ทดลองเล่น
    </Link>
  );
}

"use client";

import { useState } from "react";
import { X, Send, Phone, Gift } from "lucide-react";
import Image from "next/image";

export function Fab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-6 z-50">
      <div className="relative flex items-center justify-center">

        {/* === Telegram (บนตรง) === */}
        <a
          href="https://t.me/f168th_bot"
          target="_blank"
          rel="noopener noreferrer"
          className={`
    absolute h-12 w-12 rounded-full
    overflow-hidden
    border-2
    transition-all duration-300
    ${open
              ? "-translate-y-24 opacity-100 scale-100"
              : "opacity-0 scale-0"}
  `}
          style={{
            borderColor: "#FC8B00",
            boxShadow: "0 0 12px #FC8B00, 0 0 28px #FC8B00"
          }}
        >
          <Image
            src="/images/ryan-giggs.jpg"
            alt="Telegram"
            fill
            className="object-cover"
            sizes="48px"
          />
        </a>

        {/* === Chat (45° ซ้ายบน) === */}
        <a
          href="https://t.me/th789b_bot"
          target="_blank"
          rel="noopener noreferrer"
          className={`
    absolute h-12 w-12 rounded-full
    overflow-hidden
    border-2
    shadow-lg transition-all duration-300
    ${open
              ? "-translate-x-16 -translate-y-16 opacity-100 scale-100"
              : "opacity-0 scale-0"}
  `}
          style={{
            borderColor: "#fc8f00",
            boxShadow: "0 0 12px #fc8f00, 0 0 24px #fc8f00"
          }}
        >
          <Image
            src="/images/luis-suarez.jpg"
            alt="Chat"
            fill
            className="object-cover"
            sizes="48px"
          />
        </a>

        {/* === Call (ซ้ายตรง) === */}
        <a
          href="https://t.me/jun88VIPbot"
          target="_blank"
          rel="noopener noreferrer"
          className={`
    absolute h-12 w-12 rounded-full
    overflow-hidden
    border-2
    shadow-lg transition-all duration-300
    ${open
              ? "-translate-x-24 opacity-100 scale-100"
              : "opacity-0 scale-0"}
  `}
          style={{
            borderColor: "#3CAAE1",
            boxShadow: "0 0 12px #3CAAE1"
          }}
        >
          <Image
            src="/images/manny-pacquiao.jpg"
            alt="Call"
            fill
            className="object-cover"
            sizes="48px"
          />
        </a>

        {/* === Main Button === */}
        <button
          onClick={() => setOpen(!open)}
          className="
    relative
    fixed bottom-7 right-0 z-50
    h-16 w-16 rounded-full
    overflow-hidden
    border-2 border-white
    shadow-[0_0_25px_#ff00aa,0_0_50px_#ff00aa]
    transition-all duration-300
    active:scale-95
  "
        >
          <Image
            src="/images/gift.jpg"
            alt="Gift"
            fill
            className="object-cover"
            sizes="64px"
          />

          {open && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <X size={28} className="text-white" />
            </div>
          )}
        </button>

      </div>
    </div>
  );
}

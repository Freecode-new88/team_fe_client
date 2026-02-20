'use client';
import { colors } from "@/utils/color";
import { safeLocalStorage } from "@/utils/storage";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { io, Socket } from "socket.io-client";

interface ChatMessage {
  _id?: string;
  user: string;
  msg: string;
  time: string;
  color: string;
  createdAt: string;
}

const BE_API = "https://chat.sexfotzen.com";
const SOCKET_PATH = "/socket.io";

/* ---------- ✅ Word filtering ---------- */
const words = [
  "otp", "เบอร์", "สนใจ", "ไอดี", "ไลน์",
  "line", "id", "รับเงิน", "ทัก", "สน", "ปล่อย", "zjoppp2536"
];
const forbiddenWords = [...words, "@", "อ ด", "ส น"]; // รวมพิเศษ

// normalize for word matching (no diacritics)
const normalize = (input: string): string =>
  input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// ✅ check if text contains *any* accent/diacritics
const hasDiacritics = (input: string): boolean => {
  const decomposed = input.normalize("NFD");
  return /[\u0300-\u036f]/.test(decomposed);
};

// your forbidden check
const hasForbidden = (text: string): boolean => {
  // treat "has diacritics" as auto-forbidden
  if (hasDiacritics(text)) return true;

  const normText = normalize(text);
  return words.some(w => normText.includes(normalize(w)));
};

/* ---------- ✅ Helpers ---------- */
const sortByObjectIdAsc = <T extends { _id?: string }>(arr: T[]) =>
  [...arr].sort((a, b) => (a._id ?? "").localeCompare(b._id ?? ""));

const formatTime = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleTimeString("th-TH", { hour12: false });
};

const extractUrls = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const found = text.match(urlRegex) || [];
  return [...new Set(found.map(s => s.trim()))];
};

/* ---------- ✅ Component ---------- */
const ChatRoomBox: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [tempName, setTempName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const userScrollUpRef = useRef(false); // ✅ flag ถ้า user scroll ขึ้น

  /* ---------- Load username ---------- */
  useEffect(() => {
    const saved = safeLocalStorage.get("chat_username");
    if (saved && !forbiddenWords.some(w => saved.toLowerCase().includes(w)))
      setUsername(saved);
  }, []);

  /* ---------- Scroll detect ---------- */
  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    const handleScroll = () => {
      const isBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight < 80;
      userScrollUpRef.current = !isBottom;
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Scroll only when bottom ---------- */
  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;
    if (!userScrollUpRef.current) {
      requestAnimationFrame(() =>
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
      );
    }
  }, [chat]);

  /* ---------- Send message ---------- */
  const handleSend = async () => {
    if (!message.trim() || !username) return;

    const text = message.trim();
    setMessage("");

    if (extractUrls(text).length > 0) return toast.warn("❌ ห้ามส่งลิงก์");
    if (hasForbidden(text)) return toast.warn("❌ ข้อความมีคำต้องห้าม");

    try {
      const res = await fetch(`${BE_API}/v1/chats`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          user: username,
          msg: text,
          color: colors[Math.floor(Math.random() * colors.length)],
        }),
      });
      if (!res.ok) throw new Error("send failed");
    } catch (err) {
      toast.error("❌ ส่งข้อความไม่สำเร็จ");
      setMessage(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const saveUsername = () => {
    const name = tempName.trim();
    if (!name) return toast.warn("กรุณาใส่ชื่อก่อน");
    if (forbiddenWords.some(w => name.toLowerCase().includes(w))) {
      toast.warn("ชื่อมีคำต้องห้าม");
      return;
    }
    safeLocalStorage.set("chat_username", name);
    setUsername(name);
  };

  /* ---------- Highlight mentions ---------- */
  const highlightMessage = (text: string) => {
    const parts = text.split(/(\s+)/);
    return parts.map((p, i) => {
      if (p.startsWith("@"))
        return <span key={i} className="text-cyan-400 font-semibold">{p}</span>;
      if (p.startsWith("#"))
        return <span key={i} className="text-fuchsia-400 font-semibold">{p}</span>;
      return p;
    });
  };

  /* ---------- Socket setup ---------- */
  useEffect(() => {
    const socket = io(BE_API, {
      path: SOCKET_PATH,
      transports: ["websocket"],
      withCredentials: true,
    });
    socketRef.current = socket;

    socket.on("connect", () => console.log("[socket] connected:", socket.id));
    socket.on("disconnect", () => console.log("[socket] disconnected"));

    socket.on("chat:new", (incoming: ChatMessage) => {
      if (!incoming?._id) return;
      setChat(prev => {
        if (prev.some(m => m._id === incoming._id)) return prev;
        const next = [...prev, incoming];
        if (next.length > 200) next.shift();
        return next;
      });
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  /* ---------- Load old messages ---------- */
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${BE_API}/v1/chats?limit=50`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          signal: ac.signal,
        });
        if (!res.ok) throw new Error("load fail");
        const data: ChatMessage[] = await res.json();
        const ordered = sortByObjectIdAsc(data).slice(-50);
        setChat(ordered);
        // ✅ Scroll bottom only first load
        requestAnimationFrame(() =>
          chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight })
        );
      } catch (err) {
        if ((err as any)?.name !== "AbortError")
          console.error("[chat] init fail:", err);
      }
    })();
    return () => ac.abort();
  }, []);

  /* ---------- UI ---------- */
  return (
    <section
      aria-label="ห้องพูดคุยสด แจกโค้ดและสนทนา"
      className="relative h-full flex flex-col"
    >
      <h2 className="text-lg font-bold mb-2 text-white leading-snug">
        💬 ห้องพูดคุยสด และ แจกโค้ด 🔥
      </h2>

      {/* Chat List */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto max-h-[430px] p-3 rounded-lg border border-fuchsia-400/40 bg-black/50 mb-3 scroll-smooth"
      >
        {chat.length === 0 ? (
          <p className="text-gray-400 text-center text-sm mt-12">
            ขณะนี้ยังไม่มีข้อความ 💬
          </p>
        ) : (
          chat.map((item, i) => (
            <div
              key={item._id ?? `temp-${i}`}
              className="flex items-start gap-2 mb-3"
            >
              <div
                className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
              >
                {item.user.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 break-words">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-fuchsia-300">
                    {item.user}
                    {username && item.user === username && " (Me)"}
                  </span>
                  <time className="text-gray-500 text-xs">
                    {formatTime(item.createdAt)}
                  </time>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">
                  {highlightMessage(item.msg)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      {username ? (
        <div className="flex items-end gap-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="พิมพ์ข้อความที่นี่... (Shift + Enter เพื่อขึ้นบรรทัดใหม่)"
            rows={2}
            className="flex-1 resize-none bg-black/40 border border-fuchsia-400/40 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            onClick={handleSend}
            className="min-w-[64px] h-[42px] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-rose-500 text-black font-bold rounded-lg hover:brightness-110 transition"
          >
            ส่ง
          </button>
        </div>
      ) : (
        <div className="mt-2 p-3 rounded-lg border border-fuchsia-400/30 bg-black/60">
          <p className="text-gray-300 mb-2 text-sm">
            ⚠️ กรุณาใส่ชื่อก่อนเริ่มแชต
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="เช่น Neung007"
              className="flex-1 bg-black/40 border border-fuchsia-400/40 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <button
              onClick={saveUsername}
              className="h-[42px] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-rose-500 text-black font-bold px-4 rounded-lg hover:brightness-110 transition"
            >
              ตกลง
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ChatRoomBox;

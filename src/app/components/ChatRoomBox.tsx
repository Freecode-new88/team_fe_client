import { colors } from "@/utils/color";
import React, { useState, useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface ChatMessage {
    _id?: string;   // ใช้ _id จาก BE
    user: string;
    msg: string;
    time: string;
    color: string;
    createdAt: string;
}

const BE_API = "https://chat.sexfotzen.com";
const SOCKET_PATH = "/socket.io";

const sortByObjectIdAsc = <T extends { _id?: string }>(arr: T[]) =>
    [...arr].sort((a, b) => (a._id ?? "").localeCompare(b._id ?? ""));

const formatTime = (iso?: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    const DD = String(d.getDate()).padStart(2, "0");
    const MM = String(d.getMonth() + 1).padStart(2, "0");
    const YYYY = d.getFullYear();
    return `${hh}:${mm}:${ss} ${DD}:${MM}:${YYYY}`;
};

const ChatRoomBox: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [tempName, setTempName] = useState("");
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState<ChatMessage[]>([]);
    const chatRef = useRef<HTMLDivElement>(null);

    // ===== Socket =====
    const socketRef = useRef<Socket | null>(null);

    // ✅ โหลด username จาก localStorage
    useEffect(() => {
        const saved = localStorage.getItem("chat_username");
        if (saved) setUsername(saved);
    }, []);

    // ✅ Scroll auto เฉพาะถ้าอยู่ท้าย
    useEffect(() => {
        const el = chatRef.current;
        if (!el) return;
        const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 200;
        if (isNearBottom) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, [chat]);

    const handleSend = async () => {
        if (!message.trim() || !username) return;

        const color = colors[Math.floor(Math.random() * colors.length)];
        //const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const tempId = `temp-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;


        const text = message;
        setMessage("");

        try {
            const res = await fetch(`${BE_API}/v1/chats`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    user: username,
                    msg: text,
                    color,
                }),
            });

            if (!res.ok) {
                throw new Error(`POST /v1/chats failed: ${res.status}`);
            }
            //setMessage("");
            // รอ BE broadcast "chat:new" พร้อม _id จริง แล้วค่อยแทนที่ข้อความ temp
        } catch (e) {
            console.error(e);
            setChat(prev => prev.filter(m => m._id !== tempId)); // ลบตัว temp ออก
            setMessage(text); // คืนข้อความกลับอินพุต (ทางเลือก)
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const saveUsername = () => {
        if (!tempName.trim()) return;
        localStorage.setItem("chat_username", tempName.trim());
        setUsername(tempName.trim());
    };

    // ✅ ฟังก์ชัน highlight mentions / hashtags
    const highlightMessage = (text: string) => {
        const parts = text.split(/(\s+)/);
        return parts.map((part, i) => {
            if (part.startsWith("@")) {
                return (
                    <span key={i} className="text-cyan-400 font-semibold">
                        {part}
                    </span>
                );
            } else if (part.startsWith("#")) {
                return (
                    <span key={i} className="text-fuchsia-400 font-semibold">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };


    useEffect(() => {
        const socket = io(BE_API, { path: SOCKET_PATH, transports: ["websocket"], withCredentials: true });
        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("[socket] connected:", { id: socket.id, url: BE_API, path: SOCKET_PATH });
        });

        socket.on("disconnect", (reason) => {
            console.warn("[socket] disconnected:", { reason });
        });

        socket.on("connect_error", (err) => {
            console.error("[socket] connect_error:", { message: err.message, name: err.name, data: (err as any)?.data });
        });

        socket.on("chat:new", (incoming: ChatMessage) => {
            // มี _id จริงจาก server เสมอ
            if (!incoming?._id) return;

            setChat((prev) => {
                // ถ้าเคยมีข้อความนี้ด้วย tempId (จับคู่จาก user+msg) ให้แทนที่
                const idxTemp = prev.findIndex(
                    (m) =>
                        m._id?.startsWith("temp-") &&
                        m.user === incoming.user &&
                        m.msg === incoming.msg
                );

                if (idxTemp !== -1) {
                    const updated = [...prev];
                    updated[idxTemp] = { ...incoming, color: colors[Math.floor(Math.random() * colors.length)] }; // แทนที่ด้วยของจริง (_id จริง)
                    return updated;
                }

                // ถ้าไม่มี temp ให้เช็กกันซ้ำด้วย _id
                const exists = prev.some((m) => m._id === incoming._id);
                if (exists) return prev;

                const updated = [...prev, incoming];
                if (updated.length > 200) updated.shift();
                return updated;
            });
        });

        /* socket.on("chat:history", (list: ChatMessage[]) => {
             setChat(list.slice(-200));
         });*/

        return () => {
            socket.removeAllListeners();
            socket.disconnect();
            socketRef.current = null;
        };
    }, []);

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
                if (!res.ok) throw new Error(`GET /v1/chats failed: ${res.status}`);

                const data: ChatMessage[] = await res.json();

                // 👇 เติมสีแบบสุ่มถ้าไม่มี color
                const withColor = data.map((m) => ({
                    ...m,
                    color: m.color || colors[Math.floor(Math.random() * colors.length)],
                }));

                // เรียงเก่าก่อนใหม่ แล้วตัดเหลือ 50
                const ordered = sortByObjectIdAsc(withColor).slice(-50);
                setChat(ordered);
            } catch (err) {
                if ((err as any)?.name !== "AbortError") {
                    console.error("[chat] load initial messages error:", err);
                }
            }
        })();

        return () => ac.abort();
    }, []);

    return (
        <div className="relative h-full flex flex-col">
            {/* Title */}
            <h2 className="text-lg font-bold mb-2 text-[#ffffff]">
                💬 ห้องพูดคุยสด และ แจกโค้ด 🔥
            </h2>

            {/* Chat Content */}
            <div
                ref={chatRef}
                className="flex-1 max-h-[430px] overflow-y-auto p-3 border border-fuchsia-400/40 rounded-lg bg-black/50 mb-3"
            >
                {chat.length === 0 ? (
                    <p className="text-gray-400 text-sm sm:text-base text-center mt-12">
                        ขณะนี้ยังไม่มีข้อความ 💬
                    </p>
                ) : (
                    chat.map((item, i) => (
                        <div key={item._id ?? `temp-${i}`} className="flex items-start gap-2 mb-3">
                            {/* Avatar */}
                            <div
                                className={`flex-shrink-0 w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}
                            >
                                {item.user.charAt(0).toUpperCase()}
                            </div>

                            {/* Message */}
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-semibold text-fuchsia-300">
                                        {item.user}
                                        {username && item.user === username && " (Me)"}
                                    </span>
                                    <span className="text-gray-500 text-xs"> {formatTime(item?.createdAt)}</span>
                                </div>
                                <div className="text-gray-200 text-sm sm:text-base break-words whitespace-pre-wrap leading-relaxed">
                                    {highlightMessage(item.msg)}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Input box */}
            {username ? (
                <div className="flex items-end gap-2">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="พิมพ์ข้อความที่นี่... (Shift + Enter เพื่อขึ้นบรรทัดใหม่, ใช้ @ชื่อ หรือ #แท็ก ได้)"
                        rows={2}
                        className="flex-1 resize-none bg-black/40 border border-fuchsia-400/40 text-white text-sm sm:text-base rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    />
                    <button
                        onClick={handleSend}
                        className="cursor-pointer h-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-rose-500 text-black font-bold px-4 rounded-lg hover:brightness-110 transition-all"
                    >
                        ส่ง
                    </button>
                </div>
            ) : (
                <div className="mt-2 p-3 rounded-lg border border-fuchsia-400/30 bg-black/60">
                    <p className="text-gray-300 mb-2 text-sm">
                        ⚠️ กรุณาใส่ชื่อก่อนที่จะพิมพ์ข้อความ
                    </p>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            placeholder="เช่น Neung007"
                            className="flex-1 bg-black/40 border border-fuchsia-400/40 text-white text-sm sm:text-base rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                        <button
                            onClick={saveUsername}
                            className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-rose-500 text-black font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                        >
                            ตกลง
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatRoomBox;

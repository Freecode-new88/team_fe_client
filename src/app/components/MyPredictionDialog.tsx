"use client";
import React, { useEffect, useState, Fragment } from "react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { claimBonus, getPredictions } from "@/lib/getUnplayedCurrentDate";
import { PredictionItem } from "@/model/Predictions.model";
import { toast } from "react-toastify";

export default function MyPredictionDialog({ open, onClose }: any) {
    const [items, setItems] = useState<PredictionItem[]>([]);
    const [username, setUsername] = useState("");

    const [page, setPage] = useState(1);
    const [limit] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [claimingId, setClaimingId] = useState<string | null>(null);

    const [searchUsername, setSearchUsername] = useState<
        string | undefined
    >(undefined);

    /* โหลดข้อมูลเฉพาะตอนกดปุ่มค้นหา */
    useEffect(() => {
        if (!open) return;
        if (!searchUsername) return;

        const load = async () => {
            const res = await getPredictions(
                page,
                limit,
                searchUsername
            );

            setItems(res.data);
            setTotalPages(res.totalPages);
        };

        load();
    }, [open, page, searchUsername]);

    /* เมื่อแก้ไขช่อง username → ล้างผลลัพธ์ทันที */
    useEffect(() => {
        if (!username.trim()) {
            setItems([]);
            setTotalPages(1);
            setPage(1);
        }
    }, [username]);

    /* กดค้นหา */
    const handleSearch = () => {
        if (!username.trim()) return;
        setPage(1);
        setSearchUsername(username.trim());
    };

    return (
        <Transition appear show={open} as={Fragment} afterLeave={() => {
            setUsername("");
            setItems([]);
            setTotalPages(1);
            setPage(1);
            setSearchUsername(undefined);
        }}>
            <Dialog onClose={onClose} className="relative z-50">

                {/* Background Overlay */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                {/* Dialog Container */}
                <div className="fixed inset-0 flex items-center justify-center p-2">

                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="relative bg-zinc-900 text-white p-3 rounded-xl w-full max-w-2xl border border-fuchsia-500/40 shadow-xl">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 p-2 rounded-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                            >
                                ✕
                            </button>

                            {/* Title */}
                            <DialogTitle className="text-lg md:text-xl font-bold mb-4">
                                📋 ประวัติการทายผลของฉัน
                            </DialogTitle>

                            {/* Username Input + Search Button */}
                            <div className="flex items-center gap-3 mb-4">
                                <input
                                    type="text"
                                    placeholder="กรอกชื่อผู้ใช้"
                                    className="flex-1 px-3 py-2 rounded bg-white text-black text-sm cursor-text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <button
                                    onClick={handleSearch}
                                    disabled={!username.trim()}
                                    className={`px-4 py-2 rounded text-white font-semibold text-sm cursor-pointer
                                        ${username.trim()
                                            ? "bg-fuchsia-700 hover:bg-fuchsia-800"
                                            : "bg-zinc-600 cursor-not-allowed"
                                        }`}
                                >
                                    ค้นหา
                                </button>
                            </div>

                            {/* Results List */}
                            <div className="max-h-[350px] overflow-y-auto overflow-x-hidden space-y-3 pr-1">
                                {!searchUsername ? (
                                    <p className="text-center text-gray-400 py-10">
                                        🔍 กรุณากรอกชื่อผู้ใช้และกดค้นหา
                                    </p>
                                ) : items.length === 0 ? (
                                    <p className="text-center text-gray-400 py-10">
                                        ไม่พบข้อมูลการทายผลค่ะ 📝
                                    </p>
                                ) : (
                                    items.map((p) => (
                                        <div
                                            key={p._id}
                                            className="bg-zinc-800 p-3 rounded-lg shadow flex justify-between"
                                        >
                                            {/* LEFT */}
                                            <div>
                                                <div className="font-semibold text-sm md:text-base">
                                                    {p.matchId.homeTeam.name} vs{" "}
                                                    {p.matchId.awayTeam.name}
                                                </div>

                                                <div className="text-xs text-gray-300">
                                                    ทายผล: {p.predicted.home} -{" "}
                                                    {p.predicted.away}
                                                </div>

                                                <div className="text-xs text-gray-300">
                                                    ผลจริง:{" "}
                                                    {p.matchId.goals.home !== null
                                                        ? `${p.matchId.goals.home} - ${p.matchId.goals.away}`
                                                        : "-"}
                                                </div>

                                                <div className="text-xs">
                                                    สถานะ:{" "}
                                                    <span
                                                        className={`font-bold ${p.result === "correct"
                                                            ? "text-green-400"
                                                            : p.result === "wrong"
                                                                ? "text-red-400"
                                                                : "text-yellow-300"
                                                            }`}
                                                    >
                                                        {p.result === "correct"
                                                            ? "ทายถูก"
                                                            : p.result === "wrong"
                                                                ? "ทายผิด"
                                                                : "รอผล"}
                                                    </span>
                                                </div>

                                                {/* Claim Info */}
                                                <div className="text-xs mt-1">
                                                    รับรางวัล:{" "}
                                                    <span
                                                        className={`font-bold ${p.claim
                                                            ? "text-green-400"
                                                            : "text-gray-400"
                                                            }`}
                                                    >
                                                        {p.claim
                                                            ? "รับแล้ว"
                                                            : "ยังไม่ได้รับ"}
                                                    </span>
                                                </div>

                                                {p.claim && p.luckyCode && (
                                                    <div className="text-xs mt-1 text-fuchsia-300 font-semibold flex items-center flex-wrap gap-2">
                                                        🎁 โค้ดรางวัล:
                                                        <span className="font-bold break-all">{p.luckyCode}</span>

                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(p.luckyCode ?? "");
                                                                toast.success("📋 คัดลอกโค้ดแล้ว!");
                                                            }}
                                                            className="px-3 py-1 bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded 
                                                                 text-[11px] sm:text-xs cursor-pointer active:scale-95 transition"
                                                        >
                                                            คัดลอก
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            {/* RIGHT */}
                                            <div className="flex flex-col items-end text-right gap-2">
                                                <div className="text-xs text-gray-400">
                                                    <strong>{p.site}</strong> -{" "}
                                                    {new Date(
                                                        p.createdAt
                                                    ).toLocaleString("th-TH")}
                                                </div>

                                                {/* Claim Button */}
                                                {p.result === "correct" && !p.claim && (
                                                    <button
                                                        onClick={async () => {
                                                            try {
                                                                setClaimingId(p._id); // start loading

                                                                const res = await claimBonus({
                                                                    username: searchUsername!,   // ใช้ username ที่ค้นหาอยู่
                                                                    predictionId: p._id
                                                                });
                                                                setItems((prev) =>
                                                                    prev.map((item) =>
                                                                        item._id === p._id
                                                                            ? {
                                                                                ...item,
                                                                                claim: true,
                                                                                luckyCode: res.luckyCode,
                                                                            }
                                                                            : item
                                                                    )
                                                                );
                                                                toast.success(
                                                                    `🎉 รับรางวัลสำเร็จ!\nโค้ดของคุณ: ${res.luckyCode}\nนำไปใส่ในช่องกรอกโค้ดได้เลยนะคะ 💗`,
                                                                    { autoClose: 3000 }
                                                                );
                                                            } catch (err: any) {
                                                                toast.error(
                                                                    err.response?.data?.error ||
                                                                    "เกิดข้อผิดพลาด กรุณาลองใหม่ค่ะ 💥",
                                                                    { autoClose: 3000 }
                                                                );
                                                            } finally {
                                                                setClaimingId(null);
                                                            }
                                                        }}
                                                        disabled={claimingId === p._id}
                                                        className={`px-3 py-1 text-xs rounded cursor-pointer text-white
                                                           ${claimingId === p._id
                                                                ? "bg-gray-500 cursor-not-allowed"
                                                                : "bg-green-600 hover:bg-green-700"
                                                            }
                                                          `}
                                                    >
                                                        {claimingId === p._id ? "กำลังรับ…" : "กดรับโค้ด"}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Pagination */}
                            {searchUsername && (
                                <div className="flex justify-between items-center mt-5 text-sm">
                                    <button
                                        disabled={page <= 1}
                                        onClick={() =>
                                            setPage((p) => p - 1)
                                        }
                                        className="px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 rounded disabled:opacity-40"
                                    >
                                        ก่อนหน้า
                                    </button>

                                    <span>
                                        หน้า {page} / {totalPages}
                                    </span>

                                    <button
                                        disabled={page >= totalPages}
                                        onClick={() =>
                                            setPage((p) => p + 1)
                                        }
                                        className="px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 rounded disabled:opacity-40"
                                    >
                                        ถัดไป
                                    </button>
                                </div>
                            )}
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}

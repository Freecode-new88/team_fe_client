"use client";
import React, { useState } from "react";
import PredictTermsDialog from "./PredictTermsDialog";
import { createPrediction } from "@/lib/getUnplayedCurrentDate";
import { toast } from "react-toastify";

interface PredictProps {
    open: boolean;
    onClose: () => void;
    match: any;
}

const headerImgs = [
    "/banner/1.webp",
    "/banner/2.webp",
    "/banner/3.webp",
    "/banner/4.webp",
];

export default function PredictScoreDialog({ open, onClose, match }: PredictProps) {
    if (!open || !match) return null;

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [selectedSite, setSelectedSite] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const randomHeaderImg = React.useMemo(
        () => headerImgs[Math.floor(Math.random() * headerImgs.length)],
        []
    );

    const handleScoreChange = (value: string, setter: (v: number) => void) => {
        let v = parseInt(value);
        if (isNaN(v) || v < 0) v = 0;
        setter(v);
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);

            const payload = {
                username,
                site: selectedSite as "MK8" | "F168",
                matchId: match._id,
                homeScore,
                awayScore,
            };

            const res = await createPrediction(payload);

            toast.success("ส่งผลสำเร็จค่ะ 🎉");
            onClose();

        } catch (err: any) {
            toast.error(err?.response?.data?.error || "ส่งผลไม่สำเร็จค่ะ");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

                {/* BACKDROP */}
                <div
                    className="absolute inset-0 z-0 cursor-pointer"
                    onClick={onClose}
                />

                {/* MODAL */}
                <div className="relative z-10 bg-zinc-900 text-white rounded-lg shadow-xl w-[90%] max-w-md border border-fuchsia-500/40 p-6 pointer-events-auto">

                    {/* CLOSE BTN */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-20 text-gray-300 hover:text-white text-xl font-bold cursor-pointer"
                    >
                        ✖
                    </button>

                    {/* HEADER IMG FULL EDGE */}
                    <div className="relative -m-6 mb-4 h-28 md:h-36 overflow-hidden pointer-events-none">
                        <img
                            src={randomHeaderImg}
                            alt="ทายผลการแข่งขัน"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="relative z-10 flex flex-col justify-center h-full px-6">
                            <h2 className="text-lg md:text-xl font-bold text-white leading-tight">
                                ⚽ ทายผลการแข่งขัน
                            </h2>
                        </div>
                    </div>

                    {/* TEAM + INPUT */}
                    <div className="flex items-center justify-between mb-4">
                        {/* HOME TEAM */}
                        <div className="flex flex-col items-center w-1/3">
                            <img
                                src={match.homeTeam.logo}
                                draggable={false}
                                className="w-10 h-10 md:w-14 md:h-14 mb-1"
                            />
                            <p className="hidden md:block text-sm text-center">
                                {match.homeTeam.name.slice(0, 12)}
                                {match.homeTeam.name.length > 12 ? "…" : ""}
                            </p>
                            <p className="md:hidden text-[10px] text-center text-gray-300">
                                {match.homeTeam.name.slice(0, 8)}
                                {match.homeTeam.name.length > 8 ? "…" : ""}
                            </p>
                        </div>

                        {/* SCORE INPUT */}
                        <div className="flex items-center gap-2 w-1/3 justify-center">
                            <input
                                type="text"
                                value={homeScore}
                                onChange={(e) => handleScoreChange(e.target.value, setHomeScore)}
                                onKeyDown={(e) => {
                                    if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
                                }}
                                className="w-10 h-10 text-center text-base md:w-14 md:h-12 md:text-lg rounded bg-zinc-800 border border-zinc-600"
                            />

                            <span className="font-bold text-lg md:text-xl">VS</span>

                            <input
                                type="text"
                                value={awayScore}
                                onChange={(e) => handleScoreChange(e.target.value, setAwayScore)}
                                onKeyDown={(e) => {
                                    if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
                                }}
                                className="w-10 h-10 text-center text-base md:w-14 md:h-12 md:text-lg rounded bg-zinc-800 border border-zinc-600"
                            />
                        </div>

                        {/* AWAY TEAM */}
                        <div className="flex flex-col items-center w-1/3">
                            <img
                                src={match.awayTeam.logo}
                                draggable={false}
                                className="w-10 h-10 md:w-14 md:h-14 mb-1"
                            />
                            <p className="hidden md:block text-sm text-center">
                                {match.awayTeam.name.slice(0, 12)}
                                {match.awayTeam.name.length > 12 ? "…" : ""}
                            </p>
                            <p className="md:hidden text-[10px] text-center text-gray-300">
                                {match.awayTeam.name.slice(0, 8)}
                                {match.awayTeam.name.length > 8 ? "…" : ""}
                            </p>
                        </div>
                    </div>

                    {/* USERNAME */}
                    <div className="mb-3">
                        <label className="text-sm">👤 ชื่อผู้ใช้</label>
                        <input
                            type="text"
                            placeholder="กรอก Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2"
                        />
                    </div>

                    {/* WEBSITE */}
                    <div className="mb-3">
                        <label className="text-sm">🌐 เลือกเว็บ</label>
                        <select
                            value={selectedSite}
                            onChange={(e) => setSelectedSite(e.target.value)}
                            className="mt-1 w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2"
                        >
                            <option value="">-- เลือกเว็บ --</option>
                            <option value="MK8">MK8</option>
                            <option value="F168">F168</option>
                        </select>
                    </div>

                    {/* TERMS CHECK */}
                    <div className="mt-2 flex items-start gap-2">
                        <input
                            id="acceptTerms"
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="mt-1"
                        />

                        <label htmlFor="acceptTerms" className="text-xs text-gray-300">
                            ฉันยอมรับเงื่อนไข และยืนยันว่าข้อมูลถูกต้อง
                            <button
                                type="button"
                                onClick={() => setShowTerms(true)}
                                className="text-fuchsia-400 underline ml-1 hover:text-fuchsia-300 cursor-pointer"
                            >
                                อ่านเงื่อนไข
                            </button>
                        </label>
                    </div>

                    {/* SUBMIT */}
                    <button
                        onClick={handleSubmit}
                        disabled={
                            loading ||
                            !acceptTerms ||
                            selectedSite === "" ||
                            username.trim() === ""
                        }
                        className={`w-full py-2 rounded mt-4 ${!loading && acceptTerms && selectedSite !== "" && username.trim() !== ""
                                ? "bg-fuchsia-600 hover:bg-fuchsia-700 text-white cursor-pointer"
                                : "bg-zinc-700 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                                กำลังส่ง...
                            </span>
                        ) : (
                            "✔ ส่งผลทาย"
                        )}
                    </button>
                </div>
            </div>

            {/* TERMS DIALOG */}
            <PredictTermsDialog
                open={showTerms}
                onClose={() => setShowTerms(false)}
            />
        </>
    );
}

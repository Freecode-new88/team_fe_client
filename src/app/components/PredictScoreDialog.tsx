"use client";
import React, { useState } from "react";

interface PredictProps {
    open: boolean;
    onClose: () => void;
    match: any;
}

export default function PredictScoreDialog({ open, onClose, match }: PredictProps) {
    if (!open || !match) return null;

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const handleScoreChange = (value: string, setter: (v: number) => void) => {
        let v = parseInt(value);
        if (isNaN(v) || v < 0) v = 0; // กันติดลบ / กัน NaN

        setter(v);
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            {/* BACKDROP */}
            <div
                className="absolute inset-0"
                onClick={onClose}
            ></div>

            {/* MODAL */}
            <div className="relative bg-zinc-900 text-white rounded-lg shadow-xl w-[90%] max-w-md border border-fuchsia-500/40 p-6 z-10">
               
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl font-bold cursor-pointer transition"
                >
                    ✖
                </button>

                <h2 className="text-center text-lg font-bold mb-4">
                    ⚽ ทายผลการแข่งขัน
                </h2>

                {/* Comming soon  */}
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="text-center">
                        <div className="text-5xl mb-3 animate-bounce">⏳</div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            ฟีเจอร์ทายผลกำลังจะมาเร็ว ๆ นี้นะคะ 💖
                        </h3>
                        <p className="text-sm text-gray-300">
                            รออีกแป๊บน้า ระบบกำลังเตรียมให้พร้อมสำหรับคุณค่ะ ✨
                        </p>
                    </div>
                </div>


                {/*
               
                <div className="flex items-center justify-between mb-4">

                  
                    <div className="flex flex-col items-center w-1/3">
                        <img
                            src={match.homeTeam.logo}
                            className="w-10 h-10 md:w-14 md:h-14 mb-1"
                        />

                        
                        <p className="hidden md:block text-sm text-center">
                            {match.homeTeam.name}
                        </p>

                       
                        <p className="md:hidden text-[10px] text-center text-gray-300">
                            {match.homeTeam.name.slice(0, 8)}
                            {match.homeTeam.name.length > 8 ? "…" : ""}
                        </p>
                    </div>

                   
                    <div className="flex items-center gap-2 w-1/3 justify-center">

                       
                        <input
                            type="text"
                            value={homeScore}
                            min={0}
                            onChange={(e) => handleScoreChange(e.target.value, setHomeScore)}
                            onKeyDown={(e) => {
                                if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
                            }}
                            className="
        w-10 h-10 text-center text-base
        md:w-14 md:h-12 md:text-lg
        rounded bg-zinc-800 border border-zinc-600
      "
                        />

                        <span className="font-bold text-lg md:text-xl">VS</span>

                        
                        <input
                            type="text"
                            value={awayScore}
                            min={0}
                            onChange={(e) => handleScoreChange(e.target.value, setAwayScore)}
                            onKeyDown={(e) => {
                                if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
                            }}
                            className="
        w-10 h-10 text-center text-base
        md:w-14 md:h-12 md:text-lg
        rounded bg-zinc-800 border border-zinc-600
      "
                        />
                    </div>

                   
                    <div className="flex flex-col items-center w-1/3">
                        <img
                            src={match.awayTeam.logo}
                            className="w-10 h-10 md:w-14 md:h-14 mb-1"
                        />

                       
                        <p className="hidden md:block text-sm text-center">
                            {match.awayTeam.name}
                        </p>

                        
                        <p className="md:hidden text-[10px] text-center text-gray-300">
                            {match.awayTeam.name.slice(0, 8)}
                            {match.awayTeam.name.length > 8 ? "…" : ""}
                        </p>
                    </div>
                </div>

              
                <div className="mb-3">
                    <label className="text-sm">👤 ชื่อผู้ใช้</label>
                    <input
                        type="text"
                        placeholder="กรอก Username"
                        className="mt-1 w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2"
                    />
                </div>

                
                <div className="mb-3">
                    <label className="text-sm">🌐 เลือกเว็บ</label>
                    <select
                        className="mt-1 w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2"
                    >
                        <option value="MK8">MK8</option>
                        <option value="F168">F168</option>
                    </select>
                </div>



                {/* SUBMIT 
                <button
                    onClick={onClose}
                    className="w-full py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded mt-4 cursor-pointer"
                >
                    ✔ ส่งผลทาย
                </button>
                */}
            </div>
        </div>
    );
}

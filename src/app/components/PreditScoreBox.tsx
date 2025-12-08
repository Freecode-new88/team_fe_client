'use client';
import { getUnplayedCurrentDate } from "@/lib/getUnplayedCurrentDate";
import React, { useState, useRef, useEffect } from "react";
import PredictScoreDialog from "./PredictScoreDialog";
import MyPredictionDialog from "./MyPredictionDialog";

export enum MatchStatus {
  TBD = "TBD",   // กำหนดวันยังไม่ชัดเจน
  NS = "NS",     // ยังไม่เริ่ม (Not Started)
  "1H" = "1H",   // ครึ่งแรก
  HT = "HT",     // พักครึ่ง
  "2H" = "2H",   // ครึ่งหลัง
  ET = "ET",     // ต่อเวลาพิเศษ
  BT = "BT",     // พักระหว่างต่อเวลา
  P = "P",       // ยิงจุดโทษ
  FT = "FT",     // จบเกม (Full Time)
  AET = "AET",   // จบเกมหลังต่อเวลา
  PEN = "PEN",   // จบเกมหลังดวลจุดโทษ
  SUSP = "SUSP", // เลื่อนแบบไม่มีกำหนด (Suspended)
  INT = "INT",   // หยุดระหว่างแข่ง (Interrupted)
  PST = "PST",   // เลื่อน (Postponed)
  CANC = "CANC", // ยกเลิก (Cancelled)
  ABD = "ABD",   // ยกเลิกเกมกลางคัน (Abandoned)
  WO = "WO",     // ชนะบาย (Walkover)
  LIVE = "LIVE"  // กำลังแข่ง (บางลีกใช้แทน 1H/2H)
}

export interface MatchData {
  _id: string;
  matchId: number;
  league: {
    id: number;
    name: string;
    season: number;
    flag: string | null;
    logo: string;
    country: string;
  };
  date: string;  // ISO String
  status: MatchStatus; // "NS" | "FT" | ...
  homeTeam: {
    id: number;
    name: string;
    logo: string;
  };
  awayTeam: {
    id: number;
    name: string;
    logo: string;
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    fulltime: {
      home: number | null;
      away: number | null;
    };
    halftime: {
      home: number | null;
      away: number | null;
    };
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function formatThai(dt: number) {
  const date = new Date(dt);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Bangkok",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("th-TH", options).format(date);
}

/* ---------- ✅ Component ---------- */
const PreditScoreBox: React.FC = () => {
  const [matches, setMatches] = useState<MatchData[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [openHistory, setOpenHistory] = useState(false);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await getUnplayedCurrentDate();
        setMatches(data?.matches ?? []);
      } catch (e) {
        console.error("error load matches:", e);
      } finally {
        setLoading(false);
      }
    };

    loadMatches();
  }, []);

  /* ---------- UI ---------- */

  return (
    <>
      <section
        aria-label="กิจกรรมทายผลบอล รับโบนัสฟรี 3 คู่ต่อวัน"
        className="relative h-full flex flex-col"
      >
        <h2 className="text-lg font-bold mb-2 text-white leading-snug">
          ⚽️ กิจกรรมทายผลบอล รับโบนัสฟรี 3 คู่ต่อวัน
        </h2>

        {/* Mach List */}
        <div
          className="flex-1 overflow-y-auto max-h-[430px] p-3 rounded-lg border border-fuchsia-400/40 bg-black/50 mb-3 scroll-smooth"
        >
          {matches.length === 0 ? (
            <p className="text-gray-400 text-center text-sm mt-12">
              ตอนนี้ยังไม่มีแมตช์เลยค่ะ รออีกนิดน้า~ ⚽️✨
            </p>
          ) : (
            matches
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((m, i) => {

                const showScore = ["1H", "HT", "2H", "LIVE", "FT", "AET", "PEN"].includes(m.status);
                const timeOrScore = showScore
                  ? `${m.goals?.home ?? "-"} : ${m.goals?.away ?? "-"}`
                  : new Date(m.date).toLocaleTimeString("th-TH", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                const matchDate = new Date(m.date).getTime();
                const now = Date.now();
                const isDisabled = m.status !== "NS" || matchDate < now;
                return (
                  <div
                    key={m._id ?? `temp-${i}`}
                    className="flex items-center justify-between bg-zinc-900/60 rounded-lg px-4 py-3 mb-2"
                  >
                    {/* LEFT: status */}
                    <div className="w-12 text-xs md:text-sm font-bold text-gray-300 flex items-center gap-1">
                      <span>{m.status}</span>
                      {["1H", "HT", "2H", "LIVE"].includes(m.status) && (
                        <span className="text-red-500 text-[10px] md:text-xs">🔴</span>
                      )}
                    </div>

                    {/* HOME TEAM */}
                    <div className="flex items-center gap-2 flex-1 justify-end">
                      {/* ชื่อทีม - desktop only */}
                      <span className="text-sm text-white text-right hidden md:inline">
                        {m.homeTeam.name}
                      </span>

                      {/* Logo - always show */}
                      <div className="w-6 h-6 rounded overflow-hidden flex items-center justify-center bg-gray-900">
                        <img src={m.homeTeam.logo} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* LEAGUE LOGO + TIME OR SCORE */}
                    <div className="w-14 flex flex-col items-center justify-center text-white">
                      {m.league.logo && (
                        <img
                          src={m.league.logo}
                          alt={m.league.name}
                          title={m.league.name}
                          className="w-4 h-4 mb-1"
                        />
                      )}
                      <span className="text-center font-semibold text-xs md:text-base">
                        {timeOrScore}
                      </span>
                    </div>

                    {/* AWAY TEAM */}
                    <div className="flex items-center gap-2 flex-1">
                      {/* Logo */}
                      <div className="w-6 h-6 rounded overflow-hidden flex items-center justify-center bg-gray-900">
                        <img
                          src={m.awayTeam.logo}
                          alt={m.awayTeam.name}
                          title={m.awayTeam.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Team name */}
                      <span className="text-sm text-white hidden md:inline">
                        {m.awayTeam.name}
                      </span>
                    </div>

                    {/* Predict Button */}
                    <button
                      disabled={isDisabled}
                      onClick={() => {
                        setSelectedMatch(m);
                        setDialogOpen(true);
                      }}
                      className={`ml-3 px-3 py-1 rounded text-white text-xs transition-all flex items-center gap-1
    ${!isDisabled
                          ? "bg-fuchsia-600 hover:bg-fuchsia-700 cursor-pointer"
                          : "bg-zinc-600 cursor-not-allowed opacity-50"
                        }
  `}
                    >
                      <img
                        src="https://file.781243555.com/emoji/fire.webp"
                        style={{ width: 16, height: 16 }}
                        alt=""
                      />
                      ทายผล
                    </button>
                  </div>
                );
              })
          )}
        </div>
        {/* check my  prediction */}
        <button
          onClick={() => setOpenHistory(true)}
          className="mt-2 w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-2 rounded text-sm font-semibold transition cursor-pointer"
        >
          📋 ตรวจสอบผลทายของฉัน
        </button>
      </section>
      <PredictScoreDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        match={selectedMatch}
      />
      <MyPredictionDialog
        open={openHistory}
        onClose={() => setOpenHistory(false)}
      />
    </>
  );
};

export default PreditScoreBox;

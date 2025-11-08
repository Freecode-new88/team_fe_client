"use client";
import { useEffect, useState, useRef } from "react";

export function CountdownTimer() {
    const [secondsLeft, setSecondsLeft] = useState(0);
    const timerRef = useRef<number | null>(null);

    const getSecondsToHourEnd = () => {
        const now = new Date();
        const next = new Date(now);
        next.setSeconds(0, 0);
        const m = now.getMinutes();
        const nextBlockMinute = Math.floor(m / 15) * 15 + 15; //15,30,45,60

        //Run Every 30 minutes
        if (nextBlockMinute > 60) {
            next.setHours(now.getHours() + 1, 0, 0, 0);
        } else {
            next.setMinutes(nextBlockMinute, 0, 0);
        }
        return Math.max(0, Math.floor((next.getTime() - now.getTime()) / 1000));
    };

    useEffect(() => {
        setSecondsLeft(getSecondsToHourEnd());
        timerRef.current = window.setInterval(() => {
            setSecondsLeft((s) => (s <= 1 ? getSecondsToHourEnd() : s - 1));
        }, 1000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, []);

    const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const ss = String(secondsLeft % 60).padStart(2, "0");
    return <strong>{mm}:{ss}</strong>;
}

'use client';
import { useEffect, useState } from 'react';

export default function LastUpdated() {
  const [s, setS] = useState('');

  useEffect(() => {
    setS(new Intl.DateTimeFormat('th-TH-u-ca-gregory', {
      dateStyle: 'long',
      timeStyle: 'short',
      hourCycle: 'h23',
      timeZone: 'Asia/Bangkok',
    }).format(new Date()));
  }, []);

  return (
    <h2 className="my-2 text-white/60">
      อัปเดตล่าสุด: {s}
    </h2>
  );
}

// app/components/LastUpdated.tsx   (อย่าใส่ "use client")
export default function LastUpdated() {
  const s = new Intl.DateTimeFormat('th-TH-u-ca-gregory', {
    dateStyle: 'long',
    timeStyle: 'short',
    hourCycle: 'h23',
    timeZone: 'Asia/Bangkok',
  }).format(new Date());

  return (
    <h2 className="my-2 text-white/60">
      อัปเดตล่าสุด: {s}
    </h2>
  );
}

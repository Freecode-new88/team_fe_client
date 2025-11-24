"use client";
import React from "react";

interface TermsDialogProps {
  open: boolean;
  onClose: () => void;
}

const PredictTermsDialog: React.FC<TermsDialogProps> = ({ open, onClose }) => {
  if (!open) return null;

  const img = ["/banner/1.webp", "/banner/2.webp", "/banner/3.webp", "/banner/4.webp"];

  // สุ่มรูปตอน component ถูก mount (ทุกครั้งที่ open = true)
  const bannerSrc = React.useMemo(
    () => img[Math.floor(Math.random() * img.length)],
    []
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-[95%] overflow-hidden z-10">
        {/* header image เหมือนดีไซน์ตัวอย่าง */}
        <div className="relative w-full h-32 md:h-50 overflow-hidden">
          {/* BG IMAGE + GRADIENT OVERLAY */}
          <div className="absolute inset-0">
            <img
              src={bannerSrc}
              alt="โปรโมชั่นทายผลบอล"
              className="w-full h-full object-cover pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-800/40" />
          </div>

          {/* TEXT SIDE */}
          <div className="relative z-10 flex items-center h-full px-4 md:px-6">
            <div className="max-w-md">
              <h2 className="font-bold text-white mb-1
                   text-lg sm:text-xl md:text-2xl lg:text-3xl">
                ทายผลบอล รับเครดิตฟรีทุกวัน
              </h2>
              <p className="text-orange-300
                  text-xs sm:text-sm md:text-base">
                อ่านเงื่อนไขให้ครบก่อนเข้าร่วมกิจกรรม
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-2xl text-white/80 hover:text-white pointer-events-auto"
        >
          ✖
        </button>

        {/* เนื้อหาเงื่อนไข */}
        <div className="p-6 text-sm text-zinc-900 max-h-[65vh] overflow-y-auto">
          <h3 className="font-bold text-lg mb-2">
            ทายผลบอล รับเครดิตฟรีทุกวัน
          </h3>
          <p className="mb-3">
            เพื่อเป็นการขอบคุณสมาชิกทุกท่าน ได้จัดกิจกรรมทายผลฟุตบอลรับ{" "}
            <span className="font-bold text-red-500">เครดิตฟรี</span> ตามเงื่อนไขดังนี้
          </p>

          <h4 className="font-semibold mb-1">กติกาการเข้าร่วม:</h4>
          <ul className="list-disc list-inside mb-3 space-y-1">
            <li>สมาชิกสามารถเลือกคู่การแข่งขันที่ขึ้นระบบให้ทายผลได้</li>
            <li>ทายผลสกอร์แบบเต็มเวลา เช่น 2-1, 1-1 เป็นต้น</li>
          </ul>

          <h4 className="font-semibold mb-1">เงื่อนไขการเข้าร่วม:</h4>
          <ul className="list-disc list-inside mb-3 space-y-1">
            <li>ลูกค้ามียอดฝากรวมภายในวันตั้งแต่ 50 บาทขึ้นไป</li>
            <li>1 บัญชี / 1 IP สามารถร่วมกิจกรรมได้เพียง 1 ครั้งต่อวัน</li>
            <li>ชื่อ-นามสกุล ต้องตรงกับข้อมูลสมาชิกในระบบ</li>
          </ul>

          <h4 className="font-semibold mb-1">รางวัลโบนัส:</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>ทายถูกตามเงื่อนไข จะได้รับเครดิตฟรี 22.88 – 588.88 บาท</li>
            <li>รางวัลสามารถเคลมได้ภายใน 2 ชั่วโมงหลังจบการแข่งขัน สูงสุดไม่เกิน 2 วัน</li>
            <li>ทางเว็บขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งล่วงหน้า</li>
          </ul>

          {/* Note */}
          <div className="mt-2 p-3 rounded-md bg-yellow-50 border border-yellow-200 text-xs text-zinc-800">
            <p className="font-semibold text-yellow-700 mb-1">หมายเหตุ</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                หากแมตช์ถูกเลื่อน / ยกเลิก / ไม่มีผลการแข่งขันอย่างเป็นทางการ
                การทายผลในคู่นั้นถือเป็นโมฆะ และ<strong>หมดสิทธิ์</strong>รับเครดิตฟรี
              </li>
              <li>
                หากมีการตัดสินด้วยการดวลจุดโทษ ให้ยึดผลสกอร์เต็มเวลา
                <strong>ก่อนดวลจุดโทษ</strong> เป็นหลัก
              </li>
              <li>
                กรณีอื่น ๆ ที่ไม่ได้ระบุไว้ ทีมงานขอสงวนสิทธิ์ในการพิจารณาตามดุลยพินิจ
              </li>
              <li>
                กิจกรรมทั้งหมดอ้างอิงตามเขตเวลา <strong>UTC+8 (Asia/Singapore)</strong>
              </li>
            </ul>
          </div>

          <div className="text-right mt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800 hover:opacity-90 cursor-pointer transition-colors"
            >
              รับทราบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictTermsDialog;

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — ไม่พบหน้านี้",
  description:
    "ขออภัย ไม่พบหน้าที่คุณค้นหา กลับไปหน้าหลัก Thaideal เพื่อดูโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีล่าสุด",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://thaideal.co/404" },
};

export default function NotFound() {
  return (
    <main
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16"
      role="main"
      aria-labelledby="notfound-title"
    >
      <p className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        404
      </p>
      <h1
        id="notfound-title"
        className="mt-4 text-2xl sm:text-3xl font-bold text-white"
      >
        ไม่พบหน้าที่คุณค้นหา
      </h1>
      <p className="mt-3 max-w-md text-gray-300 text-sm sm:text-base">
        ลิงก์ที่คุณเปิดอาจถูกย้าย ลบ หรือพิมพ์ผิดพลาด
        ลองใช้ลิงก์ด้านล่างเพื่อกลับสู่เนื้อหาหลักของ Thaideal
      </p>

      <nav
        aria-label="ลิงก์ที่แนะนำ"
        className="mt-8 flex flex-wrap justify-center gap-3 text-sm sm:text-base"
      >
        <Link
          href="/"
          className="inline-block rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 px-5 py-2 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.03]"
        >
          กลับสู่หน้าแรก
        </Link>
        <Link
          href="/about-us/"
          className="inline-block rounded-xl border border-white/20 px-5 py-2 font-medium text-cyan-300 hover:bg-white/10 transition-colors"
        >
          เกี่ยวกับเรา
        </Link>
        <Link
          href="/contact-us/"
          className="inline-block rounded-xl border border-white/20 px-5 py-2 font-medium text-cyan-300 hover:bg-white/10 transition-colors"
        >
          ติดต่อเรา
        </Link>
      </nav>
    </main>
  );
}

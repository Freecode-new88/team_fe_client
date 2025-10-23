import AboutUsPage from "./AboutUsClient";

export const metadata = {
  title: "เกี่ยวกับ Thaibet | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
  description:
    "Thaibet เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีจากแบรนด์ยอดนิยม โดยมุ่งเน้นความถูกต้อง โปร่งใส และเงื่อนไขชัดเจน เพื่อให้ผู้ใช้ตัดสินใจได้อย่างมีข้อมูล",
  alternates: { canonical: "https://thaibetz.com/about-us/" },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaibetz.com/about-us/",
    siteName: "Thaibet — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    title: "เกี่ยวกับ Thaibet | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    description:
      "Thaibet แหล่งรวมข้อมูลโค้ดเครดิตฟรีจากแบรนด์ต่าง ๆ พร้อมสรุปเงื่อนไขและช่องทางติดต่ออย่างโปร่งใส",
    images: [
      {
        url: "https://thaibetz.com/og/about.webp",
        width: 1200,
        height: 630,
        alt: "เกี่ยวกับ Thaibet — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaibetz",
    creator: "@thaibetz",
    title: "เกี่ยวกับ Thaibet | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    description:
      "Thaibet เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี อัปเดตทุกวัน เงื่อนไขชัดเจน โปร่งใส และตรวจสอบได้",
    images: ["https://thaibetz.com/og/about.webp"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutUsPage />;
}

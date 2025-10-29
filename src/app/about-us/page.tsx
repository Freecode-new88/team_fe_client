import AboutUsPage from "./AboutUsClient";

export const metadata = {
  title: "เกี่ยวกับ Thaideal | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
  description:
    "Thaideal เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรีจากแบรนด์ยอดนิยม โดยมุ่งเน้นความถูกต้อง โปร่งใส และเงื่อนไขชัดเจน เพื่อให้ผู้ใช้ตัดสินใจได้อย่างมีข้อมูล",
  alternates: { canonical: "https://thaideal.co/about-us/" },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaideal.co/about-us/",
    siteName: "Thaideal — รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    title: "เกี่ยวกับ Thaideal | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    description:
      "Thaideal แหล่งรวมข้อมูลโค้ดเครดิตฟรีจากแบรนด์ต่าง ๆ พร้อมสรุปเงื่อนไขและช่องทางติดต่ออย่างโปร่งใส",
    images: [
      {
        url: "https://thaideal.co/og/about.webp",
        width: 1200,
        height: 630,
        alt: "เกี่ยวกับ Thaideal — ศูนย์รวมโปรโมชันและโค้ดเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaideal",
    creator: "@thaideal",
    title: "เกี่ยวกับ Thaideal | ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    description:
      "Thaideal เป็นศูนย์รวมข้อมูลโปรโมชันและโค้ดเครดิตฟรี อัปเดตทุกวัน เงื่อนไขชัดเจน โปร่งใส และตรวจสอบได้",
    images: ["https://thaideal.co/og/about.webp"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutUsPage />;
}

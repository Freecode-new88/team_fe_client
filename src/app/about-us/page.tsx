import AboutUsPage from "./AboutUsClient";

export const metadata = {
  title: "เกี่ยวกับเรา — โปรโมชันเครดิตฟรีโปร่งใส",
  description:
    "Thaideal วิเคราะห์โปรโมชันและโค้ดเครดิตฟรีจากแบรนด์ต่าง ๆ เน้นข้อเท็จจริงและความโปร่งใส เพื่อให้ผู้ใช้ตัดสินใจได้อย่างปลอดภัย",
  alternates: { canonical: "https://thaideal.co/about-us/" },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaideal.co/about-us/",
    siteName: "Thaideal — รวมข้อมูลและวิเคราะห์โปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    title: "เกี่ยวกับเรา — วิเคราะห์โปรโมชันเครดิตฟรีอย่างโปร่งใส",
    description:
      "Thaideal ให้ข้อมูลและวิเคราะห์โปรโมชันจากหลากหลายแบรนด์ เน้นความถูกต้อง โปร่งใส และอัปเดตตามแหล่งข้อมูลจริง",
    images: [
      {
        url: "https://thaideal.co/og/about.webp",
        width: 1200,
        height: 630,
        alt: "เกี่ยวกับ Thaideal — เว็บไซต์วิเคราะห์และให้ข้อมูลโปรโมชันเครดิตฟรี",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thaidealt",
    creator: "@thaidealt",
    title: "เกี่ยวกับเรา — เว็บข้อมูลและวิเคราะห์โปรโมชันเครดิตฟรี",
    description:
      "Thaideal ให้ข้อมูลและวิเคราะห์โปรโมชันเครดิตฟรีอย่างอิสระ อ้างอิงจากข้อมูลจริง โปร่งใสสูงสุด",
    images: ["https://thaideal.co/og/about.webp"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutUsPage />;
}

import AboutUsPage from "./AboutUsClient";

export const metadata = {
  title:
    "เกี่ยวกับ Thaideal | วิเคราะห์โปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีอย่างโปร่งใส",
  description:
    "Thaideal เป็นแหล่งข้อมูลวิเคราะห์โปรโมชันและโค้ดเครดิตฟรีจากแบรนด์ต่าง ๆ โดยมุ่งเน้นการนำเสนอข้อเท็จจริง เงื่อนไข และแนวโน้มในอุตสาหกรรมอย่างโปร่งใส เพื่อช่วยให้ผู้ใช้งานตัดสินใจได้อย่างมีข้อมูลและปลอดภัย",
  alternates: { canonical: "https://thaideal.co/about-us/" },
  openGraph: {
    type: "article",
    locale: "th_TH",
    url: "https://thaideal.co/about-us/",
    siteName: "Thaideal — รวมข้อมูลและวิเคราะห์โปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี",
    title:
      "เกี่ยวกับ Thaideal | วิเคราะห์โปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรีอย่างโปร่งใส",
    description:
      "Thaideal ให้ข้อมูลและวิเคราะห์โปรโมชันจากหลากหลายแบรนด์ โดยเน้นความถูกต้อง ความโปร่งใส และการอัปเดตตามแหล่งข้อมูลจริง เพื่อประโยชน์ของผู้ใช้งานเป็นหลัก",
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
    title:
      "เกี่ยวกับ Thaideal | เว็บไซต์ให้ข้อมูลและวิเคราะห์โปรโมชันเครดิตฟรี",
    description:
      "Thaideal ทำหน้าที่เป็นผู้ให้ข้อมูลและวิเคราะห์โปรโมชันเครดิตฟรีอย่างอิสระ อ้างอิงจากข้อมูลจริง และไม่มีผลประโยชน์ร่วมกับผู้ให้บริการใด ๆ เพื่อความโปร่งใสสูงสุด",
    images: ["https://thaideal.co/og/about.webp"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutUsPage />;
}

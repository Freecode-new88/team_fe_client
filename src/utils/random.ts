export function maskUser(r: { user: string }): string {
  const raw = (r.user ?? "").trim();
  // เก็บเฉพาะ a-z0-9 เพื่อความเรียบร้อย
  const cleaned = raw.toLowerCase().match(/[a-z0-9]/gi)?.join("") ?? "";

  const two =
    cleaned.slice(0, 2) ||
    // ถ้าไม่มีอักษรให้สุ่ม 2 ตัว
    Array.from({ length: 2 }, () =>
      String.fromCharCode(97 + Math.floor(Math.random() * 26)) // a-z
    ).join("");

  return two + "xxxxx"; // ได้รูปแบบเช่น "sexxxxx"
}

const emoji = [
  "https://file.781243555.com/emoji/0.webp",
  "https://file.781243555.com/emoji/1.webp",
  "https://file.781243555.com/emoji/2.webp",
  "https://file.781243555.com/emoji/3.webp",
  "https://file.781243555.com/emoji/4.webp",
  "https://file.781243555.com/emoji/5.webp",
  "https://file.781243555.com/emoji/6.webp",
  "https://file.781243555.com/emoji/7.webp",
  "https://file.781243555.com/emoji/8.webp",
  "https://file.781243555.com/emoji/9.webp",
  "https://file.781243555.com/emoji/10.webp",
  "https://file.781243555.com/emoji/11.webp",
  "https://file.781243555.com/emoji/12.webp",
  "https://file.781243555.com/emoji/13.webp",
  "https://file.781243555.com/emoji/14.webp",
  "https://file.781243555.com/emoji/15.webp",
  "https://file.781243555.com/emoji/16.webp",
  "https://file.781243555.com/emoji/17.webp",
  "https://file.781243555.com/emoji/18.webp",
  "https://file.781243555.com/emoji/19.webp",
  "https://file.781243555.com/emoji/20.webp",
  "https://file.781243555.com/emoji/21.webp",
  "https://file.781243555.com/emoji/22.webp",
  "https://file.781243555.com/emoji/23.webp",
  "https://file.781243555.com/emoji/24.webp",
  "https://file.781243555.com/emoji/25.webp",
  "https://file.781243555.com/emoji/26.webp",
  "https://file.781243555.com/emoji/27.webp",
  "https://file.781243555.com/emoji/28.webp",
  "https://file.781243555.com/emoji/29.webp",
  "https://file.781243555.com/emoji/30.webp",
  "https://file.781243555.com/emoji/31.webp",
];

export const rand0to30 = (): string => emoji[Math.floor(Math.random() * emoji.length)];
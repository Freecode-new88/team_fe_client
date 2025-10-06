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
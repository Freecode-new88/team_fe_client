// app/not-found.tsx
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/"); // เด้งกลับโฮมทันที (ฝั่งเซิร์ฟเวอร์, ไม่กะพริบ)
}

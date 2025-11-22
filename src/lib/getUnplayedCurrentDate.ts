import axios from "axios";

export async function getUnplayedCurrentDate(status: string = "NS") {
  const BASE_URL = "https://chat.sexfotzen.com";

  if (!BASE_URL) {
    throw new Error("⚠️ NEXT_FOOTBALL_BASE_URL not found");
  }

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  try {
    const res = await axios.get(`${BASE_URL}/matches/unplayed-db`, {
      params: {
        date: today,
        limit: 300
      },
      timeout: 20000
    });
    return res.data; // ✔ ส่งเต็ม response ทั้งก้อน

  } catch (err: any) {
    console.error("❌ getUnplayedCurrentDate error:", err.response?.data || err.message);
    throw err;
  }
}

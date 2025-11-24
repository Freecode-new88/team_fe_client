import { PredictionsResponse } from "@/model/Predictions.model";
import axios from "axios";

const BASE_URL = "https://chat.sexfotzen.com"; // "http://127.0.0.1:3600"; //

/* ---------------------------------------------
   📌 GET UNPLAYED MATCHES (Today)
--------------------------------------------- */
export async function getUnplayedCurrentDate(status: string = "NS") {
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

    return res.data;

  } catch (err: any) {
    if (axios.isAxiosError(err)) {
    } else {
      console.log("❌ UNKNOWN ERROR:", err);
    }
    throw err;
  }
}

/* ---------------------------------------------
   📌 CREATE PREDICTION API
   POST /prediction/
--------------------------------------------- */
export async function createPrediction(data: {
  username: string;
  site: "MK8" | "F168";
  matchId: string;
  homeScore: number;
  awayScore: number;
}) {
  try {
    const res = await axios.post(`${BASE_URL}/prediction/`, data, {
      timeout: 15000
    });

    return res.data; // success

  } catch (err: any) {
    if (axios.isAxiosError(err)) {
    } else {
      console.log("❌ UNKNOWN ERROR:", err);
    }
    throw err;
  }
}

// GET predictions with all filters
export async function getPredictions(
  page: number = 1,
  limit: number = 20,
  username?: string,
  site?: "MK8" | "F168",
  status?: "pending" | "correct" | "wrong" | undefined,
  startDate?: string,
  endDate?: string
): Promise<PredictionsResponse> {
  const res = await axios.get(`${BASE_URL}/prediction`, {
    params: {
      page,
      limit,
      username,
      site,
      status,
      startDate,
      endDate,
    },
  });
  return res.data as PredictionsResponse;
}
/* ---------------------------------------------
   📌 CLAIM BONUS
   POST /prediction/claim-bonus
--------------------------------------------- */
export async function claimBonus(data: {
  username: string;
  predictionId: string;
}) {
  try {
    const res = await axios.post(`${BASE_URL}/prediction/claim-bonus`, data, {
      timeout: 15000,
    });

    return res.data; // success response

  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      console.error("❌ API ERROR:", err.response?.data || err.message);
    } else {
      console.error("❌ UNKNOWN ERROR:", err);
    }
    throw err;
  }
}


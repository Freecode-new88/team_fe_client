// -----------------------------------------
// Match Status Enum
// -----------------------------------------
export enum MatchStatus {
  TBD = "TBD",
  NS = "NS",
  "1H" = "1H",
  HT = "HT",
  "2H" = "2H",
  ET = "ET",
  BT = "BT",
  P = "P",
  FT = "FT",
  AET = "AET",
  PEN = "PEN",
  SUSP = "SUSP",
  INT = "INT",
  PST = "PST",
  CANC = "CANC",
  ABD = "ABD",
  WO = "WO",
  LIVE = "LIVE",
}

export type PredictionStatusFilter = "" | "pending" | "correct" | "wrong";
// -----------------------------------------
// Team Info
// -----------------------------------------
export interface TeamInfo {
  id: number;
  name: string;
  logo: string;
}

// -----------------------------------------
// Score structures
// -----------------------------------------
export interface GoalInfo {
  home: number | null;
  away: number | null;
}

export interface ScoreDetail {
  fulltime: GoalInfo;
  halftime: GoalInfo;
}

// -----------------------------------------
// Match Info (nested inside prediction)
// -----------------------------------------
export interface MatchInfo {
  _id: string;
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  date: string;
  goals: GoalInfo;
  score: ScoreDetail;
  status: MatchStatus;
}

// -----------------------------------------
// Prediction Item
// -----------------------------------------
export interface PredictionItem {
  _id: string;
  username: string;
  site: "MK8" | "F168";

  matchId: MatchInfo;

  predicted: {
    home: number;
    away: number;
  };

  result: PredictionStatusFilter;

  claim: boolean;
  luckyCode: string | null;
  restricted: boolean;
  createdAt: string;
  __v: number;
}

// -----------------------------------------
// Paginated Response
// -----------------------------------------
export interface PredictionsResponse {
  success: boolean;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: PredictionItem[];
}

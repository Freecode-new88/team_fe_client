import api from "@/lib/axios";
import type { SiteKey } from "../config/site";
import { siteByKey } from "../config/site";

export type PromoItem = {
  promo_code: string;
  available: "Available" | string;
  site: string;
  date: string;
};

type GetPromoResponse = {
  status_code: number;
  data: PromoItem[];
};

export type ServiceOk<T> = { ok: true; data: T };
export type ServiceErr = { ok: false; error: string; status?: number };
export type ServiceResult<T> = ServiceOk<T> | ServiceErr;

/**
 * Fetch available promo codes from BE and return a normalized result.
 */
export async function fetchPromoCodes(): Promise<ServiceResult<PromoItem[]>> {
  try {
    const res = await api.get<GetPromoResponse>("/clientpromo/getpromo");

    // Basic shape check
    if (!res?.data || !Array.isArray(res.data.data)) {
      return { ok: false, error: "Unexpected response shape" };
    }

    const items = res.data.data;

    return { ok: true, data: items };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Request failed", status: e?.status };
  }
}

export type ClaimItem = {
  user: string;
  code: string;
  point: number;
  site: string;
  time: string;
  receiveCount: number;
  receiveTotal: number;

};


type GetClaimResponse = {
  status_code: number;
  data: ClaimItem[];
}
/**
 * Fetch user claimed promo codes from BE and return a normalized result.
 */
export async function fetchClaimedData(): Promise<ServiceResult<ClaimItem[]>> {
  try {
    const res = await api.get<GetClaimResponse>("/clientpromo/getpromoclaim");

    // Basic shape check
    if (!res?.data || !Array.isArray(res.data.data)) {
      return { ok: false, error: "Unexpected response shape" };
    }

    const items = res.data.data;

    return { ok: true, data: items };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Request failed", status: e?.status };
  }
}

export type Captcha = {
  captchaUrl: string;
  token: string;
  valid: boolean;
}

type CaptchaError = {
  message: string;
};

type CaptchaResult =
  | { ok: true; data: Captcha; status: number }
  | { ok: false; error: string; status?: number };

function isCaptcha(x: any): x is Captcha {
  return !!x
    && typeof x.captchaUrl === "string"
    && typeof x.token === "string"
    && typeof x.valid === "boolean";
}
function isCaptchaError(x: any): x is CaptchaError {
  return !!x && typeof x.message === "string";
}
/**
 * Get Captcha Code.
 */
export async function getCaptchaBySite(siteKey: SiteKey): Promise<CaptchaResult> {
  const site = siteByKey[siteKey];
  if (!site) return { ok: false, error: `Unknown site: ${siteKey}` };

  try {
    const res = await api.get<Captcha | { message: string }>(
      "/captcha/get-verification-code",
      { params: { site: site.id } }
    );

    const { data, status } = res;
    if (isCaptcha(data)) return { ok: true, data, status };

    if (data && typeof (data as any).message === "string") {
      return { ok: false, error: (data as any).message, status };
    }
    return { ok: false, error: "Unexpected response shape", status };
  } catch (e: any) {
    const status = e?.response?.status ?? e?.status;
    const payload = e?.response?.data;
    if (payload && typeof payload.message === "string") {
      return { ok: false, error: payload.message, status };
    }
    return { ok: false, error: e?.message ?? "Request failed", status };
  }
}

type VerifySuccess = {
  status_code: number; // 200
  valid: boolean;      // true
  message: string;     // TH message
  detail: {
    promo_code: string;
    point: number;
    time: string;      // ISO
    min_point: number;
    max_point: number;
  };
};

type VerifyFail200 = { ok: false; message: string };
type VerifyFail400 = { message: string };

export type VerifyResult =
  | { ok: true; status: number; data: VerifySuccess }
  | { ok: false; status?: number; error: string };

/**
 * Claim Promo Code and Solve Captcha
 */
export async function verifyPromoCode(args: {
  promoCode: string;
  siteKey: SiteKey;
  captchaCode: string;
  token: string;
}): Promise<VerifyResult> {
  const { promoCode, siteKey, captchaCode, token } = args;
  const site = siteByKey[siteKey];
  if (!site) return { ok: false, error: `Unknown site: ${siteKey}` };
  const base = `/${siteKey.toLowerCase()}`;
  try {
    const res = await api.post<VerifySuccess | VerifyFail200 | VerifyFail400>(
      `${base}/api/team/get-code`,
      { captchaCode, token },
      { params: { promo_code: promoCode, site: site.id } }
    );

    const { status, data } = res;
    // Success shape
    if ((data as any)?.status_code === 200 && (data as any)?.valid === true) {
      return { ok: true, status, data: data as VerifySuccess };
    }

    // 200 but fail (wrong site/captcha/token)
    if ((data as any)?.ok === false && typeof (data as any)?.message === "string") {
      return { ok: false, status, error: (data as any).message };
    }

    // 400 wrong promo gets here only if axios doesn't throw
    if ((data as any)?.message) {
      return { ok: false, status, error: (data as any).message };
    }

    return { ok: false, status, error: "Unexpected response" };
  } catch (e: any) {
    const status = e?.response?.status ?? e?.status;
    const payload = e?.response?.data;

    // 400 wrong promo
    if (payload && typeof payload.message === "string") {
      return { ok: false, status, error: payload.message };
    }

    return { ok: false, status, error: e?.message ?? "Request failed" };
  }
}

export function getFp(): string {
  const KEY = "fp_id_v1";
  const existing = localStorage.getItem(KEY);
  if (existing) return existing;

  const data = [
    navigator.userAgent,
    Intl.DateTimeFormat().resolvedOptions().timeZone ?? "",
    screen?.width, screen?.height, screen?.colorDepth,
    navigator.language,
  ].join("|");

  // simple hash
  let h = 0;
  for (let i = 0; i < data.length; i++) {
    h = (h << 5) - h + data.charCodeAt(i);
    h |= 0;
  }
  const fp = `${Math.abs(h)}_${Date.now().toString(36).slice(-5)}`;
  localStorage.setItem(KEY, fp);
  return fp;
}

/** ===== Submit user claim (dynamic site prefix) ===== */
type ClaimOk = {
  success: true;
  message: string; // "คุณได้ยืนยันสิทธิ์โปรโมชั่นสำเร็จแล้ว"
  valid: true;
  data: Record<string, unknown>;
};
type ClaimFail = {
  success: false;
  message: string;
  data?: { valid?: boolean };
};

export type ClaimResult =
  | { ok: true; status: number; data: ClaimOk }
  | { ok: false; status?: number; error: string };

export async function submitUserClaim(args: {
  siteKey: SiteKey;
  promoId: string;   // promo code string
  account: string;
  fp?: string;
}): Promise<ClaimResult> {
  const { siteKey, promoId, account } = args;
  const site = siteByKey[siteKey];
  if (!site) return { ok: false, error: `Unknown site: ${siteKey}` };

  const base = `/${siteKey.toLowerCase()}`; // /f168 | /mk8 | /sitea
  const fp = args.fp ?? getFp();

  try {
    const res = await api.post<ClaimOk | ClaimFail>(
      `${base}/user`,
      {
        promo_id: promoId,
        account,
        site: site.id,
        fp,
      }
    );
    const { status, data } = res;
    if ((data as any)?.success === true) {
      return { ok: true, status, data: data as ClaimOk };
    }
    return { ok: false, status, error: (data as any)?.message ?? "Request failed" };
  } catch (e: any) {
    const status = e?.response?.status ?? e?.status;
    const payload = e?.response?.data;
    if (payload && typeof payload.message === "string") {
      return { ok: false, status, error: payload.message };
    }
    return { ok: false, status, error: e?.message ?? "Request failed" };
  }
}





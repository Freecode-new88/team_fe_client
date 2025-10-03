import api from "@/lib/axios";

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



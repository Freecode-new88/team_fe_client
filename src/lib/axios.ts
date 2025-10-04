import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

/** Base URL: set NEXT_PUBLIC_API_BASE_URL for other environments */
const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3002";

const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    const status = err.response?.status;
    const msg =
      (err.response?.data as any)?.message ||
      err.message ||
      "Network error. Please try again.";
    return Promise.reject({ status, message: msg, raw: err });
  }
);

export default api;

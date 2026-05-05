"use client";

import dynamic from "next/dynamic";

// ⚡ Defer toast bundle (~50KB) until after hydration on the client
const ToastContainer = dynamic(
  () => import("react-toastify").then((m) => m.ToastContainer),
  { ssr: false }
);

export default function LazyToastContainer() {
  return <ToastContainer autoClose={5000} />;
}

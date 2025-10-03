import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollUp from "@/components/ScrollUp";

export const metadata: Metadata = {
  title: "Promotions | F168 & MK8",
  description: "Get the latest promotions and bonuses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: '0px' }}>
        <Preloader />
        <Header />
        {children}
        <ScrollUp />
        <Footer />
      </body>
    </html>
  );
}

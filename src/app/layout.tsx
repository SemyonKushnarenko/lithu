import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Script from "next/script";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Girios Namai",
  description: "",
  icons: {
    icon: "/logo.png",
  },
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />

        <Script
          src="/script/image-map-pro.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

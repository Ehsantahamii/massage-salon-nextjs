import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";

const font = localFont({
  src: [
    {
      path: "../public/font/YekanBakhMedium.woff",
      weight: "200",
      style: "normal",
    },
  ],
});
export const metadata = {
  title: "مریم خلیلی",
  description: "ماساژ / کرمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${font.className} max-w-[1280px] mx-auto overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

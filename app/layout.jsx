import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Aos from "@/helper/aos";

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
  title: "مرکز تخصصی ماساژ | مریم خلیلی ",
  description: "ماساژ تخصصی کرمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${font.className} overflow-x-hidden`}>
        <Aos />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Aos from "@/helper/aos";
import LenisConfig from "@/helper/lenis";

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
  title: "ماساژ خانم مریم خلیلی |  ماساژ: راهی برای آرامش، کاهش استرس و بهبود سلامت بدن ",
  description: "ماساژ حرفه‌ای برای کاهش استرس، بهبود گردش خون و آرامش عمیق بدن! بهترین خدمات ماساژ توسط مریم خلیلی. رزرو آنلاین و مشاوره رایگان.",
  generator: "مریم خلیلی",
  applicationName: 'مرکز تخصصی ماساژ | مریم خلیلی',
  creator: 'مریم خلیلی',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  keywords: [' بهترین مراک ماساژ در کرمان','ماساژ  مریم خلیلی کرمان' ,'ماساژ خانم مریم خلیلی کرمان', 'ماساژ تخصصی کرمان', 'خدمات ماساژ در کرمان', 'ماساژ درمانی کرمان','ماساژ در منزل' ,'ماساژ تخصصی', 'رزرو آنلاین ماساژ کرمان', 'مشاوره رایگان ماساژ کرمان'],
};
export const viewport = {
  themeColor: "#397AC0",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${font.className} overflow-x-hidden`}>
        <Aos />
        <LenisConfig />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

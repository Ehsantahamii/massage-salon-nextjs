import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
// import Aos from "@/helper/aos";
import LenisConfig from "@/helper/lenis";
import SalProvider from "@/helper/SalProvider";
import dynamic from "next/dynamic";
const GoTopBtn = dynamic(() => import("@/components/module/go-top-btn/GoTopBtn"), { ssr: false });



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
  title: " مریم خلیلی | ماساژ تخصصی و درمانی در کرمان | رزرو آنلاین، مشاوره رایگان ",
  description: " سایت ماساژ خانم مریم خلیلی، با ارائه ماساژ تخصصی، آرامش و سلامتی شما تضمین می‌شود. رزرو آنلاین آسان و مشاوره رایگان، تجربه‌ای متفاوت از رفاه و تجدید انرژی را به ارمغان می‌آورد.",
  generator: "مریم خلیلی",
  applicationName: 'مرکز تخصصی ماساژ | مریم خلیلی',
  creator: 'مریم خلیلی',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  keywords: [' بهترین مراکز ماساژ در کرمان', 'ماساژ  مریم خلیلی کرمان', 'ماساژ خانم مریم خلیلی کرمان', 'ماساژ حرفه‌ای در کرمان', 'ماساژ تخصصی کرمان', 'خدمات ماساژ در کرمان', 'ماساژ درمانی کرمان', 'ماساژ در منزل', 'ماساژ تخصصی', 'رزرو آنلاین ماساژ کرمان', 'مشاوره رایگان ماساژ کرمان'],
};
export const viewport = {
  themeColor: "#397AC0",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${font.className} overflow-x-hidden`}>
        {/* <Aos /> */}
        <LenisConfig />
        <Navbar />
        {children}
        <GoTopBtn />
        <Footer />
        <SalProvider />
      </body>
    </html>
  );
}

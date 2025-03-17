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
  title: "ماساژ خانم مریم خلیلی | ماساژ تخصصی و درمانی در کرمان – رزرو آنلاین، مشاوره رایگان و آرامش بی‌نظیر ",
  description: " سایت ماساژ خانم مریم خلیلی، با ارائه ماساژ تخصصی و مدرن، آرامش و سلامتی شما تضمین می‌شود. رزرو آنلاین آسان و مشاوره رایگان، تجربه‌ای متفاوت از رفاه و تجدید انرژی را به ارمغان می‌آورد.",
  generator: "مریم خلیلی",
  applicationName: 'مرکز تخصصی ماساژ | مریم خلیلی',
  creator: 'مریم خلیلی',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  keywords: ['ماساژ کرمان', 'ماساژ خانم مریم خلیلی کرمان', 'ماساژ تخصصی کرمان', 'خدمات ماساژ در کرمان', 'ماساژ درمانی کرمان', 'ماساژ تخصصی', 'رزرو آنلاین ماساژ کرمان', 'مشاوره رایگان ماساژ کرمان'],
};
export const viewport = {
  themeColor: "#397AC0",
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

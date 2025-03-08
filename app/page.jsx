import SwiperPage from "@/components/layout/swiper-page/SwiperPage";
import About from "@/components/template/about/About";
import Hero from "@/components/template/hero/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SwiperPage />
      <About />
    </main>
  );
}

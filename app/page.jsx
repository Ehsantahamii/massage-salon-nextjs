import SwiperPage from "@/components/layout/swiper-page/SwiperPage";
import About from "@/components/template/about/About";
import Hero from "@/components/template/hero/Hero";
import Services from "@/components/template/service-page/Services";

export default function Home() {
  return (
    <main >
      <Hero />
      <SwiperPage />
      <About />
      <Services />
    </main>
  );
}

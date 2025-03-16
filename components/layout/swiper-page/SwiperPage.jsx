"use client"
import ThumbsSwiper from "@/components/module/thumbs-swiper/ThumbsSwiper";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const SwiperPage = () => {
  AOS.init();
  return (
    <div >
      <ThumbsSwiper />
    </div>
  );
};

export default SwiperPage;

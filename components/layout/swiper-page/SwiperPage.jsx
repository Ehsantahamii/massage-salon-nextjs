import ThumbsSwiper from "@/components/module/thumbs-swiper/ThumbsSwiper";
const SwiperPage = () => {
  return (
    <section className="pt-12" data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-in">
      <ThumbsSwiper />
    </section>
  );
};

export default SwiperPage;

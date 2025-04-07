// import MovingText from "@/components/module/movingtext/MovingText";
import ReserveBtn from "@/components/module/resrevebtn/ReserveBtn";
import dynamic from "next/dynamic";
import Image from "next/image";
const MovingText = dynamic(() => import('@/components/module/movingtext/MovingText'), {
  ssr: false,
})

const Hero = () => {
  return (
    <section className="hero h-[92%] flex flex-col justify-center lg:w-full mx-auto relative pt-16">
      <div className="w-full relative">
        <Image src="/img/img-hero.jpg" className="rounded-[50px] w-[75%] max-w-[600px] mx-auto  max-h-[580px]"
          data-sal="fade"
          data-sal-duration="400"
          data-sal-easing="ease-in"
          data-sal-delay="300"
          width={800} height={580} alt="massage-hero-img" />
        <MovingText />
      </div>

      <div className="absolute hidden lg:flex max-w-[150px] top-0 left-0  flex-col items-center justify-center"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="400"
        data-sal-easing="ease-in">
        <Image src="/img/left-hero-img.png" className="w-[150px]" width={186} height={294} alt="massage-hero-img" />
        <p className="font-bold text-center">
          برای یک برگشتن به یک زندگی عالی با یک ماساژ عالی تر آماده هستی ؟
        </p>
      </div>
      <p className="absolute hidden lg:flex top-2 text-lg right-0 font-bold max-w-[150px] text-center"
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-delay="100"
        data-sal-easing="ease-in">
        اینجا قراره عاشق ماساژ بشی.
        ارائه بهترین و با کیفیت ترین خدمات ماساژ

      </p>
      <div className=" w-full py-8 flex flex-col items-center justify-center"
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="ease-in">
        <h1 className="text-center font-bold text-[32px] py-4 max-w-[900px]">
          سالن تخصصی آموزش و خدمات ماساژ
          خانم مریم خلیلی
        </h1>
        <ReserveBtn />
      </div>
    </section >
  );
};

export default Hero;

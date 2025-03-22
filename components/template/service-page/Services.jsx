import React from "react";
import "./Services.css";
import ItemsServices from "@/components/module/items_service/Items-services";
import Link from "next/link";
import Image from "next/image";

const Services = () => {

  return (
    <section className="service pt-14 lg:pb-28 " id="service" data-aos="fade-up">
      <div className="content_service relative">
        <div className="w-full">
<<<<<<< HEAD
          <div className="title text-center" data-aos="fade-up" >
            <h2 className="text-[50px] font-bold">انواع خدمات</h2>
=======
          <div className="title text-center" data-aos="fade-up">
            <h4 className="text-[50px] font-bold">انواع خدمات</h4>
>>>>>>> 51d30d5c3390d58a07abceb7a4630280306ade96
          </div>
          <div className="content w-full mt-5">
            <ItemsServices />
          </div>
<<<<<<< HEAD
          <div className="title_reserv flex flex-col justify-center items-center mt-[45px]" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p className="text-[35px] font-bold mb-5 max-md:text-[22px] max-md:mb-1">برای رزرو نوبت فقط کافیه کلیک کنید</p>
=======
          <div className="title_reserv flex flex-col justify-center items-center mt-[45px]" data-aos="fade-up" data-aos-anchor-placement="top">
            <h4 className="text-[35px] font-bold mb-5 max-md:text-[22px] max-md:mb-1">برای رزرو نوبت فقط کافیه کلیک کنید</h4>
>>>>>>> 51d30d5c3390d58a07abceb7a4630280306ade96
            <Link href="/" className="bt_reserv">رزرو نوبت</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./Services.css";
import Items_services from "@/components/module/items_service/Items-services";
import Link from "next/link";
import Image from "next/image";

const Services = () => {

  return (
    <div className="service mt-14 mb-14 " id="service">
      <div className="content_service relative">
        <div className="w-full">
          <div className="title text-center" data-aos="fade-up">
            <h1 className="text-[50px] font-bold">انواع خدمات</h1>
          </div>
          <div className="content w-full  mt-5">
            <Items_services />
          </div>
          <div className="title_reserv flex flex-col justify-center items-center mt-[45px]">
            <h1 className="text-[35px] font-bold mb-5 max-md:text-[22px] max-md:mb-1">برای رزرو نوبت فقط کافیه کلیک کنید</h1>
            <Link href="/" className="bt_reserv">رزرو نوبت</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

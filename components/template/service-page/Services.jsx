import React from "react";
import "./Services.css";
import ItemsServices from "@/components/module/items_service/Items-services";
import Link from "next/link";
import Image from "next/image";

const Services = () => {

  return (
    <section className="service pt-14 pb-14 lg:pb-28 md:mt-[100px] " id="service" >
      <div className="content_service relative">
        <div className="w-full">
          <div className="title text-center"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-easing="ease-in">

            <h2 className="text-[60px] font-bold">انواع خدمات</h2>
          </div>
          <div className="content w-full mt-5">
            <ItemsServices />
          </div>
          <div className="title_reserv flex flex-col justify-center items-center mt-[45px]">
            <p className="text-[35px] font-bold mb-5 max-md:text-[22px] max-md:mb-1">برای رزرو نوبت فقط کافیه کلیک کنید</p>
            <Link href="https://reserve.developmart.ir/" className="bt_reserv hover:scale-110 transition-all max-md:p-[30px]">رزرو نوبت</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

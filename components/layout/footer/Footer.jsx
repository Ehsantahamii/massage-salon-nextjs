import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-[#2a2a2a] w-full  mt-[50px]">
      <main className="footer flex justify-between items-center max-md:flex-col">
        <div className="right_footer flex flex-col">
          <h1 className="text-[#bcbcbc] pt-[30px] text-[22px] font-bold">
            مجموعه ماساژ تخصصی با مدیریت مریم خلیلی زاده
          </h1>
          <div className="location flex gap-2 items-center pt-3">
            <FaLocationDot className="text-[#bcbcbc] text-[25px]" />
            <span className="text-[#bcbcbc] text-[18px] font-bold">
              کرمان، خیابان فیروزه 2
            </span>
          </div>
          <div className="location flex gap-2 items-center pt-4">
            <FaPhoneFlip className="text-[#bcbcbc] text-[25px]" />
            <span className="text-[#bcbcbc] text-[20px] font-bold">
              09130571436
            </span>
          </div>
          <div className="instagram flex gap-2 items-center pt-4">
            <CiInstagram className="text-[#bcbcbc] text-[25px]" />
            <span className="text-[#bcbcbc] text-[20px] font-bold">
              mari_khalily
            </span>
          </div>
          <div className="dev_mart flex items-center gap-2 mt-12 max-md:hidden">
            <h1 className="text-[#bcbcbc]  text-[22px] font-bold">
              طراحی و توسعه یافته توسط تیم دو مارت
            </h1>
            <Link href="https://developmart.ir/">
              <img src="/img/dev_mart.svg" alt="developMart" />
            </Link>
          </div>
        </div>
        <div className="left_footer w-[500px] max-md:w-full max-md:mt-[30px] ">
          <p className="text-[#bcbcbc] text-[20px] w-[190px] text-center">
            ماساژ درمانی ، پناهگاهی امن برای آرامش و تجدید قواست{" "}
          </p>
          <div className="bt absolute mt-[40px] mr-[115px]">
            <Link href="/">
              <Image
                src="/img/bt_reserv.svg"
                width={430}
                height={85}
                className="w-[220px] h-[85px]"
              />
              <h1 className="text-[#fff] absolute mt-[-64px] mr-[64px] text-[30px]">
                رزرو نوبت
              </h1>
            </Link>
          </div>
        </div>
        <div className="dev_mart flex items-center gap-2 mt-12 max-md:mt-[150px] md:hidden">
          <h1 className="text-[#bcbcbc]  text-[22px] font-bold max-md:text-[15px]">
            طراحی و توسعه یافته توسط تیم دو مارت
          </h1>
          <Link href="https://developmart.ir/">
            <img src="/img/dev_mart.svg" alt="developMart" />
          </Link>
        </div>
      </main>
      <main className="img_footer mt-14">
        <Image
          src="/img/MASSAGE_footer.svg"
          width={100}
          height={100}
          className="w-full m-auto"
        />
      </main>
    </div>
  );
};

export default Footer;

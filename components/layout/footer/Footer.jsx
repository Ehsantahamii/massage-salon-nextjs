import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex bg-textColor flex-col ">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between py-8 px-12">
        <div className="lg:w-1/2 ">
          <h3 className="text-[#bcbcbc] pb-4 text-[24px]">
            تخصص و تجربه ما در خدمت سلامت شما
          </h3>
          <h4 className="flex items-center text-[#bcbcbc] gap-2 py-1">
            <svg
              width="35"
              height="40"
              viewBox="0 0 40 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0707454 18.5394C0.47373 13.5555 2.69265 8.90868 6.28731 5.52083C9.88197 2.13298 14.5897 0.251628 19.4766 0.25H20.5232C25.4101 0.251628 30.1178 2.13298 33.7125 5.52083C37.3071 8.90868 39.526 13.5555 39.929 18.5394C40.3762 24.1038 38.6975 29.6289 35.2459 33.9528L23.6339 48.4861C23.1938 49.0374 22.6394 49.4816 22.0109 49.7867C21.3824 50.0917 20.6955 50.25 19.9999 50.25C19.3043 50.25 18.6173 50.0917 17.9888 49.7867C17.3603 49.4816 16.806 49.0374 16.3658 48.4861L4.75625 33.9528C1.30381 29.6293 -0.375767 24.1041 0.0707454 18.5394ZM19.9999 9.54716C16.9478 9.54716 14.0208 10.7879 11.8626 12.9964C9.70449 15.2049 8.49206 18.2003 8.49206 21.3236C8.49206 24.4469 9.70449 27.4422 11.8626 29.6507C14.0208 31.8592 16.9478 33.1 19.9999 33.1C23.052 33.1 25.979 31.8592 28.1372 29.6507C30.2953 27.4422 31.5077 24.4469 31.5077 21.3236C31.5077 18.2003 30.2953 15.2049 28.1372 12.9964C25.979 10.7879 23.052 9.54716 19.9999 9.54716Z"
                fill="#BCBCBC"
              />
              <path
                d="M12.1135 20.7038C12.1135 18.5668 12.9431 16.5173 14.4197 15.0062C15.8963 13.4952 17.899 12.6462 19.9873 12.6462C22.0756 12.6462 24.0783 13.4952 25.5549 15.0062C27.0315 16.5173 27.8611 18.5668 27.8611 20.7038C27.8611 22.8408 27.0315 24.8902 25.5549 26.4013C24.0783 27.9124 22.0756 28.7613 19.9873 28.7613C17.899 28.7613 15.8963 27.9124 14.4197 26.4013C12.9431 24.8902 12.1135 22.8408 12.1135 20.7038Z"
                fill="#BCBCBC"
              />
            </svg>
            کرمان، بلوار فیروزه،کوچه 2
          </h4>
          <h4 className="flex items-center text-[#bcbcbc] gap-1 py-1">
            <svg
              width="40"
              height="40"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 5.875C29.0625 5.875 25.3125 14.3125 25.3125 15.25C25.3125 17.125 28.125 19 29.0625 20.875C30 22.75 28.125 24.625 26.25 26.5C25.5188 27.2313 22.5 30.25 20.625 29.3125C18.75 28.375 16.875 25.5625 15 25.5625C14.0625 25.5625 5.625 29.3125 5.625 30.25C5.625 34 8.4375 36.8125 11.25 37.75C14.0625 38.6875 15.9375 38.6875 19.6875 37.75C23.4375 36.8125 26.25 35.875 30.9375 31.1875C35.625 26.5 36.5625 23.6875 37.5 19.9375C38.4375 16.1875 38.4375 14.3125 37.5 11.5C36.5625 8.6875 33.75 5.875 30 5.875Z"
                fill="#BCBCBC"
                stroke="#BCBCBC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="tracking-[0.3em] font-bold text-[#bcbcbc]">
            ۰۹۱۳۰۵۷۱۴۳۶
            </p>
          </h4>
          <h4 className="flex items-center text-[#bcbcbc] gap-1 py-1">
            <svg
              width="35"
              height="35"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.056 0.25C24.3059 0.256 25.4479 0.268 26.4338 0.295999L26.8218 0.309998C27.2698 0.325998 27.7117 0.345998 28.2457 0.369997C30.3736 0.469995 31.8255 0.805987 33.0995 1.29997C34.4194 1.80796 35.5313 2.49595 36.6433 3.60592C37.6606 4.60536 38.4476 5.81481 38.9492 7.14983C39.4431 8.4238 39.7791 9.87577 39.8791 12.0057C39.9031 12.5377 39.9231 12.9797 39.9391 13.4297L39.9511 13.8177C39.9811 14.8016 39.9931 15.9436 39.9971 18.1936L39.9991 19.6855V22.3055C40.004 23.7642 39.9887 25.223 39.9531 26.6814L39.9411 27.0694C39.9251 27.5193 39.9051 27.9613 39.8811 28.4933C39.7811 30.6233 39.4411 32.0732 38.9492 33.3492C38.4476 34.6842 37.6606 35.8937 36.6433 36.8931C35.6439 37.9105 34.4345 38.6974 33.0995 39.1991C31.8255 39.693 30.3736 40.029 28.2457 40.129L26.8218 40.189L26.4338 40.201C25.4479 40.229 24.3059 40.243 22.056 40.247L20.5641 40.249H17.9462C16.4868 40.2542 15.0274 40.2388 13.5685 40.203L13.1805 40.191C12.7057 40.1731 12.2311 40.1524 11.7565 40.129C9.62865 40.029 8.17673 39.693 6.90079 39.1991C5.56652 38.6972 4.3578 37.9102 3.35897 36.8931C2.34091 35.8939 1.55328 34.6844 1.05108 33.3492C0.55711 32.0752 0.221126 30.6233 0.121131 28.4933L0.0611345 27.0694L0.0511352 26.6814C0.0142691 25.223 -0.00239847 23.7643 0.00113754 22.3055V18.1936C-0.00439797 16.7348 0.0102695 15.276 0.0451355 13.8177L0.0591347 13.4297C0.0751339 12.9797 0.0951328 12.5377 0.119132 12.0057C0.219127 9.87577 0.55511 8.4258 1.04908 7.14983C1.55245 5.81426 2.34147 4.60477 3.36097 3.60592C4.35922 2.58904 5.56723 1.80211 6.90079 1.29997C8.17673 0.805987 9.62665 0.469995 11.7565 0.369997C12.2885 0.345998 12.7325 0.325998 13.1805 0.309998L13.5685 0.297999C15.0268 0.262465 16.4855 0.247131 17.9442 0.252L22.056 0.25ZM20.0001 10.2498C17.3481 10.2498 14.8047 11.3033 12.9294 13.1786C11.0541 15.0539 10.0006 17.5974 10.0006 20.2495C10.0006 22.9016 11.0541 25.4451 12.9294 27.3204C14.8047 29.1957 17.3481 30.2493 20.0001 30.2493C22.6522 30.2493 25.1956 29.1957 27.0708 27.3204C28.9461 25.4451 29.9996 22.9016 29.9996 20.2495C29.9996 17.5974 28.9461 15.0539 27.0708 13.1786C25.1956 11.3033 22.6522 10.2498 20.0001 10.2498ZM20.0001 14.2497C20.788 14.2495 21.5682 14.4046 22.2962 14.706C23.0242 15.0074 23.6856 15.4492 24.2428 16.0063C24.8001 16.5633 25.2421 17.2247 25.5437 17.9525C25.8454 18.6804 26.0007 19.4606 26.0008 20.2485C26.001 21.0364 25.8459 21.8167 25.5445 22.5446C25.2431 23.2726 24.8013 23.9341 24.2443 24.4913C23.6872 25.0486 23.0259 25.4906 22.298 25.7923C21.5702 26.0939 20.79 26.2492 20.0021 26.2494C18.4109 26.2494 16.8849 25.6172 15.7597 24.4921C14.6345 23.3669 14.0024 21.8408 14.0024 20.2495C14.0024 18.6583 14.6345 17.1322 15.7597 16.007C16.8849 14.8818 18.4109 14.2497 20.0021 14.2497M30.5016 7.24983C29.8386 7.24983 29.2027 7.51322 28.7339 7.98205C28.2651 8.45088 28.0017 9.08675 28.0017 9.74977C28.0017 10.4128 28.2651 11.0487 28.7339 11.5175C29.2027 11.9863 29.8386 12.2497 30.5016 12.2497C31.1646 12.2497 31.8005 11.9863 32.2693 11.5175C32.7381 11.0487 33.0015 10.4128 33.0015 9.74977C33.0015 9.08675 32.7381 8.45088 32.2693 7.98205C31.8005 7.51322 31.1646 7.24983 30.5016 7.24983Z"
                fill="#BCBCBC"
              />
            </svg>
            <p className="tracking-[0.3em] font-bold text-[#bcbcbc]">
              mari_khalily@
            </p>
          </h4>
        </div>
        <div className="lg:w-1/2 py-8 flex  justify-center lg:justify-end">
          <iframe
            className="rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.1503139955439!2d57.04572072733005!3d30.2848678090132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f0218f27950e8cd%3A0x61a9555ed77cdbb1!2z2KfYs9iq2KfZhiDaqdix2YXYp9mG2Iwg2qnYsdmF2KfZhtiMINqp2YjahtmHINmB24zYsdmI2LLZhyAy2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2s!4v1741512521580!5m2!1sfa!2s"
            width="600"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="dev_mart flex items-center mb-14 px-14 max-md:flex-col max-md:px-0">
          <h4 className="text-[#bcbcbc] text-[20px] max-md:text-center max-md:w-full max-md:mb-2">
            طراحی و توسعه توسط تیم دِو مارت
          </h4>
          <Link href="https://developmart.ir/">
            <Image src="/img/dev_mart.svg" alt="developmart" width={300} height={150} className="h-[50px] w-fit px-2 pt-2" />
          </Link>
        </div>
        <Image
          src="/img/MASSAGE_footer.svg"
          alt="massage"
          width={500}
          height={500}
          className="w-[95%] mx-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;

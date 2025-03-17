import Image from "next/image";
import Link from "next/link";

const Itemsblog = () => {
  return (
    <main className="flex justify-around items-center  flex-wrap gap-16  max-md:flex-col max-lg:gap-14 max-md:gap-14">
      <div className="box w-[400px]  z-10 flex justify-center items-center max-md:w-full">
        <Link href="/Massage">
          <Image
            src="/img/artic1.jpg"
            width={600}
            height={600}
            className="w-[400px]"
          />
          <div className="titles font-bold text-[18px] text-center bg-[#D8BF91]  px-5 py-2">
            <h3>ماساژ: فواید، انواع و راهنمای کامل دریافت بهترین تجربه</h3>
          </div>
        </Link>
      </div>
      <div className="box w-[400px]  z-10 flex justify-center items-center max-md:w-full">
        <Link href="/Toksentorapi">
          <Image
            src="/img/toksen.jpg"
            width={600}
            height={600}
            className="w-[400px]"
          />
          <div className="titles  font-bold text-[16px] text-center bg-[#D8BF91] px-5 py-2">
            <h3>
              توکسن تراپی : راهکاری نوین برای سم‌زدایی بدن و بهبود سلامت
            </h3>
          </div>
        </Link>
      </div>
      <div className="box  w-[400px]  z-10 flex justify-center items-center max-md:w-full">
        <Link href="/Massage-off-fitness">
          <Image
            src="/img/article2.jpg"
            width={600}
            height={600}
            className="w-[400px]"
          />
          <div className="titles  font-bold text-[16px] text-center bg-[#D8BF91] px-5 py-2">
            <h3>
            نقش ماساژ در کاهش وزن و تناسب اندام
            </h3>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Itemsblog;

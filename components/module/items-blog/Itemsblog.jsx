import Image from "next/image";
import Link from "next/link";

const Itemsblog = () => {
  return (
    <div className="flex justify-between items-center gap-5 mt-20 max-md:flex-col">
      <div className="box  w-[50%] h-[200px] z-10 flex justify-center items-center max-md:w-full">
        <Link href="/massage">
          <Image
            src="/img/artic1.jpg"
            width={100}
            height={100}
            className="w-[400px]"
          />
          <div className="titles font-bold text-[18px] text-center bg-[#D8BF91] px-5 py-2">
            <h3>ماساژ: فواید، انواع و راهنمای کامل دریافت بهترین تجربه</h3>
          </div>
        </Link>
      </div>
      <div className="box bg-blue-300 w-[50%] h-[200px] z-10"></div>
    </div>
  );
};

export default Itemsblog;

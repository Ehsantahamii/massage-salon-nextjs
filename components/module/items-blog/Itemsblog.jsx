import Image from "next/image";
import Link from "next/link";

const Itemsblog = () => {
  return (
    <section className="flex justify-around items-center  flex-wrap gap-16  max-md:flex-col max-lg:gap-14 max-md:gap-14">
      <div className="box w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/massage">
          <Image
            src="/img/artic1.jpg"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles font-bold text-[18px] text-justify bg-[#d8bf91d5]  rounded-sm absolute bottom-4 px-5 py-2 max-w-[70%]">
            <h3>ماساژ: فواید، انواع و راهنمای کامل دریافت بهترین تجربه</h3>
          </div>
        </Link>
      </div>
      <div className="box w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Toksentorapi">
          <Image
            src="/img/toksen.jpg"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm  absolute bottom-4 px-5 py-2 max-w-[70%]">
            <h3>
              توکسن تراپی : راهکاری نوین برای سم‌زدایی بدن و بهبود سلامت
            </h3>
          </div>
        </Link>
      </div>
      <div className="box w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Thai-massage">
          <Image
            src="/img/thi-massage.webp"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm  absolute bottom-4 px-5 py-2 max-w-[70%]">
            <h3>
            ماساژ تایلندی: تجربه‌ای عمیق برای آرامش و بهبود سلامتی
            </h3>
          </div>
        </Link>
      </div>
      <div className="box w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Swedish-massage">
          <Image
            src="/img/swedish-massgae.webp"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm  absolute bottom-4 px-5 py-2 max-w-[70%]">
            <h3>
            ماساژ سوئدی: راهکاری مؤثر برای آرامش و بهبود سلامت
            </h3>
          </div>
        </Link>
      </div>
      <div className="box  w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Massage-off-fitness">
          <Image
            src="/img/article2.jpg"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm absolute bottom-4 px-5 py-2 max-w-[70%]">
            <h3>
            نقش ماساژ در کاهش وزن و تناسب اندام
            </h3>
          </div>
        </Link>
      </div>
      <div className="box  w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Ancient-massage">
          <Image
            src="/img/article3.webp"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm  absolute bottom-4 px-5 py-2  max-w-[70%]">
            <h3>
            نقش ماساژ در فرهنگ‌های باستانی: تاریخچه، روش‌ها و تأثیرات
            </h3>
          </div>
        </Link>
      </div>
      <div className="box  w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Chronic-pains">
          <Image
            src="/img/Chronic-pains.avif"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm  absolute bottom-4 px-5 py-2  max-w-[70%]">
            <h3>
            تأثیر ماساژ درمانی بر کاهش دردهای مزمن
            </h3>
          </div>
        </Link>
      </div>
      <div className="box  w-[400px]  z-10 flex justify-center items-center max-md:w-full rounded-lg relative">
        <Link href="/blog/Thai-massage-and-Swedish-massage">
          <Image
            src="/img/photo-1671492241804-c0e02f668bc1.avif"
            width={600}
            height={600}
            className="w-[400px] rounded-lg"
          />
          <div className="titles  font-bold text-[16px] text-justify bg-[#d8bf91d5]  rounded-sm  absolute bottom-4 px-5 py-2  max-w-[70%]">
            <h3>
            تفاوت بین ماساژ تایلندی و ماساژ سوئدی: کدام یک برای شما مناسب‌تر است؟
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Itemsblog;

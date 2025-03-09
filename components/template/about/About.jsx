import Image from "next/image";
import Link from "next/link";

const About = () => {
  const skills = [
    { id: 1, text: "ماساژ رویای آرامش" },
    { id: 2, text: "ماساژ آروماتراپی" },
    { id: 3, text: "ماساژ رویای آرامش" },
    { id: 4, text: "ماساژ گل کویر" },
    { id: 5, text: "تای ماساژ" },
    { id: 6, text: "ماساژ جوانساز صورت" },
    { id: 7, text: "ماساژ بهبودیابی گرید 2" },
    { id: 8, text: "ماساژ بهبود یابی گرید 1" },
    { id: 9, text: "ماساژ دیپ تیشو" },
    { id: 10, text: "ماساژ شمع داغ" },
    { id: 11, text: "ماساژ سنگ داغ" },
    { id: 12, text: "ماساژ هربال" },
  ];
  return (
    <div className="w-full mt-14 mb-14 max-md:mt-[370px] ">
      <div className="about flex justify-between items-center max-lg:gap-5 max-md:flex-col">
        <div className="img_about">
          <Image
            src="/img/img_about.png"
            width={1000}
            height={1500}
            className="w-[460px] h-[500px] rounded-xl"
          />
        </div>
        <div className="content_about flex flex-col leading-10 w-[700px] max-md:w-full">
          <h3 className="text-[50px] font-bold mb-10">درباره من</h3>
          <h1 className="text-[30px] font-bold">مریم خلیلی زاده </h1>
          <p className="font-bold">کارشناسی تربیت بدنی </p>
          <p className="font-bold text-justify max-md:text-[15px]">
            “من به عنوان یک ماساژور حرفه ای با بیش از 4 سال تجربه در زمینه ماساژ
            درمانی و ریلکسیشن، همواره تلاش کرده‌ام تا با استفاده از تکنیک‌های
            مدرن و سنتی، به بهبود سلامت جسمی و روحی مراجعین خود کمک کنم. من به
            دقت به نیازهای هر فرد توجه می‌کنم و برنامه‌های ماساژ شخصی‌سازی شده
            ارائه می‌دهم.”
          </p>
          <div className="title_skill text-[30px] font-bold mt-5">مهارت ها</div>
          <div className="skilss flex justify-around items-center flex-wrap mt-2 gap-1">
            {skills.map((index) => (
              <div key={index.id} className="bg-gray-200 flex justify-around items-center flex-wrap mt-2 py-1 px-2 rounded-md"><h1>{index.text}</h1></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";

const About = () => {
  const skills = [
    { id: 1, text: "ماساژ رویای آرامش" },
    { id: 2, text: "ماساژ آروماتراپی" },
    { id: 3, text: "ماساژ آرامش همراه سنگ داغ" },
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
    <section className="w-full pb-14 ">
      <div className="about flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-8 ">
        <div className="img_about w-[80%] mx-auto lg:w-[40%] relative" data-aos="fade-up">
          <svg className="absolute z-[-1]" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(57, 122, 192, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(20.404, 66.885, 116.941, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M33.5,-19.3C39.3,-9.2,37.1,5.5,30.2,16C23.3,26.5,11.7,32.8,0.5,32.5C-10.6,32.2,-21.3,25.3,-27.3,15.3C-33.4,5.3,-34.9,-7.9,-29.6,-17.7C-24.3,-27.4,-12.1,-33.8,0.8,-34.3C13.8,-34.8,27.6,-29.4,33.5,-19.3Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)"></path>              </svg>
          <Image
            src="/img/maryam-khalili.png"
            width={2524}
            height={4000}
            alt="مریم خلیلی زاده"
            className=" rounded-xl z-[10] drop-shadow "
          />
        </div>
        <div className="content_about flex flex-col leading-10 w-[700px] max-md:w-full max-md:p-2 lg:w-[60%] " data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
          <h2 className="text-[50px] text-center lg:text-right font-bold mb-10">درباره من</h2>
          <h3 className="text-[30px] font-bold">مریم خلیلی زاده </h3>
          <p className="font-bold">کارشناسی تربیت بدنی </p>
          <p className="font-bold text-justify max-md:text-[15px]">
            “من به عنوان یک ماسور حرفه ای با بیش از ۴ سال تجربه در زمینه ماساژ
            درمانی و ریلکسیشن، همواره تلاش کرده‌ام تا با استفاده از تکنیک‌های
            مدرن و سنتی، به بهبود سلامت جسمی و روحی مراجعین خود کمک کنم. من به
            دقت به نیازهای هر فرد توجه می‌کنم و برنامه‌های ماساژ شخصی‌سازی شده
            ارائه می‌دهم.”
          </p>
          <div className="title_skill text-[30px] font-bold pt-5">مهارت ها</div>
          <div className="skilss flex justify-around items-center flex-wrap pt-2 gap-1">
            {skills.map((index) => (
              <div data-aos="fade-up" key={index.id} className="bg-gray-200 flex justify-around items-center flex-wrap mt-2 py-1 px-2 rounded-md"><p>{index.text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

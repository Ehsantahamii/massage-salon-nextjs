import Image from "next/image";
import React from "react";
const Items_services = () => {
  const itemsService = [
    {
      id: 1,
      title: "ماساژ شمع داغ",
      caption:
        "کل بدن با کره های گیاهی که به صورت شمع درآورده شده اند ماساژ داده میشوند که باعث نرمی پوست بدن و رفع کوفتگی و خستگی بدن و بهبود درد مفاصل میشوند",
      price: "1,100",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ سنگ داغ",
      caption:
        "کل بدن با استفاده از تکنیک های سنگ داغ و با سنگ های نرم ماساژ داده میشوند که هم خاصیت ریلکسی و هم رفع درد دارند",
      price: "900",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ  هربال",
      caption:
        "کل بدن با کیسه های گیاهی گرما دیده جهت کنترل درد و کاهش مشکلات تنفسی ماساژ داده میشوند",
      price: "800",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ بهبودیابی گرید 2 ",
      caption:
        "ماساژی پر فشار جهت رفع درد و گرفتگی و چسبندگی عصب عضلات به همراه بادکش و توکسن تراپی",
      price: "850",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ بهبودیابی گرید 1",
      caption:
        "ماساژی پر فشار جهت رفع درد و گرفتگی های عضلانی  به همراه بادکش گرم روی نقاط درد",
      price: "750",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ دیپ تیشو",
      caption:
        "ماساژی پر فشار و عمقی روی بافت عضلات جهت رفع گرفتگی ها و اسپاسم های عضلانی برای ورزشکاران و افرادی که درد عضلانی دارند",
      price: "750",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ گل کویر",
      caption:
        "این نوع ماساژ به طور خاص برای تسکین استرس و اضطراب، افزایش گردش خون و بهبود سلامت پوست طراحی شده است. ترکیب 3 سبک ماساژ به همراه ماساژ تخصصی سر و صورت",
      price: "1,800",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "تای ماساژ ",
      caption:
        "این ماساژ روی تشک مخصوص و روی زمین انجام میشود تنها ماساژیست که بدون روغن و فرد با لباس ماساژ میگیرد ، تکنیک ها ترکیبی از کشش فشار و یوگا میباشند",
      price: "1,200",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ جوانساز صورت",
      caption:
        "ماساژی جهت رفع چین و چروک صورت و روشن شدن پوست به همراه ماساژ سر جهت رفع سردرد و تنش های عصبی",
      price: "350",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ آرامش همراه سنگ داغ",
      caption:
        "ترکیب ماساژ آرامش به همراه سنگ های گرم روی عضلات بزرگ جهت رفع بی خوابی و دردهای عضلانی",
      price: "700",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ آروماتراپی ",
      caption:
        "ماساژ آرامش بخش با استفاده از روغن های با رایحه خوش بو جهت بهبود سیستم عصبی و رفع تنش های عصبی",
      price: "650",
      imgprice: "/img/toman.svg",
    },
    {
      id: 1,
      title: "ماساژ رویای آرامش",
      caption: "حرکات نوازشی و آرام روی کل بدن جهت رفع خستگی و ریلکس کردن بدن",
      price: "580",
      imgprice: "/img/toman.svg",
    },
  ];
  return (
    <div className="items_services  flex justify-between items-center flex-wrap gap-4">
      <div className="content w-full m-auto gap-5 flex justify-between items-center flex-wrap ">
        {itemsService.map((index) => (
          <div
            key={index.id}
            className="content bg-white w-[30%]   rounded-xl flex flex-col p-3  max-md:w-full"
          >
            <h1 className="text-[20px] font-bold">{index.title}</h1>
            <p className="mt-3 text-justify">{index.caption}</p>
            <div className="flex items-center justify-center mt-5 gap-1">
              <span className="font-bold">
                {index.price}
              </span>
              <img src={index.imgprice} className="w-[30px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items_services;

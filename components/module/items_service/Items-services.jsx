import Image from "next/image";
import React from "react";
const ItemsServices = () => {
  const itemsService = [
    {
      id: 1,
      title: "ماساژ شمع داغ",
      caption:
        "کل بدن با کره های گیاهی که به صورت شمع درآورده شده اند ماساژ داده میشوند که باعث نرمی پوست بدن و رفع کوفتگی و خستگی بدن و بهبود درد مفاصل میشوند",
      price: "۱،۱۱۰",
      icon: "/img/toman.svg",
    },
    {
      id: 2,
      title: "ماساژ سنگ داغ",
      caption:
        "کل بدن با استفاده از تکنیک های سنگ داغ و با سنگ های نرم ماساژ داده میشوند که هم خاصیت ریلکسی و هم رفع درد دارند",
      price: "۹۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 3,
      title: "ماساژ  هربال",
      caption:
        "کل بدن با کیسه های گیاهی گرما دیده جهت کنترل درد و کاهش مشکلات تنفسی ماساژ داده میشوند",
      price: "۸۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 4,
      title: "ماساژ بهبودیابی گرید 2 ",
      caption:
        "ماساژی پر فشار جهت رفع درد و گرفتگی و چسبندگی عصب عضلات به همراه بادکش و توکسن تراپی",
      price: "۸۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 5,
      title: "ماساژ بهبودیابی گرید 1",
      caption:
        "ماساژی پر فشار جهت رفع درد و گرفتگی های عضلانی  به همراه بادکش گرم روی نقاط درد",
      price: "۷۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 6,
      title: "ماساژ دیپ تیشو",
      caption:
        "ماساژی پر فشار و عمقی روی بافت عضلات جهت رفع گرفتگی ها و اسپاسم های عضلانی برای ورزشکاران و افرادی که درد عضلانی دارند",
      price: "۷۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 7,
      title: "ماساژ گل کویر",
      caption:
        "این نوع ماساژ به طور خاص برای تسکین استرس و اضطراب، افزایش گردش خون و بهبود سلامت پوست طراحی شده است. ترکیب 3 سبک ماساژ به همراه ماساژ تخصصی سر و صورت",
      price: "۱،۸۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 8,
      title: "تای ماساژ ",
      caption:
        "این ماساژ روی تشک مخصوص و روی زمین انجام میشود تنها ماساژیست که بدون روغن و فرد با لباس ماساژ میگیرد ، تکنیک ها ترکیبی از کشش فشار و یوگا میباشند",
      price: "۱،۲۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 9,
      title: "ماساژ جوانساز صورت",
      caption:
        "ماساژی جهت رفع چین و چروک صورت و روشن شدن پوست به همراه ماساژ سر جهت رفع سردرد و تنش های عصبی",
      price: "۳۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 10,
      title: "ماساژ آرامش همراه سنگ داغ",
      caption:
        "ترکیب ماساژ آرامش به همراه سنگ های گرم روی عضلات بزرگ جهت رفع بی خوابی و دردهای عضلانی",
      price: "۷۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 11,
      title: "ماساژ آروماتراپی ",
      caption:
        "ماساژ آرامش بخش با استفاده از روغن های با رایحه خوش بو جهت بهبود سیستم عصبی و رفع تنش های عصبی",
      price: "۶۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 12,
      title: "ماساژ رویای آرامش",
      caption: "حرکات نوازشی و آرام روی کل بدن جهت رفع خستگی و ریلکس کردن بدن",
      price: "۵۸۰",
      icon: "/img/toman.svg",
    },
  ];
  return (
    <div className="items_services  flex justify-between items-center flex-wrap gap-4">
      <div className="content w-full m-auto gap-5 flex justify-between items-center flex-wrap ">
        {itemsService.map((item) => (
          <div
            key={item.id}
            className="content bg-white w-[30%] shadow  rounded-xl flex flex-col p-3  max-md:w-full"
          >
            <h4 className="text-[20px] font-bold">{item.title}</h4>
            <p className="mt-3 text-justify">{item.caption}</p>
            <div className="flex items-center justify-center mt-5 gap-1">
              <span className="font-bold">
                {item.price}
              </span>
              <img src={item.icon} className="w-[30px]" alt="toman-icon"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsServices;

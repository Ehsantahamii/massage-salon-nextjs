import Image from "next/image";
import React from "react";
const ItemsServices = () => {
  const itemsService = [
    {
      id: 1,
      title: "ماساژ بالاتنه یا پایین تنه",
      caption:
        "ماساژ جهت رفع درد و گرفتگی عضلات و ناهنجاری بدن به همراه بادکش گرم یا سرد و یا سنگ داغ و گان ماساژ",
      price: "۴۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 2,
      title: "ماساژ تخصصی صورت ",
      caption:
        "ماساژ جوانساز و بهبود چروک صورت به همراه ماساژ تخصصی سر جهت بهبود گردش خون و لیفت صورت و روشن شدن پوست",
      price: "۴۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 3,
      title: "ماساژ  نقاط حیاتی",
      caption:
        "یک ماساژ باستانی است که با تحریک نقاط خاصی در کف دست و پا، به بهبود عملکرد اندام ها و سیستم های مختلف بدن کمک می کند",
      price: "۵۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 4,
      title: "ماساژ لمس طبیعت (تاییوگا) ",
      caption:
        "ترکیبی بی نظیر از ماساژ تایلندی و حرکات یوگا. بدن شما همانند یک جلسه یوگا در حال کشیده شدن و حرکت دادن است، بدون هیچ تلاشی از طرف شما . از جمله فواید این ماساژ میتوان به رهاسازی عضلات ، افزایش انعطاف پذیری ، رفع کوتاهی عضلات ، تعادل انرژی در بدن اشاره کرد. ",
      price: "۱,۵۸۰",
      icon: "/img/toman.svg",
    },
    {
      id: 5,
      title: "ماساژ سلطنتی  ",
      caption:
        "با این ماساژ احساس ویژه بودن و برخورداری از بهترین هارا در هر لحظه تجربه میکنید.شما در حال تجربه کردن 3 سبک ماساژ در کنار هم هستید 2 ساعت ماساژ + 20دقیقه ماساژ تخصصی صورت.",
      price: "۲,۵۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 6,
      title: "ماساژ بهبودیابی",
      caption:
        "ماساژی پرفشار و هدفمند جهت رفع درد ،  گرفتگی و چسبندگی عصب و عضلات به همراه بادکش سرد و گرم و ابزارهای مخصوص و کشش‌های روی تخت.",
      price: "۸۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 7,
      title: "ماساژ اسپورت ",
      caption:
        "ماساژی پرفشار جهت ریکاوری عمیق و افزایش انعطاف پذیری عضلات با استفاده از تکنیک‌های تخصصی ماساژ سوئدی",
      price: "۹۸۰",
      icon: "/img/toman.svg",
    },
    {
      id: 8,
      title: " ماساژ سنگ های شفابخش",
      caption:
        "سنگ های آتش فشانی بخشی از گنجینه های زمین هستند.با هر لمس سنگ های داغ ، تنش های عصبی ذوب میشوند و جانی دوباره در رگ هایتان جاری میشود که از فواید این ماساژ می توان به تزریق حس خوب ، افزایش تحرک و انعطاف پذیری ، تقویت سیستم ایمنی ، تسکین دردهای عضلات و مفاصل اشاره کرد.",
      price: "۱,۱۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 9,
      title: "گرمای طلایی",
      caption:
        "گرمای شمع ، رگ های خفته را بیدار می کند و انرژی را در تمام وجودتان جاری میسازد. از فواید این ماساژ میتوان به تغذیه و آب رسانی پوست ، بهبود خواب و افزایش انرژی ، کاهش استرس و اضطراب ، تسکین درد و آرامش ذهن اشاره کرد.",
      price: "۱,۴۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 10,
      title: "ماساژ  پر قو",
      caption:
        "با لمس آرام حرکت دست ، استرس و تنش از بدنتان دور میشود و آرامش عمیقی را به شما هدیه میدهد. از جمله فواید این ماساژ میتوان به کاهش استرس و اضطراب ، افزایش انرژی   ، تقویت سیستم ایمنی بدن  ، بهبود خواب  اشاره کرد.",
      price: "۷۰۰",
      icon: "/img/toman.svg",
    },
    {
      id: 11,
      title: "جادوی رایحه ها  ",
      caption:
        "سفری است به دنیای رایحه ها ، جایی که هر رایحه داستانی از آرامش ، انرژی و شفا را روایت می کند.از جمله فواید این ماساژ میتوان به کاهش استرس و اضطراب ، افزایش آگاهی و تمرکز ، افزایش انرژی و بهبود خلق و خو اشاره کرد.",
      price: "۸۵۰",
      icon: "/img/toman.svg",
    },
    {
      id: 12,
      title: "آرامش گرم  ",
      caption:
        " تلفیق ماساژ برقو و سنگ های آرامش بخش بر روی بعضی نواحی بدن . از جمله فواید این ماساژ میتوان به تسکین درد عضلات ، بهبود درد مفاصل ، بهبود خواب ، افزایش سطح ایمنی بدن اشاره کرد.",
      price: "۸۰۰",
      icon: "/img/toman.svg",
    },
  ];
  return (
    <div className="items_services  flex justify-between items-center flex-wrap gap-4">
      <div className="content w-full m-auto gap-5 flex justify-between items-center flex-wrap ">
        {itemsService.map((item) => (
          <div
            key={item.id}
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-easing="ease-in"
            className="content bg-white w-[30%] h-[240px] shadow  rounded-xl flex flex-col items-center justify-center p-3  max-md:w-full" >
            <h4 className="text-[20px] font-bold">{item.title}</h4>
            <p className="mt-3 text-justify text-[14px]">{item.caption}</p>
            <div className="flex items-center justify-center mt-5 gap-1 ">
              <span className="font-bold">{item.price}</span>
              <img src={item.icon} className="w-[30px]" alt="toman-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsServices;

import Image from "next/image";

const Services = () => {
  return (
    <main className=" w-full  mt-14 mb-14">
      <div className="title_services text-center">
        <h1 className="text-[50px] font-bold">انواع خدمات</h1>
      </div>
      <div className="content_services flex justify-between flex-row-reverse  mt-10 max-md:flex-col">
        <div className="img_servisec">
          <img
            src="/img/Vector_services.svg"
            className="absolute mt-[-120px]  z-[-1] max-md:hidden"
          />
          <Image
            src="/img/img_skills.svg"
            width={550}
            height={550}
            className="rounded-lg max-md:w-full"
          />
        </div>
       خدمات
      </div>
    </main>
  );
};

export default Services;

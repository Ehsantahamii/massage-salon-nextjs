import Itemsblog from "@/components/module/items-blog/Itemsblog";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="weblog w-full m-auto">
      <main>
        <div className="title flex flex-col items-center text-[50px] text-center font-bold mt-[100px] max-md:mt-0 max-md:text-[30px]">
          <h1> هرآنچه باید بدانید!</h1>
          <div className="flex items-center gap-1">
            <span className="text-[15px]">وبلاگ/</span>
            <Link href="/" className="text-[15px] text-[#D8BF91] z-10">صفحه اصلی</Link>
          </div>
        </div>
        <div className="title_home flex items-center  w-[1000px] max-lg:w-[550px] max-md:w-[250px] mt-10 mx-auto">
            <h3 className="text-[25px] font-bold">دسته بندی</h3>
            <img src="/img/Vectors_blog.svg" className="w-[30px]" />
        </div>
        <div className="content_blog bg-red-500 w-[1000px]  mx-auto mt-8 mb-8 max-lg:w-[550px] max-md:w-[250px]">
          <Itemsblog/>
        </div>
      </main>
      <img src="/img/Vector_blog.svg" alt="" className="w-[1528px] mt-[-17rem] max-md:mt-[-5rem]" />
    </div>
  );
};

export default Blog;

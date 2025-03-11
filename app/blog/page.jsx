import Link from "next/link";

const Blog = () => {
  return (
    <div className="weblog w-full m-auto">
      <main>
        <div className="title text-[50px] text-center font-bold mt-[100px] max-md:mt-0 max-md:text-[30px]">
          <h1> هرآنچه باید بدانید!</h1>
        </div>
        <div className="title_home flex justify-between items-center bg-blue-800 w-[20px] mt-5">
            <h3>دسته بندی</h3>
            <Link href="/">صفحه اصلی</Link>
        </div>
      </main>
      <img src="/img/Vector_blog.svg" alt="" className="w-[1528px] mt-[-15rem] max-md:mt-[-5rem]" />
    </div>
  );
};

export default Blog;

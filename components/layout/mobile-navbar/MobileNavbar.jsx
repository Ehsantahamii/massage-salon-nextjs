"use client"

import Link from "next/link";

const MobileNavbar = () => {
    return (
        <aside className="w-full h-[100vh] bg-[#f5f5f5] fixed top-0 left-0 z-[99999999] flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-5 items-center">
                <li><Link href="/" className="text-[20px] font-bold ">صفحه اصلی</Link></li>
                <li><Link href="/#service" className="text-[20px] font-bold">خدمات</Link></li>
                <li><Link href="/contact-me" className="text-[20px] font-bold">ارتباط با من</Link></li>
                <li><Link href="/blog" className="text-[20px] font-bold ">بلاگ</Link></li>
            </ul>

        </aside>
    );
};

export default MobileNavbar;
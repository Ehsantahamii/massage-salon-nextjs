"use client";
import Link from "next/link"
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
    const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <main className="navbar flex justify-between items-center my-[35px]">
        {/* logo */}
        <div className="logo_nav"><h1 className="font-bold">LOGO</h1></div>
        {/* menu */}
        <div
          className="nav_toogle flex-1 mr-5 md:hidden cursor-pointer  text-[25px] text-[#2a2a2a]"
          onClick={() => setOpenMenu(!OpenMenu)}
        >
          {OpenMenu ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={
            OpenMenu
              ? "menu flex gap-[30px] items-center  justify-start "
              : "menu flex gap-[40px] items-center  justify-start  max-[768px]:hidden"
          }>
            <li><Link href="/" className="text-[20px] font-bold">صفحه اصلی</Link></li>
            <li><Link href="/" className="text-[20px] font-bold">خدمات</Link></li>
            <li><Link href="/" className="text-[20px] font-bold">ارتباط با ما</Link></li>
            <li><Link href="/" className="text-[20px] font-bold">بلاگ</Link></li>
        </ul>
        {/* phone */}
        <div className="phone flex items-center gap-3">
            <span className="text-[20px] font-normal">09130571436</span>
            <FaPhone />
        </div>
    </main>
  )
}

export default Navbar
"use client";
import Link from "next/link"
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import Image from "next/image";
const Navbar = () => {
    const [OpenMenu, setOpenMenu] = useState(false);
    const nulls = () => {
      setOpenMenu(null);
    }
  return (
    <nav className="navbar flex justify-between items-center my-[25px]">
        {/* logo */}
        <div className="logo_nav"><Image src="/img/logo.png" width={140} height={150} className=""/></div>
        {/* menu */}
        <div
          className="nav_toogle flex-1 mr-5 md:hidden cursor-pointer  text-[25px] text-[#2a2a2a]"
          onClick={() => setOpenMenu(!OpenMenu)}
        >
          {OpenMenu ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={
            OpenMenu
              ? "menu flex gap-[50px] items-center  justify-start "
              : "menu flex gap-[40px] items-center    max-[768px]:hidden"
          }>
            <li><Link href="/" className="text-[20px] font-bold" onClick={nulls}>صفحه اصلی</Link></li>
            <li><Link href="/" className="text-[20px] font-bold" onClick={nulls}>خدمات</Link></li>
            <li><Link href="/contact-me" className="text-[20px] font-bold" onClick={nulls}>ارتباط با من</Link></li>
            <li><Link href="/" className="text-[20px] font-bold" onClick={nulls}>بلاگ</Link></li>
        </ul>
        {/* phone */}
        <div className="phone flex items-center gap-3 max-md:hidden">
            <span className="text-[20px] font-normal">09130571436</span>
            <FaPhone />
        </div>
    </nav>
  )
}

export default Navbar
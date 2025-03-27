"use client";
import Link from "next/link"
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import './Navbar.css'
import Image from "next/image";
import MobileNavbar from "../mobile-navbar/MobileNavbar";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar flex justify-between items-center my-[25px]">
      <MobileNavbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {/* logo */}
      <div className="logo-nav"><Image src="/img/logo.png" width={140} height={150} alt="menu-vector" className="" /></div>
      {/* menu */}

      <ul className=" gap-12 items-center hidden md:flex " >
        <li><Link href="/" className="text-[20px] font-bold ">صفحه اصلی</Link></li>
        <li><Link href="/#service" className="text-[20px] font-bold " >خدمات</Link></li>
        <li><Link href="/contact-me" className="text-[20px] font-bold ">ارتباط با من</Link></li>
        <li><Link href="/blog" className="text-[20px] font-bold ">مجله</Link></li>
      </ul>
      {/* phone */}
      <div className="phone flex items-center gap-3 ">
        <a href="tel:+989130571436" className="max-md:hidden text-[20px] font-normal">۰۹۱۳۰۵۷۱۴۳۶</a>
        <FaPhone className="max-md:hidden" />
        <FaBars className="md:hidden cursor-pointer" size={20} onClick={() => setOpenMenu(!openMenu)} />
      </div>
    </nav>
  )
}

export default Navbar
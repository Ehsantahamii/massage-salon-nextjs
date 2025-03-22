"use client"

import Link from "next/link";
import "../navbar/Navbar.css";
import { FaTimes } from "react-icons/fa";

const MobileNavbar = ({ openMenu, setOpenMenu }) => {
    return (
        <aside className={`${openMenu ? "mobile-nav-open" : "mobile-nav"} w-[75vw] h-[100vh] bg-[#f5f5f5] fixed top-0  z-[99999] flex lg:hidden flex-col justify-center items-center`}>
            <FaTimes size={26}  className="absolute cursor-pointer top-4 right-4" onClick={() => setOpenMenu(false)}/>
            <ul className="flex flex-col gap-10 items-center">
                <li><Link href="/" className="text-[20px] font-bold" onClick={() => setOpenMenu(false)}>صفحه اصلی</Link></li>
                <li><Link href="/#service" className="text-[20px] font-bold" onClick={() => setOpenMenu(false)}>خدمات</Link></li>
                <li><Link href="/contact-me" className="text-[20px] font-bold" onClick={() => setOpenMenu(false)}>ارتباط با من</Link></li>
                <li><Link href="/blog" className="text-[20px] font-bold " onClick={() => setOpenMenu(false)}>مجله</Link></li>
            </ul>

        </aside>
    );
};

export default MobileNavbar;
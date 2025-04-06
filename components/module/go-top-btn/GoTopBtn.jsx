"use client"

import Link from "next/link";
import { useState } from "react";
// import "./GoTopBtn.css"
const GoTopBtn = () => {


    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setVisible(true)
        }
        else if (scrolled <= 400) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);


    return (
        <button style={{ display: visible ? 'inline' : 'none' }}
            onClick={scrollToTop}
            className="go-top w-10 h-10 lg:w-12 lg:h-12 bottom-8 transition-colors right-4 lg:bottom-12 lg:right-4 rotate-[270deg] cursor-pointer fixed z-30  fill-mainBlue " >

            <svg className=" w-full h-full transition-colors" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" >
                <g>
                    <g>
                        <path class="st0" d="M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122
			c-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6
			C252.9,510.4,222.4,510.4,203.6,491.6z"></path>
                    </g>
                    <g>
                        <path class="st0" d="M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2
			c-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9
			C84.4,414.7,53.9,414.7,35.1,395.9z"></path>
                    </g>
                </g>
            </svg>

        </button>
    );
};

export default GoTopBtn;
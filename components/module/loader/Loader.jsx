"use client"

import Image from "next/image";

const Loader = () => {
    return (
        <section className="fixed bg-[#eeeeee] top-0 left-0 w-full h-[100dvh] z-[99999999] flex justify-center items-center">
            <Image src="/img/loader-logo.svg" className="w-[70px]  lg:w-[580px]" width={300} height={300} alt="loader-logo-svg" />
            <Image src="/img/organic-label.gif" className="w-[70px] h-[70px] lg:w-[140px] lg:h-[140px] absolute bottom-4 right-4" width={400} height={400} alt="loader-gif" />
        </section>
    );
};

export default Loader;
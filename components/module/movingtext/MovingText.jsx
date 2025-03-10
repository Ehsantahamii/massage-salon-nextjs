"use client"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const MovingText = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.moving-text', {
            scrollTrigger: {
                trigger: '.moving-text',
                start: 'top top',
                end: '+=50%',
                scrub: true,
                smooth: 2,
                speed: 6,
                effects: true,
                pin: true,
            },
        });
    });
    return (
        <img
            src="/img/MASSAGE.svg"
            width={1280}
            height={204}
            className="moving-text w-[85%] mx-auto mt-[-80px] max-md:mt-[-400px]"
        />);
};

export default MovingText;
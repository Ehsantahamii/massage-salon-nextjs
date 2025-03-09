"use client"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const MovingText = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.moving-text', {
            translateY: 2,
            ease: 'bounce.in',
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.moving-text',
                start: 'top top',
                end: '+=20%',
                scrub: true,
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
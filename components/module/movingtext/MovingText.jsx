"use client"
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const MovingText = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.moving-text', {
            scrollTrigger: {
                trigger: '.moving-text',
                start: 'top top',
                end: '+=20%',
                scrub: true,
                smooth: 10,
                speed: 1,
                effects: true,
                pin: true,
                animate: true
            },
        });
    });
    return (
        <img
            src="/img/MASSAGE.svg"
            width={1280}
            height={204}
            className="moving-text w-[90vw] lg:w-[85vw] mx-auto mt-[-6.5rem]"
        />);
};

export default MovingText;
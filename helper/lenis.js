"use client";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const LenisConfig = () => {
  // const lenis = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <></>;
};

export default LenisConfig;


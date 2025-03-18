"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

const LenisConfig = () => {
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

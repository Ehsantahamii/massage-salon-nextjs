"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      anchorPlacement:"top-bottom",
    });
  }, []);

  return <></>;
}

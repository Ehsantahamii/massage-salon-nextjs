"use client";
import { useEffect } from "react";
import "sal.js/dist/sal.css";
import sal from "sal.js";

const SalProvider = ({ children }) => {
  useEffect(() => {
    sal({
      threshold: 0.2, // 20% of element needs to be visible
      once: false, // Animation runs only once
    });
  }, []);

  return <>{children}</>;
};

export default SalProvider;

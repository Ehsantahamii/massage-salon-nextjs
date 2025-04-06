"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "sal.js/dist/sal.css";
import sal from "sal.js";
import { usePathname } from "next/navigation";

const SalProvider = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    sal({
      threshold: 0.2, // 20% of element needs to be visible
      once: true, // Animation runs only once
    });
  }, [pathname]);

  return <>{children}</>;
};

export default SalProvider;

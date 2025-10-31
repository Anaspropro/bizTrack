"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    // Only import and initialize AOS on the client side after mount
    const initAOS = async () => {
      if (typeof window === "undefined") return;
      const AOS = (await import("aos")).default;
      if (AOS && typeof AOS.init === "function") {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
        mirror: false,
        disable: false,
      });
    };

    initAOS();
  }, []);

  return null;
};

export default AOSInit;

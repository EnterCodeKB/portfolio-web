"use client";

import { useEffect } from "react";

function Hamburger() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMeny = document.querySelector(".nav-menu");

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      navMeny.classList.toggle("active");
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      navMeny.classList.remove("active");
    };

    hamburger.addEventListener("click", toggleMenu);
    document
      .querySelectorAll(".nav-link")
      .forEach((n) => n.addEventListener("click", closeMenu));

    // Cleanup
    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document
        .querySelectorAll(".nav-link")
        .forEach((n) => n.removeEventListener("click", closeMenu));
    };
  }, []);

  return null; // komponenten renderar inget
}

export default Hamburger;

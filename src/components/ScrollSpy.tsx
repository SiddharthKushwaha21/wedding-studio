"use client";

import { useEffect } from "react";

const sectionIds = [
  "home",
  "about",
  "services",
  "portfolio",
  "packages",
  "testimonials",
  "contact",
];

export default function ScrollSpy() {
  useEffect(() => {
    const updateHash = () => {
      // Navbar height ke liye offset
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = id;
        }
      }

      const newHash = `#${currentSection}`;

      if (window.location.hash !== newHash) {
        window.history.replaceState(null, "", newHash);
      }
    };

    // Initial call
    updateHash();

    // Scroll event
    window.addEventListener("scroll", updateHash, {
      passive: true,
    });

    // Resize event
    window.addEventListener("resize", updateHash);

    return () => {
      window.removeEventListener("scroll", updateHash);
      window.removeEventListener("resize", updateHash);
    };
  }, []);

  return null;
}
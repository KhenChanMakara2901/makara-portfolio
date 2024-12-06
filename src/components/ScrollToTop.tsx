"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center justify-center w-14 h-14 cursor-pointer rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
        >
          <span className="w-3 h-3 border-t-2 border-l-2 border-white rotate-45"></span>
        </div>
      )}
    </div>
  );
}

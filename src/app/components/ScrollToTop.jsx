"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="fixed bottom-25 right-5 z-50 flex items-center gap-1 px-3 py-2 bg-indigo-900 text-white text-sm font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FaAngleUp size={16} />
          TOP
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
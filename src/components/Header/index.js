"use client";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex w-full justify-center fixed top-0 transition-colors duration-300`}>
      <div
        className={`mx-auto ${
          isScrolled ? "menuGradient-scrolled" : "menuGradient bg-opacity-50"
        } fixed top-[70px] min-w-[1245px] flex justify-between items-center rounded-[10px] px-[35px] py-4 transition-all`}
      >
        <img src="/assets/lynx-icon.svg" className="absolute left-1/2 -translate-x-1/2" />
        <ul
          className={`p-0 list-none flex justify-between items-center text-xs uppercase w-1/2 pr-[115px] transition-colors duration-300 ${
            isScrolled ? "text-[#070B36]" : "text-white"
          }`}
        >
          <li>
            <a>Cat Skiing</a>
          </li>
          <li>
            <a>Ski Touring</a>
          </li>
          <li>
            <a>Book a Trip</a>
          </li>
        </ul>
        <ul
          className={`p-0 list-none flex justify-between items-center text-xs uppercase w-1/2 pl-[115px] transition-colors duration-300 ${
            isScrolled ? "text-[#070B36]" : "text-white"
          }`}
        >
          <li>
            <a>Summer</a>
          </li>
          <li>
            <a>Info Pages</a>
          </li>
          <li>
            <a>Merch</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

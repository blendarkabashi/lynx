"use client";
import { useEffect, useState } from "react";
import HamburgerIcon from "../Icons/Hamburger";

const PhoneMenuItem = ({ label, onClick }) => (
  <li className="relative w-full text-center py-3 before:absolute before:left-0 before:right-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent">
    <a href="#" onClick={onClick}>
      {label}
    </a>
  </li>
);

const HeaderMenu = ({ isScrolled }) => (
  <>
    <ul
      className={`hidden tablet:flex p-0 list-none justify-between items-center text-[8px] desktop:text-sm uppercase w-1/2 pr-[115px] transition-colors duration-300 ${
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
      className={`hidden tablet:flex p-0 list-none justify-between items-center text-[8px] desktop:text-sm uppercase w-1/2 pl-[115px] transition-colors duration-300 ${
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
  </>
);

const MobileMenu = ({ setShowMenu }) => (
  <div className="fixed inset-0 z-[100] bg-[#070B36] text-white flex flex-col p-[38px] overflow-y-auto">
    <div className="flex justify-between items-center mb-10">
      <img src="/assets/lynx-icon.svg" className="w-[45px] tablet:w-[40px] desktop:w-auto" />
      <a href="#" onClick={() => setShowMenu(false)} className="block tablet:hidden">
        <HamburgerIcon color="#F2BB05" />
      </a>
    </div>
    <ul className="flex flex-col items-center text-lg w-full space-y-10">
      {["Cat Skiing", "Ski Touring", "Book a Trip", "Summer", "Info Pages", "Merch"].map((label) => (
        <PhoneMenuItem key={label} label={label} onClick={() => setShowMenu(false)} />
      ))}
    </ul>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <>
      {/* Main header */}
      <div className={`flex w-full justify-center fixed top-0 transition-colors duration-300 px-5 z-50`}>
        <div
          className={`min-h-[42px] mx-5 desktop:mx-auto ${
            isScrolled ? "menuGradient-scrolled" : "menuGradient bg-opacity-50"
          }  fixed top-[70px] left-0 right-0 tablet:max-w-[1245px] flex justify-between items-center rounded-[10px] px-[35px] py-4 transition-all`}
        >
          <img
            src="/assets/lynx-icon.svg"
            className="w-[45px] tablet:w-[40px] desktop:w-auto absolute left-0 tablet:left-1/2 tablet:-translate-x-1/2"
          />
          <HeaderMenu isScrolled={isScrolled} />
          <a href="#" onClick={() => setShowMenu(true)} className="block tablet:hidden absolute right-5">
            <HamburgerIcon />
          </a>
        </div>
      </div>

      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;

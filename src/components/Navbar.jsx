import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 z-30 w-full py-6 flex top- left-0 bg-slate-900 justify-between items-center h-24 text-white mx-auto px-4">
      <div className="flex items-center justify-between gap-1 mx-6 px-4">
        <svg
          width="38"
          height="30"
          viewBox="0 0 94 108"
          fill="#E1986F"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.0434 101.423L55.3836 102.908H57.384H72.616H82.8456L75.9332 95.3673L37.8715 53.8453L75.5678 12.2124L82.377 4.69202H72.232H57.512H55.4954L54.1533 6.19722L25.148 38.7274V9.19202V4.69202H20.648H9H4.5V9.19202V98.408V102.908H9H20.648H25.148V98.408V69.4065L54.0434 101.423Z"
            stroke="#FFC132"
            stroke-width="9"
          />
        </svg>
        <svg
          width="30"
          height="10"
          viewBox="0 0 71 29"
          fill="rgb(96 165 250 / var(--tw-text-opacity))"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65.515 9.56802V5.06802H61.015H9.94299H5.44299V9.56802V19.424V23.924H9.94299H61.015H65.515V19.424V9.56802Z"
            stroke="#FFC132"
            stroke-width="9"
            className="m-0"
          />
        </svg>

        <h1 className="w-full text-4xl font-bold text-[#147bf9]">Portfolio</h1>
      </div>
      <ul className="hidden md:flex font-bold text-xl">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Portfolio</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <CiMenuKebab size={23} /> : <IoClose size={23} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl p-3 font-bold text-[#00df9a]">
          Portfolio
        </h1>

        <ul className="pt-4 uppercase font-bold">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Services</li>
          <li className="p-4 border-b border-gray-600">Portfolio</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

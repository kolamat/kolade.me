import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
let kolade;

const Navbar = () => {
  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-auto">
      <div className="fixed flex top-0 left-0 bg-slate-900 justify-between items-center h-24 text-white mx-auto px-4 w-full">
        <h1 className="w-full text-4xl font-bold text-[#00df9a]">Portfolio</h1>
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
    </div>
  );
};

export default Navbar;

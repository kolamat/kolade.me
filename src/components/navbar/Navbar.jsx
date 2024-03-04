import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeBckground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBckground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <a href="/" className="flex">
        <div className="flex items-center justify-between gap-1 sm:ml-6 md:pl-4">
          <svg
            className="hover:fill-[#147bf9] hover:stroke-[#E1986F] transition duration-300"
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

          {/* <h1 className="w-full text-4xl font-bold text-[#147bf9]">
            Portfolio
          </h1> */}
        </div>
      </a>
      <ul className="hidden md:flex font-bold text-xl">
        <a href="/">
          <li className="p-4">Home</li>
        </a>
        <a href="#about">
          <li className="p-4">About</li>
        </a>
        <a href="#services">
          <li className="p-4">Services</li>
        </a>
        <a href="#portfolio">
          <li className="p-4">Portfolio</li>
        </a>
        <a href="#contact">
          <li className="p-4">Contact</li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <CiMenuKebab size={23} /> : <IoClose size={23} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl p-3 font-bold text-[#00df9a]">
          <svg
            className="hover:fill-[#147bf9] hover:stroke-[#E1986F] transition duration-300"
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
        </h1>

        <ul className="pt-4 uppercase font-bold">
          <a href="/">
            <li className={`${}`}>Home</li>
          </a>
          <a href="#about">
            <li className={`${}`}>About</li>
          </a>
          <a href="#services">
            <li className={`${}`}>Services</li>
          </a>
          <a href="#portfolio">
            <li className={`${}`}>Portfolio</li>
          </a>
          <a href="#contact">
            <li className="p-4">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

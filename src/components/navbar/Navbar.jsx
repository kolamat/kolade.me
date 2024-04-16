import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
// import menu from "./index";
// import Link from "./index";
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
      setIsOpen(!isOpen);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBckground);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Clicked outside");
      const element = document.getElementById("kolade");
      console.log("Element:", element);
      if (element && !element.contains(event.target)) {
        console.log("Closing element");
        setIsOpen(false);
      }
    };

    //   useEffect(() => {
    //     const handleClickOutside = (e) => {
    //       console.log("Element Clicked");
    //       if (!document.getElementById("kolade").contains(e.target)) {
    //         console.log("Closing element");
    //         setIsOpen(false);
    //       }
    //     };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      console.log("Cleanup");
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //   const handleToggle = () => {
  //     setIsOpen(!isOpen);
  //   };

  const navDesktop =
    "p-4 hover:text-[#147bf9] hover:font-extrabold hover:underline ease-in duration-200";

  const navMobile =
    "p-4 border-b border-gray-600 hover:text-[#147bf9] hover:font-extrabold hover:underline ease-in duration-200";

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <a href="/" title="HomePage" className="flex">
        <div
          className={`flex items-center justify-between gap-1 sm:ml-6 md:pl-4`}
        >
          <svg
            className={`hover:fill-[#147bf9] hover:stroke-[#E1986F] transition duration-300`}
            width="38"
            height="30"
            viewBox="0 0 94 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.0434 101.423L55.3836 102.908H57.384H72.616H82.8456L75.9332 95.3673L37.8715 53.8453L75.5678 12.2124L82.377 4.69202H72.232H57.512H55.4954L54.1533 6.19722L25.148 38.7274V9.19202V4.69202H20.648H9H4.5V9.19202V98.408V102.908H9H20.648H25.148V98.408V69.4065L54.0434 101.423Z"
              stroke="#fff"
              stroke-width="9"
            />
          </svg>

          {/* <h1 className="w-full text-4xl font-bold text-[#147bf9]">
            Portfolio
          </h1> */}
        </div>
      </a>

      {/* <menu className="hidden md:flex font-[300] text-md">
        <ul className="hidden md:flex font-[300] text-md">
          {Menus.map((menu) => (
            <li key={menu} className={`${navDesktop}`}>
              {menu}
            </li>
          ))}
        </ul>
      </menu> */}
      <ul className={`hidden md:flex font-[300] text-md`}>
        <a href="#hero">
          <li className={`${navDesktop}`}>Home</li>
        </a>
        <a href="#about">
          <li className={`${navDesktop}`}>About</li>
        </a>
        <a href="#services">
          <li className={`${navDesktop}`}>Services</li>
        </a>
        <a href="#portfolio">
          <li className={`${navDesktop}`}>Portfolio</li>
        </a>
        <a href="#contact">
          <li className={`${navDesktop}`}>Contact</li>
        </a>
      </ul>
      <div onClick={handleNav} className={`block md:hidden cursor-pointer`}>
        {!nav ? <CiMenuKebab size={23} /> : <IoClose size={23} />}
      </div>
      <div
        id="kolade"
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className={`w-full text-3xl p-3 font-bold text-[#00df9a]`}>
          <svg
            className={`hover:fill-[#147bf9] hover:stroke-[#E1986F] transition duration-300`}
            width="38"
            height="30"
            viewBox="0 0 94 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.0434 101.423L55.3836 102.908H57.384H72.616H82.8456L75.9332 95.3673L37.8715 53.8453L75.5678 12.2124L82.377 4.69202H72.232H57.512H55.4954L54.1533 6.19722L25.148 38.7274V9.19202V4.69202H20.648H9H4.5V9.19202V98.408V102.908H9H20.648H25.148V98.408V69.4065L54.0434 101.423Z"
              stroke="#fff"
              stroke-width="9"
            />
          </svg>
        </h1>

        <ul className={`pt-4 uppercase font-[500]`}>
          <>
            <a href="#hero">
              <li className={`${navMobile}`}>Home</li>
            </a>
          </>
          <>
            <a href="#about">
              <li className={`${navMobile}`}>About</li>
            </a>
          </>
          <>
            <a href="#services">
              <li className={`${navMobile}`}>Services</li>
            </a>
          </>
          <>
            <a href="#portfolio">
              <li className={`${navMobile}`}>Portfolio</li>
            </a>
          </>
          <>
            <a href="#contact">
              <li className={`${navMobile} border-b-0`}>Contact</li>
            </a>
          </>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

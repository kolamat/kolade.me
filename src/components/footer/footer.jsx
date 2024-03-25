import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { HiPhone } from "react-icons/hi2";

// import { FaArrowUp } from "react-icons/fa";

const footerLinkStyles =
  "rounded-lg bg-[#60a5fa] text-black hover:text-white hover:bg-slate-900 hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1";
const footerLinkIcon =
  "bg-[#60a5fa] hover:bg-slate-800 rounded-full p-1 transition duration-500";

function footer() {
  return (
    <section className="bg-slate-900">
      <div className="mb-8">
        <div className="h-[1px] bg-[#0ef] rounded-sm flex justify-center" />
        <div className=" text-white flex justify-between sm:px-8 pt-8 tracking-wide">
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
              {/* <img src={logo} alt="logo" /> */}
              <a href="/" title="HomePage" className="flex w-6">
                <svg
                  className="hover:fill-[#147bf9] mt-2"
                  width="50"
                  height="28"
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
              </a>
              <p className="my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                gallery of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="md:flex md:flex-col text-center items- mt-16 basis-1/4 grid grid-cols-1 md:mt-2">
              <h4 className="font-bold mb-5 md:m-0">Links</h4>
              <div className="flex gap-7 md:gap-0 md:mt-4 md:flex-col items-center justify-between">
                <p className="my-2">
                  <a
                    className="rounded-lg text-black hover:text-white hover:transition-transform ease-in-out hover:bg-opacity-100 hover:translate-x-1"
                    href="https://github.com/kolamat"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                  >
                    <FaGithub size={30} className={`${footerLinkIcon}`} />
                  </a>
                </p>
                <p className="my-2">
                  <a
                    className={`${footerLinkStyles}`}
                    href="https://www.linkedin.com/in/kolade-matanmi-a695792a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                  >
                    <FaLinkedin size={30} className={`${footerLinkIcon}`} />
                  </a>
                </p>
                <p className="my-2">
                  <a
                    className={`${footerLinkStyles}`}
                    href="https://www.instagram.com/matiness200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <FaInstagram size={30} className={`${footerLinkIcon}`} />
                  </a>
                </p>
                <p className="my-2">
                  <a
                    className={`${footerLinkStyles}`}
                    href="https://www.facebook.com/kolade.matanmi.92"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <FaFacebook size={30} className={`${footerLinkIcon}`} />
                  </a>
                </p>
                <p className="my-2">
                  <a
                    className={`${footerLinkStyles}`}
                    href="https://twitter.com/koladeMOK"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <FaXTwitter size={30} className={`${footerLinkIcon}`} />
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-16 basis-1/4 md:mt-2">
              <h4 className="font-bold">Contact Us</h4>
              <p className="my-5">
                <SiMicrosoftoutlook /> kolade2001@outlook.com
              </p>
              <p className="my-5">
                <SiGmail />
                matanmidupe004@gmail.com
              </p>
              <p className="my-5">
                <HiPhone />
                (+234) 8150672809
              </p>
            </div>
          </div>
          {/* 
      <div className="bg-[#0ef] w-4">
        <a href="#home" title="Toggle-Top">
          <FaArrowUp />
        </a>
      </div> */}
        </div>
      </div>
      <p className="block sticky bottom-[1px] text-white text-center my- bg-slate-950 text-[13px]">
        &copy; 2024&nbsp;
        <strong>
          <span>M.J.K, </span>
        </strong>
        inc.&nbsp;All Rights Reserved.
      </p>
    </section>
  );
}

export default footer;

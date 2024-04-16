import laptopCard from "../../assets/laptop-card.PNG";
import makeUp from "../../assets/Makeup.PNG";
import mokLogo from "../../assets/mok-logo.PNG";
import mokLogo2 from "../../assets/mok-logo2.PNG";
import twoIphones from "../../assets/two-iphones.PNG";

const imageStyles = "rounded-2xl w-[310px] h-[300px] lg:w-[300px]";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className={`w-full md:items-center m- text-white py-[7rem] md:px-4 bg-[#000300]`}
    >
      <h1
        className={`text-white md:text-[2.8rem] text-4xl text-center font-bold py-1 sticky top-12`}
      >
        Latests{" "}
        <span className="text-[#60a5fa] text-center underline">Project</span>
      </h1>
      <div
        className={`grid lg:grid-cols-3 md:grid-cols-2 mx-6 gap-2 box-border py-11 px-4 place-items-center`}
      >
        <img className={`${imageStyles} z--10`} src={mokLogo} alt="Kolade" />
        <img
          className={`${imageStyles}`}
          src={twoIphones}
          alt="Kolade"
          loading="lazy"
        />
        <img
          className={`${imageStyles}`}
          src={mokLogo2}
          alt="Kolade"
          loading="lazy"
        />
        <img
          className={`${imageStyles}`}
          src={laptopCard}
          alt="Kolade"
          loading="lazy"
        />
        <img
          className={`${imageStyles}`}
          src={makeUp}
          alt="Kolade"
          loading="lazy"
        />
        <div className={`relative inline-block`}>
          <p
            className={`p-5 absolute z-30 flex
    h-full w-full items-center justify-center flex-col
    whitespace-normal text-center text-[#6a60fa]
    opacity-0 transition duration-500 hover:opacity-90 font-bold text-2xl bg-black rounded-lg`}
          >
            <span className={`underline`}> Logo_Design</span>
            <a
              className={`font-medium text-lg text-[#60a8fa] no-underline hover:underline`}
              href="/"
            >
              Contact for your business-logo designs
            </a>
          </p>
          <svg
            className={`hover:fill-[#60a5fa] hover:stroke-[#E1986F] transition duration-300 hover:blur-sm`}
            width="250"
            height="300"
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
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

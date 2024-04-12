import laptopCard from "../../assets/laptop-card.PNG";
import makeUp from "../../assets/Makeup.PNG";
import mokLogo from "../../assets/mok-logo.PNG";
import mokLogo2 from "../../assets/mok-logo2.PNG";
import twoIphones from "../../assets/two-iphones.PNG";
import kDesign from "../../assets/k-design.svg";
// import Image from "next/image";

const imageStyles = "rounded-2xl w-[310px] h-[300px] lg:w-[300px]";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="w-full md:items-center m- text-white py-[7rem] md:px-4 bg-[#000300]"
    >
      <h1 className="text-white md:text-[2.8rem] text-4xl text-center font-bold py-1 sticky top-12">
        Latests{" "}
        <span className="text-[#60a5fa] text-center underline">Project</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-6 gap-2 box-border py-11 px-4 place-items-center">
        <img className={`${imageStyles}`} src={mokLogo} alt="Kolade" />
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
        <div className="relative inline-block">
          <p
            className="p-5 absolute z-30 flex
    h-full w-full items-center justify-center flex-col
    whitespace-normal text-center text-[#6a60fa]
    opacity-0 transition duration-500 hover:opacity-90 font-bold text-2xl bg-black rounded-lg"
          >
            <span className="underline"> Logo_Design</span>
            <a
              className="font-medium text-lg text-[#60a8fa] no-underline hover:underline"
              href="/"
            >
              Contact for your business-logo designs
            </a>
          </p>
          <img src={kDesign} alt="k-logo" width={40} height={1} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

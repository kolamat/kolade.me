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
      className="w-full md:items-center m- text-white py-[7rem] md:px-4 bg-[#000300]"
    >
      <h2 className="text-white md:text-[2.8rem] text-4xl text-center font-bold py-1">
        Latests{" "}
        <span className="text-[#60a5fa] text-center underline">Project</span>
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mx-6 gap-2 box-border py-11 px-4 place-items-center">
        <p>
          <img className={`${imageStyles}`} src={mokLogo} alt="Kolade" />
        </p>
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
      </div>
    </div>
  );
}

export default Portfolio;

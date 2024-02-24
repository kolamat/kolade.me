import laptopCard from "../assets/laptop-card.PNG";
import makeUp from "../assets/Makeup.PNG";
import mokLogo from "../assets/mok-logo.PNG";
import mokLogo2 from "../assets/mok-logo2.PNG";
import twoIphones from "../assets/two-iphones.PNG";

function Portfolio() {
  return (
    <div className="w-full md:items-center m-auto text-white py-[7rem] md:px-4">
      <h2 className="text-white text-[2.8rem] text-center font-bold py-1">
        Latests <span className="text-[#0ef] text-center">Project</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-6 gap-5 box-border py-11 px-4 place-items-center">
        <img className=" rounded-2xl h-96 w-96" src={mokLogo} alt="Kolade" />

        <img
          className=" rounded-2xl h-96 w-96"
          src={twoIphones}
          alt="Kolade"
          loading="lazy"
        />
        <img
          className=" rounded-2xl h-96 w-96"
          src={mokLogo2}
          alt="Kolade"
          loading="lazy"
        />
        <img
          className=" rounded-2xl h-96 w-96"
          src={laptopCard}
          alt="Kolade"
          loading="lazy"
        />
        <img
          className=" rounded-2xl h-96 w-96"
          src={makeUp}
          alt="Kolade"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Portfolio;

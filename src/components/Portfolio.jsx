import React from "react";
import laptopCard from "../assets/laptop-card.PNG";
import makeUp from "../assets/Makeup.PNG";
import mokLogo from "../assets/mok-logo.PNG";
import mokLogo2 from "../assets/mok-logo2.PNG";
// import Mok from "../assets/Mok.jpg";
import twoIphones from "../assets/two-iphones.PNG";

function Portfolio() {
  return (
    <div>
      <h2 className="text-white text-[2.8rem] text-center font-bold py-1">
        Latests <span className="text-[#0ef]">Project</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-5 box-border py-11 px-4 place-items-center">
        <img className=" rounded-2xl h-96 w-96" src={mokLogo} alt="Kolade" />
        {/* <img
          className=" rounded-2xl h-96 w-96"
          src={Mok}
          alt="Kolade"
        /> */}
        <img className=" rounded-2xl h-96 w-96" src={twoIphones} alt="Kolade" />
        <img className=" rounded-2xl h-96 w-96" src={mokLogo2} alt="Kolade" />
        <img className=" rounded-2xl h-96 w-96" src={laptopCard} alt="Kolade" />
        <img className=" rounded-2xl h-96 w-96" src={makeUp} alt="Kolade" />
      </div>
    </div>
  );
}

export default Portfolio;

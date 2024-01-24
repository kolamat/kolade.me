import React from "react";
import laptopCard from "../assets/laptop-card.PNG";
import makeUp from "../assets/Makeup.PNG";
import mokLogo from "../assets/mok-logo.PNG";
import mokLogo2 from "../assets/mok-logo2.PNG";
import Mok from "../assets/Mok.jpg";
import twoIphones from "../assets/two-iphones.PNG";

function Portfolio() {
  return (
    <div>
      <h2 className="text-white text-[4rem] text-center font-bold py-1">
        Latests <span className="text-[#0ef]">Project</span>
      </h2>
      <div className="grid auto-cols-auto md:grid-cols-3 sm:grid-cols-2 mx-auto gap-5 box-border py-11 px-4">
        <img
          className="mx-auto my-4 rounded-2xl object-cover"
          src={mokLogo}
          alt="Kolade"
        />
        <img
          className="mx-auto my-4 rounded-2xl object-cover"
          src={Mok}
          alt="Kolade"
        />
        <img
          className="mx-auto my-4 rounded-2xl object-cover"
          src={twoIphones}
          alt="Kolade"
        />
        <img
          className="mx-auto my-4 rounded-2xl object-cover"
          src={mokLogo2}
          alt="Kolade"
        />
        <img
          className="mx-auto my-4 rounded-2xl object-cover"
          src={laptopCard}
          alt="Kolade"
        />
        <img
          className="mx-auto my-4 rounded-2xl object-cover"
          src={makeUp}
          alt="Kolade"
        />
      </div>
    </div>
  );
}

export default Portfolio;

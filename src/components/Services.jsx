import React from "react";
import { FaPaintRoller } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <div className="w-full text-white py-[7rem] px-4">
      <h1 className=" text-[2.8rem] w-full text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        My<span className="text-[#0ef] underline">Services</span>
      </h1>
      {/* mx-auto grid md:grid-cols-3 gap-8 items-center */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center border p-4  justify-between rounded-[15px] w-[100%] hover:border-sky-400 hover:transition delay-200">
          <h3 className="flex flex-col items-center justify-center text-[27px] font-bold">
            <FaCode size={42} />
            Web Developer
          </h3>
          <p className="flex font-bold my-3">
            a web developer's job is to use the basic building blocks of the web
            ( like HTML, CSS and JavaScript ) to create something complex.
          </p>
          <button className="font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black hover:text-white hover:bg-slate-900 hover:bg-opacity-100 hover:translate-y-2 hover:transition-transform hover:translate-x-2 delay-[3000s]">
            <a href="/">Read More</a>
          </button>
        </div>
        <div className="flex flex-col items-center border p-4  justify-between rounded-[15px] w-[100%] hover:border-sky-400 hover:transition delay-200">
          <h3 className="flex flex-col items-center justify-center text-[27px] font-bold">
            <FaPaintRoller size={42} />
            Graphic Design
          </h3>
          <p className="flex font-bold my-3">
            Graphic design is a craft where professionals create visual content
            to communicate messages. Lorem ipsum dolor.
          </p>
          <button className="font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black hover:text-white hover:bg-slate-900 hover:bg-opacity-100 hover:translate-y-2 hover:transition-transform hover:translate-x-2 delay-[3000s]">
            <a href="/">Read More</a>
          </button>
        </div>
        <div className=" flex flex-col items-center border lg:col-span-1 md:col-span-2 p-4  justify-between rounded-[15px] w-[100%] hover:border-sky-400 hover:transition delay-200">
          <h3 className="flex flex-col items-center justify-center text-[27px] font-bold">
            <FaChartBar size={42} />
            Digital Marketing
          </h3>
          <p className="flex font-bold my-3">
            Digital marketing involves many of the same principles as
            traditional Marketing and is often considered an additional way for
            companies to approach consumers and understand their behavior.
          </p>
          <button className="font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black hover:text-white hover:bg-slate-900 hover:bg-opacity-100 hover:translate-y-2 hover:transition-transform hover:translate-x-2 delay-[3000s]">
            <a href="/">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;

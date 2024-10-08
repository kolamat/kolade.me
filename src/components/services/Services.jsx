import { FaPaintRoller } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const servicesBut =
  "font-semibold w-[98px] rounded-lg bg-[#60a5fa] p-2 text-center text-black hover:text-white hover:bg-slate-900 hover:bg-opacity-100 hover:translate-y-2 transition duration-300 delay-75";
const container =
  "flex flex-col items-center border p-4 justify-between rounded-[15px] w-[100%] hover:border-sky-400 transition duration-300 delay-200";

function Services() {
  return (
    <section
      id="services"
      className={`w-full text-white py-[7rem] md:px-4 bg-[#000300]`}
    >
      <h1
        className={`md:text-[2.8rem] text-4xl w-full text- font-bold flex items-center justify-center gap-2 mb-6 sticky top-14`}
      >
        My<span className="text-[#60a5fa] underline">Services</span>
      </h1>
      {/* mx-auto grid md:grid-cols-3 gap-8 items-center */}
      <div className={`grid lg:grid-cols-3 gap-4 mx-6 px-4`}>
        <div className={`${container}`}>
          <h3
            className={`flex flex-col items-center justify-center text-[27px] font-bold`}
          >
            <FaCode size={42} />
            Web Developer
          </h3>
          <p className={`flex font-bold my-3`}>
            a web developer's job is to use the basic building blocks of the web
            ( like HTML, CSS and JavaScript ) to create something complex.
          </p>
          <button className={`${servicesBut}`}>
            <a href="/">Read More</a>
          </button>
        </div>
        <div className={`${container}`}>
          <h3
            className={`flex flex-col items-center justify-center text-[27px] font-bold`}
          >
            <FaPaintRoller size={42} />
            Graphic Design
          </h3>
          <p className={`flex font-bold my-3`}>
            Graphic design is a craft where professionals create visual content
            to communicate messages. Lorem ipsum dolor.
          </p>
          <button className={`${servicesBut}`}>
            <a href="/">Read More</a>
          </button>
        </div>
        <div
          className={`flex flex-col items-center border lg:col-span-1 md:col-span-2 p-4 justify-between rounded-[15px] w-[100%] hover:border-sky-400 transition duration-300 delay-200`}
        >
          <h3
            className={`flex flex-col items-center justify-center text-[27px] font-bold`}
          >
            <FaChartBar size={42} />
            Digital Marketing
          </h3>
          <p className={`flex font-bold my-3`}>
            Digital marketing involves many of the same principles as
            traditional Marketing and is often considered an additional way for
            companies to approach consumers and understand their behavior.
          </p>
          <button className={`${servicesBut}`}>
            <a href="/">Read More</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;

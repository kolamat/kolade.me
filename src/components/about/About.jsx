import "aos/dist/aos.css";
import kolade1 from "../../assets/kolade1.jpg";

function about() {
  return (
    <div id="about" className="flex flex-col justify-center bg-[#000300]">
      <div className="grid md:grid-cols-2 md:mx-6 md:px-4 text-white py-16">
        <div className="flex flex-col justify-center mx-3">
          <h1 className="md:text-[2.8rem] text-4xl font-bold py-2">
            About <span className="text-[#60a5fa] underline">Me</span>
          </h1>
          <h3 className=" text-[25px] font-bold">Frontend Engineer</h3>
          <p className="text-md font-bold my-2">
            I am an enthusiastic, self-motivated, reliable, responsible and hard
            working person. I am a mature team worker and adaptable to all
            challenging situations. I am able to work well both in a team
            environment as well as using own initiative. I am able to work well
            under pressure and adhere to strict deadlines.
          </p>
          <button className="text-left">
            <a
              href="/"
              className=" font-semibold w-[98px] rounded-lg bg-[#60a5fa] p-2 text-black hover:text-white hover:bg-slate-900 hover:bg-opacity-100 hover:translate-x-2 hover:transition-[0.5s,ease]"
            >
              Read More
            </a>
          </button>
        </div>
        <img
          className="w-[310px] lg:m-0 lg:w-[500px] my-4 rounded-2xl mx-auto place-self-end"
          src={kolade1}
          alt="still Kolade"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default about;

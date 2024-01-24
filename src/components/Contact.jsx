import React from "react";

function Contact() {
  return (
    <div className="grid">
      <div className="px-4">
        <h2 className="text-white text-[2.8rem] text-center font-bold py-1">
          Contact <span className="text-[#0ef]">Me</span>
        </h2>

        <div className="flex flex-col md:grid-cols-3 sm:flex-col">
          <form>
            <div className="grid grid-cols-2 gap-1  lg:flex sm:flex-col">
              <input
                type="text"
                placeholder="K*****"
                className="bg-gray-600 text-white rounded-lg"
              />
              <input
                type="email"
                placeholder="Email: M***********"
                className="bg-gray-600 text-white rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-1 my-2 text-center">
              <input
                type="number"
                placeholder="Num:+234**********"
                className="bg-gray-600 text-white rounded-lg"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="bg-gray-600 text-white rounded-lg"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="bg-gray-600 w-80 text-white rounded-xl"
            ></textarea>
          </form>
          <input
            type="submit"
            value="Send Message"
            className="bg-gray-600 mt-4 mb-8 rounded-xl text-white w-56 m-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

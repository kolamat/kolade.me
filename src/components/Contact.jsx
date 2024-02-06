/* eslint-disable no-unused-vars */
// import React from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import kolade from "../assets/window-logo.jpg";
import style from "./app.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0drhrzb",
        "template_8kh7dbx",
        form.current,
        "npnaHfb_xcrNgdhAO"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
          alert("Message Not Sent");
        }
      );
  };

  return (
    <div className=" p-16">
      <h1 className=" text-[2.8rem] sm:text-4xl text-black text-center text-3xl font-bold py-2">
        Contact <span className="text-[#0ef] underline">Me</span>
      </h1>
      <div className="grid md:flex gap-4 items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:items-start items-center"
        >
          <label>Name</label>
          <input type="text" name="user_name" placeholder="K*****" />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email: M***********"
          />
          <label>Message</label>
          <textarea name="message" placeholder="Email Subject" />
          <input
            type="submit"
            value="Send"
            className="hover:bg-slate-900 hover:bg-opacity-100 hover:translate-y-2 hover:transition-[0.5s,ease] hover:translate-x-2 delay-75"
          />
        </form>
        <div>
          <img
            className="w-[560px] lg:w-[500px] h-[260px] mx-auto my-4 rounded-2xl"
            src={kolade}
            alt="Kolade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

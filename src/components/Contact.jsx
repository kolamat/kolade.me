// import React from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
          console.log("Message Not Sent");
        }
      );
  };

  return (
    <div>
      <h1 className=" text-[2.8rem] sm:text-4xl text-white text-center text-3xl font-bold py-2">
        Contact <span className="text-[#0ef] underline">Me</span>
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import email from "../../assets/email.png";
import "./app.css";

const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-black`;

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
    <section id="contact" className={`md:px-4 py-11 m- bg-[#000300]`}>
      <h1
        className={`md:text-[2.8rem] text-white text-center text-4xl font-bold py-2 sticky top-12`}
      >
        Contact <span className="text-[#60a5fa] underline">Me</span>
      </h1>
      <div className={`grid lg:flex gap-4 items-center mx-6 px-4`}>
        <form
          ref={form}
          onSubmit={sendEmail}
          //   className="lg:items-start items-center"
          className={inputStyles}
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="K*****"
            className={inputStyles}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email: M***********"
            className={inputStyles}
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Email Subject"
            className={inputStyles}
          />
          <input
            type="submit"
            value="Send"
            className={`hover:bg-slate-900 bg-opacity-100 hover:translate-y-2 hover:text-white transition duration-300 delay-75`}
          />
        </form>
        <div>
          <img
            className={`w-[300] lg:w-[400px] h-[260px] mx-auto my-4 rounded-2xl hidden lg:block`}
            src={email}
            alt="Kolade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

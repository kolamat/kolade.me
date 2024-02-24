import { useForm } from "react-hook-form";

// import { FaArrowUp } from "react-icons/fa";

function footer() {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact_us" className="mx-auto w-5/6 pt-24 pb-32">
      <div>
        {/* HEADER */}
        <div>
          <>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </>
          <p className="my-5">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        {/* FORM -AND-IMAGE  */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/70e24ba9ecf7e9a2b20c875223e6596e"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "MaxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "invalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "MaxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="relative mt-16 basis-2/5 md:mt-0">
            {/* <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
          </div> */}
          </div>
        </div>
      </div>
    </section>

    // <section>
    //   <div className="h-[1px] bg-[#0ef] rounded-sm flex justify-center" />
    //   <div className=" text-white flex justify-between px-5 py-2 tracking-wide">
    //     <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
    //       <div className="mt-16 basis-1/2 md:mt-0">
    //         {/* <img src={logo} alt="logo" /> */}
    //         <svg
    //           width="50"
    //           height="30"
    //           viewBox="0 0 94 108"
    //           fill="#E1986F"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M54.0434 101.423L55.3836 102.908H57.384H72.616H82.8456L75.9332 95.3673L37.8715 53.8453L75.5678 12.2124L82.377 4.69202H72.232H57.512H55.4954L54.1533 6.19722L25.148 38.7274V9.19202V4.69202H20.648H9H4.5V9.19202V98.408V102.908H9H20.648H25.148V98.408V69.4065L54.0434 101.423Z"
    //             stroke="#FFC132"
    //             stroke-width="9"
    //           />
    //         </svg>
    //         <p className="my-5">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a gallery of
    //           type and scrambled it to make a type specimen book.
    //         </p>
    //         <p className="block">
    //           Copyright &copy; 2023 by&nbsp;
    //           <strong>
    //             <span>M.J.K</span>
    //           </strong>
    //           &nbsp; All Rights Reserved.
    //         </p>
    //       </div>
    //       <div className="mt-16 basis-1/4 md:mt-0">
    //         <h4 className="font-bold">Links</h4>
    //         <p className="my-5">Massa orci senectus</p>
    //         <p className="my-5">Et gravida id et etiam</p>
    //         <p>Ullamcorper vivamus</p>
    //       </div>
    //       <div className="mt-16 basis-1/4 md:mt-0">
    //         <h4 className="font-bold">Contact Us</h4>
    //         <p className="my-5">Tempus metus mattis risus volupat egestas</p>
    //         <p>(+234) 8150672809</p>
    //       </div>
    //     </div>
    //     {/*
    //   <div className="bg-[#0ef] w-4">
    //     <a href="#home" title="Toggle-Top">
    //       <FaArrowUp />
    //     </a>
    //   </div> */}
    //   </div>
    // </section>
  );
}

export default footer;

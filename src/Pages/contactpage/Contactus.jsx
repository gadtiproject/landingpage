import { React, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { HiMail, HiPhone } from "react-icons/hi";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");

  const errorToast = () => toast.error("Error Occured!");
  const successToast = () => toast.success("Successfully Sent!");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      check.length === 0
    ) {
      errorToast();
    } else {
      successToast();
      setCheck([]);
      setEmail("");
      setMessage("");
      setName("");

      emailjs
        .sendForm(
          "service_gz8udsk",
          "template_jl6exaj",
          form.current,
          "X82Y0vIKzBYytYLSy"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setCheck("");
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="flex flex-col min-h-screen lg:h-screen items-center justify-center">
      <div className="flex items-center justify-center font-[poppins]">
        <div className="grid lg:grid-cols-2 lg:gap-8 gap-6 w-screen max-w-screen-lg h-full">
          <div className="flex justify-center items-center p-5">
            <div className="dark:text-[#ffffff] text-black md:w-[500px] max-w-[500px] p-5 lg:mt-0 mt-24">
              <h2 className="font-bolder text-4xl">Get in touch</h2>
              <p className="lg:w-[400px] mt-[30px] leading-8 text-x">
                Use our contact form for all information requests or contact us
                directly using the contact information below.
              </p>

              <>
                <p className="lg:w-[400px] mt-[30px] leading-8 text-[19px]">
                  Feel free to get in touch with us via email or phone
                </p>
                <hr className="border-1 border-[#02383C] lg:w-[450px] md:w-[500px]  w-[343px] mt-[30px]" />

                <div className="flex gap-[50px] mt-8 place-items-center items-center">
                  <HiMail className="text-5xl fill-[#02383C]" />
                  <div className="flex flex-col gap-5">
                    <a
                      href="mailto:info@regiz.io"
                      className="hover:text-[#02383C] cursor-pointer"
                    >
                      info@regiz.io
                    </a>
                    <a
                      href="mailto:support@regiz.io"
                      className="hover:text-[#02383C] cursor-pointer"
                    >
                      support@regiz.io
                    </a>
                  </div>
                </div>

                <div className="flex gap-[50px] mt-8 place-items-center items-center">
                  <HiPhone className="text-5xl fill-[#02383C]" />
                  <div className="flex flex-col gap-5">
                    <a href="tel:08032113990" className="hover:text-[#02383C]">
                      +2348032113990
                    </a>
                  </div>
                </div>
              </>
            </div>
          </div>

          <div className="flex justify-center items-center mb-[30px] lg:mb-0">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-gray-200 rounded-[20px] md:w-[500px] max-w-[500px] p-5 place-items-center items-center justify-center flex flex-col"
            >
              <div className="mt-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="inputname mt-3  w-[330px]  lg:w-[448px]  md:w-[500px]  px-4 py-4 rounded-[15px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]"
                  id="first_name"
                  type="text"
                  required
                  value={name}
                  name="to_name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mt-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputname mt-3  w-[330px] md:w-[500px] lg:w-[448px] px-4 py-4 rounded-[15px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]"
                  id="email"
                  type="email"
                  name="to_email"
                  required
                  placeholder="name@gmail.com"
                  value={email}
                />
              </div>

              <div className="mt-3">
                <textarea
                  rows="4"
                  cols="50"
                  onChange={(e) => setMessage(e.target.value)}
                  className="messageinput mt-3  w-[330px]  md:w-[500px] lg:w-[448px] px-4 py-4 rounded-[15px] focus:outline-none focus:border focus:border-[#84CAFF]  border border-[#D0D5DD]"
                  id="message"
                  type="text"
                  required
                  name="message"
                  value={message}
                  placeholder="Send us a message and I'll reply you as soon as possible..."
                ></textarea>
              </div>

              <div className="mt-3">
                <input
                  onChange={(e) => setCheck(e.target.value)}
                  type="checkbox"
                  id="text"
                  required
                  className="checkbox mx-2 mt-3 ring-opacity-25  focus:ring-2 ring-[#84CAFF] focus:border-[#84CAFF] border border-[#D0D5DD] focus:outline-none w-5"
                />
                <label htmlFor="text-2xl lg:w-[688px] w-[311px]">
                  I accept the Terms of services
                </label>
              </div>

              <div className="mt-3 mb-[10px]">
                <button
                  id="btn__submit"
                  type="submit"
                  className="mt-3 w-[330px]  bg-[#02383C] hover:bg-[#164043] ring-opacity-25  focus:ring-4 ring-[#02383C] text-[#FFFF] rounded-[10px] px-5 py-5 lg:w-[448px]"
                >
                  Send message
                </button>
                <Toaster />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contactus;

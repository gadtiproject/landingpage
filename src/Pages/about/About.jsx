import React from "react";
import { GoTelescope } from "react-icons/go";
import { GiBullseye } from "react-icons/gi";
function About() {
  return (
    <div
      name="about"
      className="lg:mt-[18%] mt-[20%] dark:bg-[#070909] bg-white w-[90%] mx-auto grid place-items-center justify-center"
    >
      <h1 className="lg:text-4xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
        What is Regiz?
      </h1>

      <p className="dark:text-gray-300 leading-[25px]  w-[350px] lg:w-[700px] text-[16px]  mt-5 text-justify">
        Regiz is a Digital documentation technology project that focuses on the
        authentication, verification, and digitization of documents so that they
        can be electronically stored more compactly and securely. It may be
        educational certificates or professional certifications, computerized
        receipts, work identification cards, or any suitable documents.
      </p>

      <div className="mt-[10%]">
        <h4 className="lg:text-4xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
          What do we do?
        </h4>

        <p className="dark:text-gray-300 leading-[25px] w-[350px] lg:w-[700px] text-[16px] text-justify mt-5">
          <span className="mb-3">
            {" "}
            We mint on your uploaded document using Block Chain Technology, by
            giving that document a unique chain Identity, and a verification
            Badge.
          </span>
          The document becomes a valuable digital asset stored in a
          decentralized registry for verification purposes.
          <span className="mt-5">
            All documents that are issued by a government-registered
            institution/organization will pass through a
            verification/confirmation process. These documents can also be
            looked up by a third party, (using the Regiz app) with authorization
            from the owner, to confirm their authenticity globally. Regiz will
            be a decentralized application, where users will be in charge of
            their Data Like they are in Charge of their Money) built on
            blockchain technology.
          </span>
        </p>
      </div>

      <div className="lg:grid-cols-2 grid gap-[60px] space-y-6 lg:space-y-0 md:space-y-0  mt-[10%] items-center justify-center">
        <div className="w-[350px] h-[200px] items-center justify-center grid">
          <center>
            <GoTelescope className="fill-[#0BC0DF] text-[100px]" />
          </center>
          <p className="text-2xl text-center font-bold mt-5 text-[#252524] dark:text-white">
            Vision
          </p>
          <p className="text-center mt-2 text-[#252524] dark:text-gray-200">
            To eradicate the difficulty in authenticating digital
            <span className="text-[#0BC0DF]">copies of documents.</span>
          </p>
        </div>
        <div className="w-[350px] h-[200px] items-center justify-center grid">
          <center>
            <GiBullseye className="text-[100px] fill-[#0BC0DF]" />
          </center>
          <p className="text-2xl text-center font-bold mt-5 text-[#252524] dark:text-white">
            Goal
          </p>
          <p className="text-center mt-2 text-[#252524] dark:text-gray-200">
            To build a technology that puts you in charge of your document,
            where its authenticity can be
            <span className="text-[#0BC0DF]">confirmed globally</span> in
            real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

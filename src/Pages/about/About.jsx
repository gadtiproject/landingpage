import React from "react";
import { GoTelescope } from "react-icons/go";
import { GiBullseye } from "react-icons/gi";
function About() {
  return (
    <div
      name="about"
      className="lg:mt-[18%] mt-[5%] dark:bg-[#070909] w-[350px]  bg-white lg:w-[700px] mx-auto grid place-items-center justify-center"
    >
      <h2 className="lg:text-4xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
        What is Regiz?
      </h2>

      <p className="dark:text-gray-300 leading-[25px] w-full lg:w-[700px] text-[14px]  lg:text-[16px] mt-5 text-justify">
        Regiz is a digital documentation technology project that focuses on the
        authentication, verification, and digitization of documents so that they
        can be electronically stored more compactly and securely. It may be an
        educational certificate or professional certification, computerized
        receipts, work identification cards, or any suitable document.
      </p>

      <div className="mt-[10%]">
        <h4 className="lg:text-4xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
          What do we do?
        </h4>

        <div className="dark:text-gray-300 leading-[25px] text-[14px] md:text-[16px] lg:text-[16px] text-justify mt-5">
          <p className="mb-3">
            We mint on your uploaded document using blockchain technology, by
            giving that document a unique chain identity and a verification
            badge.
          </p>
          The document then becomes a valuable digital asset, stored in a
          decentralized registry for verification purposes. All documents that
          are issued by a government-registered organization/institution will
          pass through a verification/confirmation process.
          <p className="mt-5">
            These documents can be looked up by a third via the app with
            authorization from the document owner; to confirm their authenticity
            globally. Regiz will be a decentralized application where users will
            be in charge of their documents like they are in charge of their
            money.
          </p>
        </div>
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
            To eradicate the difficulty in authenticating digital{" "}
            <span className="text-[#0BC0DF]">copies of documents.</span>
          </p>
        </div>
        <div className="w-[350px] h-[200px] items-center justify-center grid">
          <center>
            <GiBullseye className="text-[100px] fill-[#0BC0DF]" />
          </center>
          <p className="text-2xl text-center font-bold mt-5 text-[#252524] dark:text-white">
            Mission
          </p>
          <p className="text-center mt-2 text-[#252524] dark:text-gray-200">
            To build a technology that puts you in charge of your document,
            where its authenticity can be{" "}
            <span className="text-[#0BC0DF]">confirmed globally</span> in
            real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

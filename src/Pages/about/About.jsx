import React from "react";

function About() {
  return (
    <div name="about" className="pt-[3%] dark:bg-[#070909] bg-white">
      
      <h1 className="lg:text-5xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
        About Regiz
      </h1>

      <div className="dark:text-gray-300 about-text text-black justify-center items-center grid place-items-center">
        <div className="box place-items-center lg:text-start text-center justify-center items-center m-10 lg:w-[950px] md:w-[500px] w-[300px] ">
          <input type="checkbox" id="check" />

          <p className="sm:text-[14px] text-[18px] lg:text-[1rem] md:text-[1rem] text-justify lg:leading-10 lg:tracking-wider  words justify-center lg:w-full">
            Regiz is a Generation Alpha Digital documentation technology (DOCUTECH) project that focuses on the authentication, verification, 
            and digitization of documents so that they can be electronically
            stored more compactly and securely.
            <span className="mx-3">
              It may be educational certificates or professional certifications,
              computerized receipts, work identification cards, or any suitable
              documents.
            </span>
          </p>

          <div className="content">
            <p className="sm:text-[14px] text-[20px] lg:text-[1rem] md:text-[1rem] text-justify mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word justify-center lg:w-full">
              The Document would be snapped and uploaded on the Regiz platform
              in selected formats e.g pdf. Every document that is uploaded will
              be minted upon and given a unique identification code, which will
              automatically make it a certified digital copy; Thereby
              eradicating fake or in-genuine digital copies of a document.
            </p>

            <p className="sm:text-[14px] text-[20px] lg:text-[1rem] md:text-[1rem] text-justify mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word justify-center lg:w-full">
              A verification and validation process will be applied to all
              certificate issued by institutions and organizations that are
              registered with the government.
              <span>
                {" "}
                With the owner's permission, third parties can also check up on
                these documents for confirmation purposes (using the Regiz app).
                This allows anyone to verify its legitimacy globally.
              </span>
            </p>

            <p className="sm:text-[14px] text-[20px] lg:text-[1rem] md:text-[1rem] text-justify mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word justify-center lg:w-full">
              Regiz will be a decentralized application based on blockchain
              technology where users will have control over their data much like
              they do over their money.
            </p>

            <p className="sm:text-[14px] text-[20px] lg:text-[1rem] md:text-[1rem] text-justify mt-3 lg:leading-10 lg:tracking-wider leading-8 break-word justify-center lg:w-full">
              These documents will then become digital assets with monetary
              value.
            </p>
          </div>

          <label
            htmlFor="check"
            className="px-3 py-3 rounded-full text-white  bg-[#02383C] hover:animate-bounce"
          >
            READ MORE
          </label>
        </div>
      </div>
    </div>
  );
}

export default About;

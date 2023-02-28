import React from "react";

function About() {
  return (
    <div
      name="about"
      className="mt-[20%] dark:bg-[#070909] bg-white w-[90%] mx-auto grid place-items-center justify-center"
    >
      <h1 className="lg:text-5xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
        What is Regiz?
      </h1>

      <p className="dark:text-gray-300  w-[389px] text-[16px] text-center mt-5">
        Regiz is a Digital documentation technology project that focuses on the
        authentication, verification, and digitization of documents so that they
        can be electronically stored more compactly and securely. It may be
        educational certificates or professional certifications, computerized
        receipts, work identification cards, or any suitable documents.
      </p>

      <div className="mt-[15%]">
        <h4 className="lg:text-5xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide ">
          What do we do?
        </h4>

        <p className="dark:text-gray-300  w-[389px] text-[16px] text-center mt-5">
          <span className="mb-3"> We mint on your uploaded document using Block Chain Technology, by
          giving that document a unique  chain Identity, and a verification
          Badge. 
         </span>
          The document becomes a valuable digital asset stored in a
          decentralized registry for verification purposes. All documents that
          are issued by a government-registered institution/organization will
          pass through a verification/confirmation process. These documents can
          also be looked up by a third party, (using the Regiz app) with
          authorization from the owner, to confirm their authenticity globally.
          Regiz will be a decentralized application, where users will be in
          charge of their Data Like they are in Charge of their Money) built on
          blockchain technology.
        </p>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { FaStarOfLife } from "react-icons/fa";
function Howitworks() {
  return (
    <div name="how" className="dark:bg-[#070909] mt-24">
      <h4 className="lg:text-5xl text-3xl text-center  dark:text-[#fff] text-black font-bold tracking-wide mb-5 pt-5">
        How it works
      </h4>
      <div>
        <div
          className="lg:flex grid md:flex lg:m-10 m-5 place-items-center gap-5 lg:gap-10  items-center justify-center "
          data-aos="fade-up"
        >
          <ul className="text-black lg:h-[500px] lg:w-[600px]">
            <h5 className="lg:text-3xl text-2xl dark:text-[#fff] text-black mb-7 font-bold text-start">
              Documentation Technology
            </h5>
            <div className="flex">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Download the Regiz Dapp from your App/Play,(or visit regiz.io)
              </li>
            </div>

            <div className="flex  mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Launch the app and connect your wallet E.g., Metamask, Trust
                wallet.
              </li>
            </div>

            <div className="flex  mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Complete your KYC/ Verification Process.
              </li>
            </div>

            <div className="flex  mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Snap and upload your desired document in the selected format.
                E.g pdf
              </li>
            </div>

            <div className="flex  mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Mint on Document to get a unique document I.D (Grade B
                verification badge) Genuine Unverified
              </li>
            </div>

            <div className="flex  mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Proceed to verify the document from issuing body and upgrade to
                (Grade A) Genuine Verified.
              </li>
            </div>
          </ul>

          <ul className="text-black lg:h-[500px] lg:w-[600px]">
            <h3 className="lg:text-3xl text-2xl dark:text-[#fff] text-black mb-7 font-bold text-start">
              Social marketplace
            </h3>

            <div className="flex mt-3">
              <div className="px-3 py-3 h-12 rounded-lg bg-[#02383C] fill-white">
                <FaStarOfLife className="lg:text-xl text-x fill-white" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black tracking-wide leading-8  lg:text-xl  text-sm">
                Download the Regiz Dapp from your App/Play store or visit
                regiz.io from your web browser.
              </li>
            </div>

            <div className="flex mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Launch the app and connect your wallet E.g., Metamask, Trust
                wallet
              </li>
            </div>

            <div className="flex mt-4">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl " />
              </div>
              <li className="mx-4 mb-3 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Complete your KYC/ Verification Process
              </li>
            </div>

            <div className="flex mt-4">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 mb-3 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Social Interactions.
              </li>
            </div>

            <div className="flex mt-4">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 mb-3 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Content Creator Tools.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;

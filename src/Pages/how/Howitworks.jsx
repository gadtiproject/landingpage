import React from "react";
// import { FaStarOfLife } from "react-icons/fa";
function Howitworks() {
  return (
    <div name="how" className="dark:bg-[#070909] lg:mt-[10%] mt-[20%]">
      <h4 className="lg:text-4xl text-3xl text-center dark:text-[#fff] text-black font-bold tracking-wide mb-5 pt-5">
        How it works
      </h4>

      <div className="grid lg:grid-cols-2 gap-[60px] items-center justify-center mx-auto w-[70%] dark:text-[#EEEE]">
        <div className="h-32 lg:w-[500px] w-[300px]">
          <p className="lg:text-[40px] text-[24px] font-[600]">Documentation Technology</p>
          <ul>
            <li className="mt-4">
              Download the Regiz Dapp from your App/Play, or visit{" "}
              <a
                href="https://regiz.io/"
                className="hover:font-extrabold underline hover:text-[#0cc0df]"
              >
                regiz.io
              </a>{" "}
            </li>
            <li className="mt-4">
              Launch the app and connect your wallet E.g., Metamask, or Trust
              wallet.
            </li>
            <li className="mt-4">Complete your KYC/ Verification Process.</li>
            <li className="mt-4">
              Snap and upload your desired document in the selected format. E.g
              pdf
            </li>
            <li className="mt-4">
              Mint on Document to get chain I.D/Grade B verification badge
              (Genuine Unverified)
            </li>
            <li className="mt-4">
              Proceed to verify the document from issuing body and upgrade to
              Grade A (Genuine Verified.)
            </li>
          </ul>
        </div>
        <div className="h-32 lg:w-[500px] w-[300px] mt-[80%] lg:mt-0">
          <p className="font-light text-[13px] py-5 uppercase lg:text-center text-center">
            There are 2 categories of Documents
          </p>
          <div className="gap-[20px] grid mt-4">
            <div className="flex space-x-4">
              <p className="rounded-[50%] w-8 h-8 text-center items-center justify-center flex border border-[#0cc0df] text-[14px]">
                1
              </p>
              <p className="font-bold lg:text-[24px] text-[18px]">
                Grade A (i.e., Genuine and Verified)
              </p>
            </div>
            <div className="flex space-x-4">
              <p className="rounded-[50%] w-8 h-8 border border-[#0cc0df] text-[14px] items-center justify-center flex text-center">
                2
              </p>
              <p className="font-bold lg:text-[24px] text-[18px]">
                Grade B (i.e., Genuine but Unverified)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
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
                Mint on Document to get a document chain I.D Grade B
                verification badge (Genuine Unverified)
              </li>
            </div>

            <div className="flex  mt-3">
              <div className="px-3 py-3 h-12  rounded-lg bg-[#02383C]">
                <FaStarOfLife className="lg:text-xl text-x" />
              </div>
              <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">
                Proceed to verify the document from issuing body and upgrade to
                Grade A (Genuine Verified.)
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
                Content Creator Tools.
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
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Howitworks;

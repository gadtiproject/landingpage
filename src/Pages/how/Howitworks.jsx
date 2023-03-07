import React from "react";
// import { FaStarOfLife } from "react-icons/fa";
function Howitworks() {
  return (
    <div name="how" className="dark:bg-[#070909] lg:mt-[10%] mt-[20%]">
      <h4 className="lg:text-4xl text-3xl text-center dark:text-[#fff] text-black font-bold tracking-wide mb-5 pt-5">
        How it works
      </h4>

      <div className="grid lg:grid-cols-2 gap-[60px] items-center justify-center mx-auto w-[70%] dark:text-[#EEEE]">
        <div className="h-32 lg:w-[500px] w-[350px] mt-[70%] lg:mt-0">
          <p className="lg:text-[40px] text-[24px] font-[600]">
            Categories of Documents
          </p>
          <div className="gap-[20px] grid mt-4">
            <div className="flex space-x-4">
              <p className="rounded-[50%] w-8 h-8 text-center items-center justify-center flex border border-[#0cc0df] text-[14px]">
                1
              </p>
              <p>
                <span className="font-bold lg:text-[24px] text-[18px]">
                  Grade A{" "}
                </span>
                (i.e., Genuine and Verified)
              </p>
            </div>
            <div className="flex space-x-4">
              <p className="rounded-[50%] w-8 h-8 border border-[#0cc0df] text-[14px] items-center justify-center flex text-center">
                2
              </p>
              <p>
                                <span className="font-bold lg:text-[24px] text-[18px]">
                  Grade B{" "}
                </span>
                (i.e., Genuine but Unverified)
              </p>
            </div>
          </div>
        </div>
        <div className="h-32 lg:w-[500px] w-[350px]">
          <p className="lg:text-[40px] text-[24px] font-[600]">
            Documentation Technology
          </p>
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
      </div>
    </div>
  );
}

export default Howitworks;

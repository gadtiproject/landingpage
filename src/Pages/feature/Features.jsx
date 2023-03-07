import React from "react";
import { MdStarRate } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { HiDocumentSearch } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { TbBadge } from "react-icons/tb";
import { RiWallet3Fill } from "react-icons/ri";
import { AiOutlineWechat } from "react-icons/ai";

function Features() {
  return (
    <div
      name="feature"
      className="dark:bg-[#070909] mt-24 lg:mt-[25%] w-[90%] mx-auto"
    >
      <div className="grid place-items-center justify-center">
        <h3 className="lg:text-4xl text-3xl text-center mt-3 pt-5 text-black font-bold trackin0cc0df mb-5 dark:text-white">
          Features
        </h3>

        <p className="text-center lg:w-[600px] w-[350px] text-[16px] text-[#68778D] leading-[25px]">
          With Regiz document verification and digitization has been made easy,
          just upload your Documents and relax while we mint on your document
          and give it a unique chain identity.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-x-[30px] gap-y-[40px] justify-center place-items-center mt-[10%] lg:mt-[5%]">
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <MdStarRate className="fill-[#0097b2] border-[black] border-2 rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Minting
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Mint on your document to get a unique chain i.d
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <GoVerified className="fill-[#0097b2] border-[black] border-2 rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Verification
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Verify your Document from issuing organization and upgrade to grade
            A
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <TbBadge className="fill-[#0097b2] border-[black] border-2  rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Originality Badge
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Get the originality badge on your document to prove its
            authenticity.
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <HiDocumentSearch className="fill-[#0097b2] border-[black] border-2  rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Search
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Confirm the authenticity of documents using DocTags.
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <ImCancelCircle className="fill-[#0097b2] border-[black] border-2  rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Blacklisting
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Blacklist a document for suspected Fraud.
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <RiWallet3Fill className="fill-[#0097b2] border-[black] border-2  rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Wallet
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Payment and Earnings wallet
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <AiOutlineWechat className="fill-[#0097b2] border-[black] border-2 rounded-full w-[40px] h-[40px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Customer Support
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Prompt and responsive customer support.
          </p>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center items-center">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2  gap-3 mb-[20px] place-items-center justify-center w-[80%]"
        >
          <div className="grid px-6 py-6 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] place-items-center  lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <MdStarRate className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Minting
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <GoVerified className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Verification
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <TbBadge className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Originality Badge
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <HiDocumentSearch className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Search
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center text-white">
              <ImCancelCircle className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 fill-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Document Blacklisting
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <MdBusiness className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Business suite
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <RiWallet3Fill className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Wallet
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <AiFillGift className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                Social Marketplace
              </p>
            </div>
          </div>

          <div className="px-6 py-4 mb-3 mt-3 rounded-lg max-w-[80%] shadow-[20px] h-48 lg:w-[300px] m-20 md:w-[320px] w-[250px] flex items-center justify-center lg:hover:w-[420px] hover:opacity-95 hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <AiOutlineWechat className="text-7xl text-center flex items-center justify-center rounded-full px-3 py-3 bg-[#02383C] dark:bg-[#02383C] hover:border-none transition-color duration-200 text-white" />
              <p className="dark:text-white text-black items-center text-2xl text-center mt-3">
                24/hrs support
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Features;

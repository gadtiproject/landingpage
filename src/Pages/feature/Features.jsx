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
      className="dark:bg-[#070909] mt-[5%] lg:mt-[25%] w-[90%] mx-auto"
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
          <MdStarRate className="fill-[#0097b2] border-[black] border-2  rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Minting
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Mint on your document to get a unique chain ID
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <GoVerified className="fill-[#0097b2] border-[black] border-2 rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Verification
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Verify your Document from issuing organization and upgrade to grade
            A
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <TbBadge className="fill-[#0097b2] border-[black] border-2  rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Originality Badge
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Get the originality badge on your document to prove its
            authenticity.
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <HiDocumentSearch className="fill-[#0097b2] border-[black] border-2  rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Search
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Confirm the authenticity of documents using DocTags.
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <ImCancelCircle className="fill-[#0097b2] border-[black] border-2  rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Document Blacklisting
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Blacklist a document for suspected Fraud.
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <RiWallet3Fill className="fill-[#0097b2] border-[black] border-2  rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Wallet
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Payment and Earnings wallet
          </p>
        </div>
        <div className="w-[289px] h-[220px] rounded-lg bg-[#F5F9FC] relative">
          <AiOutlineWechat className="fill-[#0097b2] border-[black] border-2 rounded-full w-[45px] h-[45px] top-[-20px] absolute mx-3" />
          <h1 className="text-[20px] font-bold text-[#0cc0df] p-3 leading-[28px] mt-6">
            Customer Support
          </h1>
          <p className="p-3 leading-[28px] font-[200px] text-[20px] text-[#3C4A5B]">
            Prompt and responsive customer support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;

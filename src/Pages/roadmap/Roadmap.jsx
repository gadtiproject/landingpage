import React from "react";
import { BsFillSignpostFill } from "react-icons/bs";

function Roadmap() {
  const data = [
    {
      id: 1,
      date: "Q1 - 2023",
      para1: "New website",
      sub1: "Launch of website/branding for product",
      sub2: "Publicity and Engagement.",
      sub3: "Kyc verification",
      sub4: "Q&A",
      sub5: "Contract Audit",
      sub6: " Token pre-sale",
    },
    {
      id: 2,
      date: "Q2 - 2023",
      para1: "Token Sale",
      sub1: "Seed & Private sale, see Tokenomics",
      para2: "Quickswap Listing",
      sub2: "15% of the total supply will be added as liquidity",
      para3: "Listing on Coingecko",
      para4: "Listing on Coinmarketcap",
      para5: "Closed beta group",
      sub3: "Early testers for the app",
    },
    {
      id: 3,
      date: "Q3 - 2023",
      para1: "Market campaign",
      sub1: "We will start our marketing listing",
      sub2: "Our contract will get audited by TBD",
      sub3: "Track on ETH & BSC Networks",
      para2: "Staking dapp",
      sub4: "Reward for regiscoin",
      para3: "Learning Pad",
      sub5: "Community learning center for cryptocurrencies and tokens",
    },
    {
      id: 4,
      date: "Q4 - 2023",
      para1: "UX/UI Review",
      sub1: "Refinement of user experience",
      para2: "All core concept features",
      sub2: "Regiz proof of concept",
      para3: "Verification Protocol",
      sub3: "Refine Verification Analysis",
      para4: "Multi-document Support",
      sub4: "Add support for multipage document",
    },

    {
      id: 5,
      date: "Q1 - 2024",
      para1: "Add verification partners",
      sub1: "Partnership with issuing organizations",
      para2: "Basic demo",
      sub2: "Provide a public demo so you can test regiz Dapp",
      para3: "Price Alerts",
      sub3: "Get alerts on events for your tracked coins",
      para4: "Release 0.1",
      sub4: "The BETA version of our app goes public.",
    },
    {
      id: 6,
      date: "Q2 - 2024",
      para1: "Launch Dapp",
      sub1: "launch on App Store and Play store",
    },
  ];

  return (
    <div name="roadmap" className="w-[80%] mx-auto">
      <p className="text-4xl text-center mt-3 dark:text-white text-black font-bold tracking-wide mb-5 p-5">
        Roadmap
      </p>
      <p className="text-gray-500 text-xl leading-5 text-center font-[poppins] p-5">
        Project roadmap for the year 2023/2024
      </p>

      <div className="max-w-[750px] mx-auto">
        <div className="m-4">
          <div className="flex pt-4 items-center">
            <p className="text-xl text-blue-500 dark:text-white">
              <BsFillSignpostFill className="fill-black dark:fill-[#0cc0df]" />
            </p>
            <h1 className="text-[#0cc0df] text-xl mx-3 dark:text-[#EEEE] font-bold">
              Q1 - 2023
            </h1>
          </div>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            New website
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Launch of website/branding for product
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Publicity and Engagement
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Kyc verification
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Q&A
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Contract Audit
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Token pre-sale
          </p>
        </div>

        <div className="m-4">
          <div className="flex pt-6 items-center">
            <p className="text-xl text-blue-500 dark:text-white">
              <BsFillSignpostFill className="fill-black dark:fill-[#0cc0df]" />
            </p>
            <h1 className="text-[#0cc0df] text-xl mx-3 dark:text-[#EEEE] font-bold">
              Q2 - 2023
            </h1>
          </div>
          <p className="text-xl font-light mt-4 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Token Sale
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Seed & Private sale, see Tokenomics{" "}
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Quickswap Listing
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            15% of the total supply will be added as liquidity
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Listing on Coingecko
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Listing on Coinmarketcap
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Early testers for the app
          </p>
        </div>

        <div className="m-4">
          <div className="flex pt-6 items-center">
            <p className="text-xl text-blue-500 dark:text-white">
              <BsFillSignpostFill className="fill-black dark:fill-[#0cc0df]" />
            </p>
            <h1 className="text-[#0cc0df] text-xl mx-3 dark:text-[#EEEE] font-bold">
              Q3 - 2023
            </h1>
          </div>
          <p className="text-xl font-bold mt-4 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Market campaign
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            We will start our marketing listing
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Our contract will get audited by TBD
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Track on ETH & BSC Networks
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Staking dapp
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Reward for regizcoin
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Learning Pad
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Community learning center for cryptocurrencies and tokens
          </p>
        </div>

        <div className="m-4">
          <div className="flex pt-6 items-center">
            <p className="text-xl text-blue-500 dark:text-white">
              <BsFillSignpostFill className="fill-black dark:fill-[#0cc0df]" />
            </p>
            <h1 className="text-[#0cc0df] text-xl mx-3 dark:text-[#EEEE] font-bold">
              Q4 - 2023
            </h1>
          </div>
          <p className="text-xl font-bold mt-4 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            UX/UI Review
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Refinement of user experience
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            All core concept features
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Regiz proof of concept
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Verification Protocol
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Refine Verification Analysis
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Multi-document Support
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Add support for multipage document
          </p>
        </div>

        <div className="m-4">
          <div className="flex pt-6 items-center">
            <p className="text-xl text-blue-500 dark:text-white">
              <BsFillSignpostFill className="fill-black dark:fill-[#0cc0df]" />
            </p>
            <h1 className="text-[#0cc0df] text-xl mx-3 dark:text-[#EEEE] font-bold">
              Q1 - 2024
            </h1>
          </div>
          <p className="text-xl font-bold mt-4 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Add verification partners
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Partnership with issuing organizations
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Basic demo
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Provide a public demo so you can test regiz Dapp
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Price Alerts
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Get alerts on events for your tracked coins
          </p>
          <p className="text-xl font-bold mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Release 0.1
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            The BETA version of our app goes public.
          </p>
        </div>

        <div className="m-4">
          <div className="flex pt-6 items-center">
            <p className="text-xl text-blue-500 dark:text-white">
              <BsFillSignpostFill className="fill-black dark:fill-[#0cc0df]" />
            </p>
            <h1 className="text-[#0cc0df] text-xl mx-3 dark:text-[#EEEE] font-bold">
              Q2 - 2024
            </h1>
          </div>
          <p className="text-xl font-bold mt-4 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            Launch Dapp
          </p>
          <p className="text-xl font-light mt-3 bg-gray-100 shadow-sm dark:bg-gray-300 p-2 rounded-md">
            launch on App Store and Play store
          </p>
        </div>
      </div>

      {/* <div className="max-w-[750px] mx-auto">
        {data.map(
          ({
            date,
            id,
            para1,
            para2,
            para3,
            para4,
            para5,
            para6,
            para7,
            para8,
            sub1,
            sub2,
            sub3,
            sub4,
            sub5,
            sub6,
            sub7,
            sub8,
          }) => {
            return (
              <div key={id}>
                <div>
                  <div className="flex m-4 mt-4">
                    <p className="text-xl text-blue-500 dark:text-white">
                      <BsFillSignpostFill className="fill-black" />
                    </p>
                    <h1 className="text-blue-500 text-xl mx-3 dark:text-white">
                      {date}
                    </h1>
                  </div>
                  <div>
                    <div className="space-y-6 dark:text-gray-200">
                      <p>{para1}</p>
                      <p>{para2}</p>
                      <p>{para3}</p>
                      <p>{para4}</p>
                      <p>{para5}</p>
                      <p>{para6}</p>
                      <p>{para7}</p>
                      <p>{para8}</p>
                      <p>{sub1}</p>
                      <p>{sub2}</p>
                      <p>{sub3}</p>
                      <p>{sub4}</p>
                      <p>{sub5}</p>
                      <p>{sub6}</p>
                      <p>{sub7}</p>
                      <p>{sub8}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div> */}
    </div>
  );
}

export default Roadmap;

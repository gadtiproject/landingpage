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
                    <div className="space-y-6">
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
      </div>
    </div>
  );
}

export default Roadmap;

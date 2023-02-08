import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Roadmap() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
      sub4: " Add support for multipage document",
      para5: "Add verification partners",
      sub5: "Partnership with issuing organizations",
      para6: "Basic demo",
      sub6: "Provide a public demo so you can test regiz Dapp",
      para7: "Price Alerts",
      sub7: "Get alerts on events for your tracked coins",
      para8: "Release 0.1",
      sub8: "The BETA version of our app goes public.",
    },
    {
      id: 5,
      date: "Q5 - 2023",
      para1: "Launch Dapp",
      sub1: "launch on App Store and Play store",
      sub2: "Marketing",
      sub3: "Addition of issuing organization",
      sub4: "  Additional Features",
      sub5: "Launch Nft Market place",
      para2: "GET STARTED",    
    },
  ];


  return (
    <div name="roadmap" className="text-white  dark:bg-[#070909] bg-[#f0f0f1]">
      <p className="text-5xl text-center mt-3 dark:text-white text-black font-bold tracking-wide mb-5 p-5">
        Roadmap
      </p>
      <p className="text-gray-500 text-xl leading-5 text-center font-[poppins] p-5">
        Project roadmap for the year 2022/23
      </p>

      <Carousel
        responsive={responsive}
        focusOnSelect={false}
        infinite
      >
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
                <div className="flex place-items-center justify-center items-center px-[25px]">
                  <div className="roadmap__milestone w-[300px] lg:w-[400px] h-[300px] bg-[#02383C] dark:bg-white overflow-scroll">
                    <div className="roadmap__milestone-description">
                      <h5 className="text-end text-white dark:text-black date">
                        {date}
                      </h5>
                      <div className="text-white dark:text-black text-start mt-5">
                        <p className="font-bold text-xl">{para1}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub1}
                        </p>
                        <p className="font-bold text-xl mt-3">{para2}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub2}
                        </p>
                        <p className="font-bold text-xl mt-3">{para3}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub3}
                        </p>
                        <p className="font-bold text-xl mt-3">{para4}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub4}
                        </p>
                        <p className="font-bold text-xl mt-3">{para5}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub5}
                        </p>
                        <p className="font-bold mt-3 text-2zl">{para6}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub6}
                        </p>
                        <p className="font-bold mt-3 text-xl">{para7}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub7}
                        </p>
                        <p className="font-bold mt-3 text-xl">{para8}</p>
                        <p className="text-x text-white dark:text-[#111] font-[poppins]">
                          {sub8}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Carousel>
    </div>
  );
}

export default Roadmap;

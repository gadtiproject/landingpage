import React from "react";

function Roadmap() {
  return (
    <div
      name="roadmap"
      className="text-white mt-24 dark:bg-[#070909] bg-[#F3F4F6]"
    >
      <p className="text-5xl text-center mt-3 dark:text-white text-black font-bold tracking-wide mb-5 p-5">
        Roadmap
      </p>
      <p className="text-gray-500 text-xl leading-5 text-center font-[poppins] p-5">
        Project roadmap for the year 2022/23
      </p>

      <div class="roadmap lg:m-10 grid lg:grid-cols-3 place-items-center justify-center items-center">
        <div className="flex place-items-center justify-center items-center">
          <div class="roadmap__milestone w-[300px] lg:w-[400px] lg:h-[300px] bg-[#02383C] dark:bg-white">
            <div class="roadmap__milestone-description">
              <p className="text-end text-white dark:text-black date">
                Q4 - 2022
              </p>
              <div className="text-white dark:text-black text-start">
                <h5 className="font-bold text-xl mt-5">New website</h5>
                <p className="text-x text-white dark:text-[#111] mt-3 font-[poppins]">
                  Launch of website/branding for product
                </p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Publicity and Engagement.
                </p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Q&A
                </p>
              </div>
            </div>
          </div>
          <span className="arrow-right"></span>
        </div>

        <div className="flex place-items-center justify-center items-center">
          <div class="roadmap__milestone w-[300px] lg:w-[400px] lg:h-[300px] overflow-scroll bg-[#02383C] dark:bg-white">
            <div className="flex place-items-center justify-center items-center">
              <div class="roadmap__milestone-description">
                <p className="text-end text-white dark:text-black date">
                  Q1 - 2023
                </p>
                <div className="text-white dark:text-black text-start">
                  <h5 className="font-bold text-xl mt-5">Token Sale</h5>
                  <p className="text-x mb-2 font-[poppins] text-white dark:text-[#111]">
                    Seed & Private sale, see Tokenomics
                  </p>
                  <p className="font-bold text-xl">PancakeSwap Listing</p>
                  <p className="text-x mb-1 font-[poppins] text-white dark:text-[#111]">
                    15% of the total supply will be added as liquidity
                  </p>
                  <p className="font-bold text-xl mt-3">Listing on Coingecko</p>
                  <p className="font-bold text-xl mt-3">
                    Listing on Coinmarketcap
                  </p>
                  <p className="font-bold text-xl mt-3">Closed beta group</p>
                  <p className="text-x font-[poppins] text-white dark:text-[#111]">
                    Early testers for the app
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="arrow-right"></span>
        </div>

        <div className="flex place-items-center justify-center items-center">
          <div class="roadmap__milestone w-[300px] lg:w-[400px] lg:h-[300px] overflow-scroll bg-[#02383C] dark:bg-white">
            <div class="roadmap__milestone-description">
              <h5 className="text-end text-white dark:text-black date">
                Q2 - 2023
              </h5>
              <div className="text-white dark:text-black text-start mt-5">
                <p className="font-bold text-xl">Market campaign</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  We will start our marketing listing
                </p>
                <p className="font-bold text-xl mt-3">Contract Audit</p>
                <p className="text-white dark:text-[#111] text-x font-[poppins]">
                  Our contract will get audited by TBD
                </p>
                <p className="font-bold text-xl mt-3">Multi-network profiles</p>
                <p className="text-white dark:text-[#111] text-x font-[poppins]">
                  Track on ETH & BSC Networks
                </p>
                <p className="font-bold text-xl mt-3">Buyback integration</p>
                <p className="text-white dark:text-[#111] text-x font-[poppins]">
                  Reward for regiscoin
                </p>
                <p className="font-bold mt-3 text-xl">Learning Pad</p>
                <p className="text-white dark:text-[#111] font-[poppins] text-x">
                  Community learning center for cryptocurrencies and tokens
                </p>
              </div>
            </div>
          </div>
          <span className="arrow-right"></span>
        </div>

        <div className="flex place-items-center justify-center items-center">
          <div class="roadmap__milestone w-[300px] lg:w-[400px] lg:h-[300px] overflow-scroll bg-[#02383C] dark:bg-white">
            <div class="roadmap__milestone-description">
              <h5 className="text-end text-white dark:text-black date">
                Q3 -2023
              </h5>
              <div className="text-white dark:text-black text-start mt-5">
                <p className="font-bold text-xl">UX/UI Review</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Refinement of user experience
                </p>
                <p className="font-bold text-xl mt-3">
                  All core concept features
                </p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Regiz proof of concept
                </p>
                <p className="font-bold text-xl mt-3">Verification Protocol</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Refine Verification Analysis
                </p>
                <p className="font-bold text-xl mt-3">Multi-document Support</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Add support for multipage document
                </p>
                <p className="font-bold text-xl mt-3">
                  Add verification partners{" "}
                </p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Partnership with issuing organizations{" "}
                </p>
                <p className="font-bold mt-3 text-2zl">Basic demo</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Provide a public demo so you can test regiz Dapp
                </p>
                <p className="font-bold mt-3 text-xl">Price Alerts</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  Get alerts on events for your tracked coins
                </p>
                <p className="font-bold mt-3 text-xl">Release 0.1</p>
                <p className="text-x text-white dark:text-[#111] font-[poppins]">
                  The BETA version of our app goes public.
                </p>
              </div>
            </div>
          </div>
          <span className="arrow-right"></span>
        </div>

        <div class="roadmap__milestone w-[300px] lg:w-[400px] lg:h-[300px] bg-[#02383C] dark:bg-white">
          <div class="roadmap__milestone-description">
            <h5 className="text-end text-white dark:text-black date">
              Q4 - 2023
            </h5>
            <div className="text-white dark:text-black mt-5">
              <p className="font-bold text-xl">Launch Dapp</p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                launch on App Store and Play store{" "}
              </p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Marketing
              </p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Addition of issuing organization
              </p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Additional Features
              </p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Launch Nft Market place{" "}
              </p>
              <p className="font-bold text-xl mt-3">GET STARTED</p>
              <p className="text-white dark:text-[#111] text-x font-[poppins]">
                Token pre-sale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

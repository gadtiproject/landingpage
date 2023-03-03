import React from "react";

function Regizcoin() {
  return (
    <div name="Regizcoin">
      <h5 className="lg:text-4xl text-3xl text-center dark:text-white text-black font-bold tracking-wide mb-5 pt-5">
        Regizcoin
      </h5>

      <div className="grid lg:flex lg:m-10 m-5 place-items-center gap-5 items-center justify-center  ">
        <div
          data-aos="fade-left"
          className="leading-10  m-5 lg:text-start  break-word place-items-center"
        >
          <p className="dark:text-white text-black mt-3 text-base leading-9 lg:leading-10 text-justify lg:text-xl w-[310px] md:w-[400px] lg:w-[600px] break-word">
            Regizcoin is a token owned by Regiz LLC.
          </p>

          <p className="dark:text-white text-black mt-3 text-base leading-9 lg:leading-10 text-justify lg:text-xl w-[310px] md:w-[400px] lg:w-[600px] break-word">
            Regizcoin will be used for payments to access services on the
            platform. Either on the Documentation Technology platform or Social
            Marketplace, Regizcoin will be our acceptable transaction currency.
            The purpose of the coin is for easy accessibility and usage of the
            platform; it makes the platform accessible to users globally.
          </p>
        </div>

        <div
          className="mt-5 lg:mt-0 flex items-center justify-center place-items-center"
          data-aos="fade-up"
        >
          <div className="text-center mx-5 mb-3 rounded-lg h-[300px] w-[300px] md:w-[400px]  lg:w-[500px]">
            <div className="p-2">
              <div className="flex text-black justify-between m-5 text-x">
                <p>Token Name</p>
                <p className="text-end uppercase">Regiz coin</p>
              </div>
              <hr className="border-black border-1" />
              <div className="flex text-black gap-5 justify-between m-5 text-x">
                <p>Symbol</p>
                <p className="uppercase">rgz</p>
              </div>
              <hr className="border-black border-1" />
              <div className="flex text-black gap-5 justify-between m-5 text-x">
                <p>Token Supply</p>
                <p>100 Billion</p>
              </div>
              <hr className="border-black border-1" />
              <div className="flex text-black gap-5 justify-between m-5 text-x">
                <p>Total in Circulation</p>
                <p>67%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#070909]  bg-[#fff] grid lg:flex justify-center items-center place-items-center">
        <div className="justify-center items-center place-items-center h-[600px]">
          <h3 className="lg:text-4xl text-3xl text-center mt-3 dark:text-white font-bold tracking-wide mb-5 pt-5 text-black">
            Token Distribution
          </h3>
          <div className="lg:m-20 text-start m-5 md:w-[500px] lg:w-[540px] w-[300px]  bg-slate-50 p-5 rounded shadow-md">
            <p className="text-black text-xl">Private Sales 1%</p>
            <div className="w-full shadow bg-[#323F52] mt-3 rounded-lg">
              <div
                className="bg-blue-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-black w-20 lg:w-[1%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Public Sales 10%</p>
            <div className="w-full shadow bg-[#323F52] mt-3 rounded-lg">
              <div
                className="bg-blue-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-black w-20 lg:w-[10%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Team 3%</p>
            <div className="w-full shadow bg-[#323F32] mt-5 rounded-lg">
              <div
                className="bg-green-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-14 lg:w-[3%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Airdrops 5%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-red-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-12 lg:w-[5%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Rewards 10%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-blue-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-24 lg:w-[10%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Liquidity 40%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-orange-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-36 lg:w-[40%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Locked 30%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-cyan-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-white w-12 lg:w-[30%]"
                data-aos="slide-right"
              ></div>
            </div>
          </div>
        </div>

        <div className="justify-center items-center place-items-center lg:h-[600px] ">
          <h3 className="lg:text-4xl text-3xl text-center mt-3 font-bold tracking-wide mb-5 pt-5 text-black dark:text-white">
            Taxes
          </h3>
          <p className="text-x text-center italics tracking-wide text-black">
            10% of transaction fee
          </p>

          <div className="lg:m-10 text-start m-5 md:w-[500px] lg:w-[540px] w-[300px] bg-slate-50 p-5 rounded shadow-md">
            <p className="text-black text-xl">Liquidity 2%</p>
            <div className="w-full shadow bg-[#323F52] mt-3 rounded-lg">
              <div
                className="bg-blue-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-black w-20 lg:w-[2%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Airdrop 3%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-orange-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-36 lg:w-[3%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Dev 2%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-green-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-14 lg:w-[2%]"
                data-aos="slide-right"
              ></div>
            </div>

            <p className="text-black text-xl">Marketing 3%</p>
            <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
              <div
                className="bg-red-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-black w-12 lg:w-[3%]"
                data-aos="slide-right"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regizcoin;

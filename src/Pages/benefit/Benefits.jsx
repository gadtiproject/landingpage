import React from "react";
function Benefits() {
  return (
    <div
      name="benefit"
      className="dark:bg-[#070909] dark:text-[#fff] pt-5 lg:h-[600px] h-full mt-24 justify-center place-items-center"
    >
      <h1 className="lg:text-4xl text-3xl text-center mt-3 text-black font-bold tracking-wide mb-5 dark:text-[#fff] pt-8">
        BENEFITS
      </h1>

      <div>
        <div className="lg:m-10 m-5 lg:flex place-items-center items-center justify-center margin-auto xl:gap-20 lg:gap-10">
          <div className="gap-5">
            <div className="flex md:grid-cols-2">
              <div className="grid">
                <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">
                  Decentralized database
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Be in charge of your Documents/decide whom to share it with.
                </p>
              </div>
            </div>

            <div className="flex md:grid-cols-2 mt-5">
              <div className="grid">
                <h3 className="text-black dark:text-[#fff] mt-3 text-xl tracking-wide text-start font-bold">
                  Security
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Built on Blockchain Technology
                </p>
              </div>
            </div>

            <div className="flex md:grid-cols-2 mt-5">
              <div className="grid">
                <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">
                  True Digital Copy
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Verified true digital copy of the uploaded document with a
                  badge.{" "}
                </p>
              </div>
            </div>

            <div className="flex md:grid-cols-2 mt-5">
              <div className="grid">
                <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">
                  Third-party Control/Access{" "}
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Control Third-party access via App.
                </p>
              </div>
            </div>
          </div>

          <div className="gap-5">
            <div className="flex md:grid-cols-2">
              <div className="grid">
                <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">
                  Accessibility{" "}
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Instant access to documents on the move.{" "}
                </p>
              </div>
            </div>

            <div className="flex md:grid-cols-2 mt-5">
              <div className="grid">
                <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">
                  Acceptability
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Digital copies are acceptable and valid globally.{" "}
                </p>
              </div>
            </div>

            <div className="flex md:grid-cols-2 mt-5">
              <div className="grid">
                <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">
                  Global Search
                </h3>
                <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
                  Documents are verifiable globally{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

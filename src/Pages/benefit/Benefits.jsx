import React from "react";
function Benefits() {
  return (
    <div name="benefit" className="mt-[5%]">
      <h4 className="lg:text-4xl text-3xl text-center dark:text-white text-black font-bold tracking-wide mb-5 pt-5">
        BENIFITS
      </h4>

      <div className="h-[500px] lg:flex grid items-center justify-center gap-[20px]">
        <div className="h-full w-[400px] space-y-6">
          <div>
            <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">
              Decentralized database
            </h3>
            <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff] lg:w-[350px]">
              Be in charge of your Documents/decide whom to share it with.
            </p>
          </div>

          <div>
            <h3 className="text-black dark:text-[#fff] mt-3 text-xl tracking-wide text-start font-bold">
              Security
            </h3>
            <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
              Built on Blockchain Technology
            </p>
          </div>

          <div>
            <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">
              True Digital Copy
            </h3>
            <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff] lg:w-[320px]">
              Verified true digital copy of the uploaded document with a badge.{" "}
            </p>
          </div>

          <div>
            <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">
              Third-party Control/Access{" "}
            </h3>
            <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
              Control Third-party access via App.
            </p>
          </div>
        </div>
        <div className="h-full w-[400px] space-y-6">
          <div>
            <h3 className="text-black dark:text-[#fff] mt-2 text-xl tracking-wide text-start font-bold">
              Accessibility{" "}
            </h3>
            <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
              Instant access to documents on the move.{" "}
            </p>
          </div>

          <div>
            <h3 className="text-black mt-3 text-xl tracking-wide text-start dark:text-[#fff] font-bold">
              Acceptability
            </h3>
            <p className="text-black mt-2 text-base tracking-wide text-start dark:text-[#fff]">
              Digital copies are acceptable and valid globally.{" "}
            </p>
          </div>

          <div>
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
  );
}

export default Benefits;

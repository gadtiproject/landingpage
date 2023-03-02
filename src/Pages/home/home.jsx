import React from "react";

function Home() {
  return (
    <div
      name="home"
      className="lg:mt-[10%] lg:w-[80%] lg:h-[588px] lg:mx-auto items-center justify-center grid"
    >
      <div className="lg:grid-cols-2 grid gap-[20px] mt-5 dark:text-white">
        <div className=" w-[90%] mx-auto ">
          <p className="lg:font-[600] fon-bold text-[#6A7380]">Experiencing</p>
          <h2 className="lg:text-[45px] lg:w-[532px] w-[400px] text-[35px] font-[600] mt-2">
            The world’s{" "}
            <span className="text-[#0cc0df]">First block chain</span>{" "}
            <span>Documentation Technology </span>
            (DOCUTECH)
          </h2>
          <p className="lg:w-[532px] w-[389px] mt-5 text-[#8B919A] text-[18px] lg:leading-6 lg:tracking-wide">
            The era of document falsification and in unverifiability is about to
            be a thing of the past. Welcome to the Generation Alpha Digital
            Documentation Technology.{" "}
            <span className="text-black font-bold dark:text-white">
              We are making documents Digital Asset.{" "}
            </span>
            Yes, you heard that right.
          </p>
          <button className="rounded-md hover:font-bold border mt-5 px-6 py-2 dark:text-black dark:border-black hover:border-[#0cc0df] hover:bg-transparent bg-[#0cc0df] hover:shadow-sm transistion-all duration-300">
            Get Started
          </button>
        </div>

        <div className="lg:mt-0 mt-[30px] w-[90%] mx-auto justify-center items-center flex">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1677754986/WhatsApp_Image_2023-03-01_at_8.40.38_AM_xsbp3x.jpg"
            alt="regiz-dashboard"
            className="items-center justify-center flex w-[700px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

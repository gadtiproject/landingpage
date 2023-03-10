import React from "react";

function Home() {
  return (
    <div
      name="home"
      className="lg:mt-[5%] mt-[5%] lg:w-[80%] lg:h-[588px] lg:mx-auto items-center justify-center grid"
    >
      <div className="lg:grid-cols-2 grid gap-[20px] mt-5 dark:text-white">
        <div className="w-[90%] mx-auto">
          <p className="lg:font-[600] font-bold text-[#6A7380]">Experience</p>
          <h2 className="lg:text-[45px] lg:w-[600px] text-[32.5px] font-[600] mt-2">
            World’s <span className="text-[#0cc0df]">First Block Chain</span>{" "}
            <span className="text">Documentation Technology </span>
            <p className="motion-safe:animate-bounce">DOCUTECH</p>
          </h2>
          <p className="lg:w-[532px]  mt-5 text-[#8B919A] text-[18px] lg:leading-6 lg:tracking-wide">
            The era of document falsification and unverifiability is about to be
            a thing of the past. Welcome to the Generation Alpha Digital
            Documentation Technology.
            <span className="text-black font-bold dark:text-white">
              We are making documents Digital Asset.{" "}
            </span>
            Yes! you heard that right.
          </p>
          <button className="rounded-md mt-5 px-6 py-2 dark:text-black hover:opacity-75 hover:text-white bg-[#0cc0df] hover:shadow-sm transistion-all duration-300">
            Get Started
          </button>
        </div>

        <div className="lg:mt-0 mt-[30px] w-[90%] mx-auto justify-center items-center flex">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1678182270/WhatsApp_Image_2023-03-01_at_8.40.13_AM_wu0opr-removebg-preview_lrszii.png"
            alt="regiz-dashboard"
            className="items-center justify-center flex w-[700px]"
          />
        </div>
      </div>

      <div className="mt-[5%] dark:text-white w-full">
        <div className="lg:grid-cols-2 flex-col-reverse flex gap-[20px] items-center lg:grid">
          <div className="lg:mt-0 mt-[30px] w-[90%] mx-auto justify-center items-center flex">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1678182274/WhatsApp_Image_2023-03-01_at_8.40.38_AM_xsbp3x-removebg-preview_gaq4g0.png"
              alt="regiz-dashboard"
              className="items-center justify-center flex w-[300px] h-[300px] object-cover"
            />
          </div>
          <p className="lg:w-[532px] w-[350px] mt-5 text-[#8B919A] text-[18px] lg:leading-6 lg:tracking-wide items-center justify-center flex flex-col">
            Did you know you can make money by creating a digital copy of your
            certificate? Rather than have your certificate lying down on your
            bookshelf, why not make it valuable? Regiz offers you powerful
            digital documentation technology,
            <span className="text-black font-bold dark:text-white">
              where you can have your certificate as a digital asset and earn
              money.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";

function Home() {
  return (
    <div name="home">
      <div className="xl-pt-[20%] lg:pt-[10%] md:pt-[20%] pt-[30%] w-[90%] mx-auto">
        <img
          src="https://res.cloudinary.com/dpokiomqq/image/upload/v1675807882/dashboard_image_gvyy8j.jpg"
          alt="regiz image"
          className="rounded-lg drop-shadow-sm"
        />

        <div className="lg:pt-[5%] pt-[10%] text-center">
          <button className="rounded-full py-6 px-5 lg:w-[300px] w-[200px] text-white dark:text-white hover:text-black hover:dark:text-white bg-[#02383C] hover:bg-transparent hover:border-2 hover:dark:border-white hover:border-[#070909] transistion-all duration-300">
            GET STRATED
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

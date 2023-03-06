import React from "react";

function Careers() {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="text-center space-y-6 mt-24 lg:mt-0">
        <p className="lg:text-5xl text-4xl text-center font-bold text-black dark:text-white">
          Sorry, we're not hiring now...
        </p>
        <button className="">
          <a
            href="/home"
            class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#0BC0DF] active:shadow-none shadow-lg bg-gradient-to-tr from-[#0BC0DF] to-[#0197B2] border-[#0BC0DF] text-white"
          >
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span class="relative">Go back home</span>
          </a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Careers;

import React from "react";
import Carousel1 from './carosuel';
function Personna() {
  return (
    <div name="persona" className="mt-24">
      <h1 className="lg:text-4xl text-3xl text-center dark:text-[#fff] text-black font-bold tracking-wide mb-5 pt-5">
        Persona
      </h1>
      <div>
        <Carousel1/>
      </div>
    </div>
  );
}

export default Personna;

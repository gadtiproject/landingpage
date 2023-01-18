import React from "react";
import Items from "./items";
import Carousel1 from './carosuel1';
function Personna() {
  return (
    <div name="persona" className="mt-24">
      <h1 className="lg:text-5xl text-3xl text-center dark:text-[#fff] text-black font-bold tracking-wide mb-5 pt-5">
        Persona
      </h1>
      <div>
        <Carousel1/>
        {/* <Items/> */}
      </div>
    </div>
  );
}

export default Personna;

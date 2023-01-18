import React from "react";
import Dashboard from "./dashboard/Dashboard";
import About from "./about/About";
import Features from "./feature/Features";
import Benefits from "./benefit/Benefits";
import Howitworks from "./how/Howitworks";
import Regiscoin from "./regiscoin/Regiscoin";
import Roadmap from "./roadmap/Roadmap";
import Team from "./team/Team";
import Personna from "./persona/Personna"
function AllPages() {
  return (
    //  <div className="justify-center items-center flex w-[100%]">
      <div>
         <Dashboard />
        <About />
        <Features />
        <Benefits />
        <Howitworks />
        <Regiscoin /> 
        <Personna/> 
        <Roadmap />
        <Team />
      </div>
    //</div>
  );
}

export default AllPages;

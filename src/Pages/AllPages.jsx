import React from "react";
import Home from "./home/home";
import About from "./about/About";
import Features from "./feature/Features";
import Benefits from "./benefit/Benefits";
import Howitworks from "./how/Howitworks";
import Regiscoin from "./regiscoin/Regiscoin";
import Roadmap from "./roadmap/Roadmap";
import Team from "./team/Team";
import Personna from "./persona/Personna"
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";

function AllPages() {
  return (
      <div>
        <Navbar/>
        <Home />
        <About />
        <Howitworks />
        <Features />
        <Benefits />
        <Regiscoin /> 
       {/* <Personna/> 
        <Roadmap />
        <Team />
        <MainFooter/> */}
      </div>
  );
}

export default AllPages;

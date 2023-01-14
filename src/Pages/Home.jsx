import React from "react";
import Dashboard from './dashboard/Dashboard'
import About from './about/About'
import Features from './feature/Features'
import Benefits from './benefit/Benefits'
import Howitworks from './how/Howitworks'
import Regiscoin from './regiscoin/Regiscoin'
import Personna from './persona/Personna'
import Team from './team/Team'
import Roadmap from './roadmap/Roadmap'
import Contact from '../components/Contact'

function Main() {
  return (
    <>
        <Dashboard/>
        <About/>
        <Features/>
        <Benefits/>
        <Howitworks/>
        <Regiscoin/>
        <Personna/>
        <Roadmap/>
        <Team/>
        <Contact/>
    </>
  )

}

export default Main;

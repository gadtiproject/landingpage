import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Layout from "./components/Layout";
import AllPages from "./Pages/AllPages";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import CareerPage from "./Pages/career/CareerPage";
import Faqs from "./Pages/faq/Faq";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={9}
        outerSize={15}
        color="102, 204, 123"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <div className="bg-white dark:bg-[#070909] min-h-screen font-inter">
        <div className="overflow-hidden">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="home" element={<AllPages />} />
                <Route path="contact" element={<Contact />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/faq" element={<Faqs />} />
                <Route path="/careers" element={<CareerPage />} />
              </Route>
            </Routes>
          </Router>
          {/* <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={
              <React.Suspense fallback='Loading...'>
               <LazyContact />
              </React.Suspense>
              } /> 
              <Route path="/faq" element={<Faqs />} />
              <Route path="/careers" element={<CareerPage />} />
            </Routes>
          </Router> */}
        </div>
      </div>
    </>
  );
}

export default App;

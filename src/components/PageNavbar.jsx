import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


function PageNavbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="z-10 top-0 fixed w-full">
      {/* logo image */}
      <div className="lg:flex justify-between px-5 p-3 fixed top-0 z-10 w-full  bg-white dark:bg-black transistion-all duration-300 hidden">
        <div className="lg:flex items-center md:hidden flex justify-center">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1671902954/regizlogo_2_ey8kjj.png"
            alt="regizlogo"
            className="w-[70px]"
          />
          <h1 className="text-3xl font-[TitanOne] dark:text-white">regiz</h1>
        </div>

        {/* Links for desxtop */}
        <ul className="lg:flex items-center justift-center space-x-6 text-black dark:text-[#FEFEFF] hidden gap-6">
          <li className="hover:text-[#0BC0DF] cursor-pointer">
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li className="hover:text-[#0BC0DF] cursor-pointer uppercase">
            <NavLink to="/Careers">Careers</NavLink>
          </li>
          <li className="hover:text-[#0BC0DF] cursor-pointer uppercase">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hover:text-[#0BC0DF] cursor-pointer uppercase">
            <NavLink to="/faq">Faq</NavLink>
          </li>
        </ul>
        <div className="pr-5 mt-[1%] lg:block hidden">
          <button type="button" onClick={handleThemeSwitch} className="pt-2">
            {theme === "dark" ? (
              <div className="text-[gray] text-2xl">
                <ion-icon name="moon"></ion-icon>{" "}
              </div>
            ) : (
              <div className="text-[black] text-2xl">
                <ion-icon name="sunny"></ion-icon>
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="z-10 top-0 flex bg-white dark:bg-black dark:text-white text-black drop-shadow-lg justify-between p-1 lg:hidden">
        <div className="flex">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1671902954/regizlogo_2_ey8kjj.png"
            alt="regizlogo"
            className="w-[70px]"
          />
          <h1 className="text-3xl mt-3 font-[TitanOne] dark:text-white">
            regiz
          </h1>
        </div>

        <div
          className="cursor-pointer flex items-center justify-center pr-2"
          onClick={handleClick}
        >
          {!nav ? (
            <FiMenu className="w-8 h-8" />
          ) : (
            <AiOutlineClose className="w-8 h-8 fill-black dark:fill-white" />
          )}
        </div>
      </div>

      {/* mobile navbar */}
      <div
        className={
          !nav ? "hidden" : "absolute w-full drop-shadow-lg cursor-pointer"
        }
      >
        <div className="flex flex-col bg-white dark:bg-[#010101] relative z-10">
          <ul>
            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase cursor-pointer">
              <Link to="/home">HOME</Link>
            </li>
            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase cursor-pointer">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase cursor-pointer">
              <Link to="/Careers">CAREER</Link>
            </li>
            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase cursor-pointer">
              <Link to="/contact">CONTACT</Link>
            </li>

            <button
              type="button"
              onClick={handleThemeSwitch}
              className="w-12 bg-[#0097b2] text-lg px-2 py-2  grid items-center justify-center m-3 rounded-full"
            >
              {theme === "dark" ? (
                <div className="text-white text-2xl pt-1">
                  <ion-icon name="sunny"></ion-icon>{" "}
                </div>
              ) : (
                <div className="text-[black] text-2xl pt-1">
                  <ion-icon name="moon"></ion-icon>
                </div>
              )}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageNavbar;

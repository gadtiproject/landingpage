import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
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
    <div className="bg-white dark:bg-black">
      {/* logo image */}
      <div className="w-full fixed top-0 z-10 bg-white dark:bg-black pt-[0.5%] md:border-t border-[#E8EBED] border-b">
        <div className="justify-between lg:flex hidden items-center bg-white dark:bg-black w-[90%] mx-auto">
          <div className="lg:flex items-center md:hidden flex">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1671902954/regizlogo_2_ey8kjj.png"
              alt="regizlogo"
              className="w-[70px]"
            />
            <h1 className="dark:text-[#FEFEFF] lg:text-3xl text-2xl text-black font-[TitanOne]">
              regiz
            </h1>
          </div>
          {/* Links for desxtop */}
          <ul className="lg:flex items-center justift-center gap-[50px] text-black dark:text-[#FEFEFF] hidden">
            <li className="hover:text-[#0cc0df] cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#0cc0df]  cursor-pointer ">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <div className="dropdown relative">
                <button
                  className="
                        dropdown-toggle
                        px-3
                        hover:text-[#0cc0df] 
                        link
                        font-medium
                        leading-tight
                        no-underline	
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex                        
                        items-center
                        whitespace-nowrap
                      "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICE
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>
                <ul
                  className="dropdown-menu min-w-max absolute hidden bg-white cursor-pointer text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      to="feature"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            cursor-pointer
                            px-4
                            font-normal
                            block                           
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      Features
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="benefit"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block                           
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      Benefit
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown relative">
                <button
                  className="
                        dropdown-toggle
                        px-3
                        hover:text-[#0cc0df] 
                        link
                        font-medium
                        leading-tight
                        no-underline	
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                        whitespace-nowrap
                      "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>
                <ul
                  className="
                        dropdown-menu
                        min-w-max
                        absolute
                        hidden
                        bg-white
                        cursor-pointer
                        text-base
                        z-50
                        float-left
                        py-2
                        list-none
                        text-left
                        rounded-lg
                        shadow-lg
                        mt-1
                        m-0
                        bg-clip-padding
                        border-none
                      "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      to="how"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            uppercase
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Regiscoin"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            uppercase
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      Regiscoin
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="team"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      TEAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="persona"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2                            
                            uppercase
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      Persona
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="hover:text-[#0cc0df] cursor-pointer ">
              <Link to="roadmap" smooth={true} duration={500}>
                Roadmap
              </Link>
            </li>

            <li>
              <NavLink
                to="/faq"
                className="hover:text-[#0cc0df] cursor-pointer"
              >
                FAQ
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex gap-[20px] items-center justify-center">
            <button className="bg-[#0cc0df] rounded px-4 py-2 hover:opacity-75 transistion-all duration-300">
              Get Started
            </button>

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

          {/* <div className="">
          
          </div> */}
        </div>
      </div>

      <div className="z-10 top-0 flex bg-white dark:bg-black dark:text-white text-black drop-shadow-lg justify-between p-1 lg:hidden">
        <div className="flex">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1671902954/regizlogo_2_ey8kjj.png"
            alt="regizlogo"
            className="w-[70px]"
          />
          <h1 className="text-3xl mt-3 font-[TitanOne]">regiz</h1>
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
        <div className="flex flex-col bg-white dark:bg-[#010101] relative z-10 drop-shadow-lg">
          <ul>
            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase cursor-pointer">
              <a href="/">Home</a>
            </li>

            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase">
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </li>

            <div className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase">
              <div>
                <div className="dropdown relative">
                  <button
                    className="
                                      dropdown-toggle                                                      
                                      text-black
                                      font-medium
                                      leading-tight
                                      uppercase        
                                      transition
                                      duration-150
                                      ease-in-out
                                      flex
                                      dark:text-white
                                      p-0
                                      hover:text-white
                                      mt-0
                                      items-center
                                      whitespace-nowrap
                                    "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICE
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
                                      dropdown-menu
                                      min-w-max
                                      absolute
                                      bg-white
                                      text-base
                                      z-50                        
                                      float-left
                                      py-2
                                      list-none
                                      text-left
                                      rounded-lg
                                      shadow-lg
                                      mt-1
                                      hidden
                                      m-0
                                      bg-clip-padding
                                      border-none
                                    "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link
                        onClick={handleClose}
                        to="feature"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                          text-sm
                                          py-2
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          whitespace-nowrap
                                          bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100"
                      >
                        Features
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClose}
                        to="benefit"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                          text-sm
                                          py-2
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          whitespace-nowrap
                                          bg-transparent
                                          text-gray-700
                                          hover:bg-gray-100"
                      >
                        BENEFIT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase">
              <div>
                <div className="dropdown relative">
                  <button
                    className="
                                      dropdown-toggle
                                    dark:text-white                         
                                      text-black
                                      font-medium
                                      leading-tight
                                      uppercase        
                                      transition
                                      duration-150
                                      ease-in-out
                                      flex
                                      hover:text-white
                                      mt-0
                                      items-center
                                      whitespace-nowrap
                                    "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PAGES
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
                                      dropdown-menu
                                      min-w-max
                                      absolute
                                      bg-white
                                      text-base
                                      z-50                     
                                      float-left
                                      py-2
                                      list-none
                                      text-left
                                      rounded-lg
                                      shadow-lg
                                      mt-1
                                      hidden
                                      m-0
                                      bg-clip-padding
                                      border-none
                                    "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link
                        onClick={handleClose}
                        to="how"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                          text-sm
                                          py-2
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          uppercase
                                          whitespace-nowrap
                                          bg-transparent
                                          text-gray-700
                                          hover:bg-gray-100"
                      >
                        HOW IT WORKS
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        to="regiscoin"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                          text-sm
                                          py-2
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          uppercase
                                          whitespace-nowrap
                                          bg-transparent
                                          text-gray-700
                                          hover:bg-gray-100"
                      >
                        Regiscoin
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        to="persona"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                          text-sm
                                          py-2
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          whitespace-nowrap
                                          bg-transparent
                                          text-gray-700
                                          hover:bg-gray-100"
                      >
                        Personna
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        to="team"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                          text-sm
                                          py-2
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          uppercase
                                          whitespace-nowrap
                                          bg-transparent
                                          text-gray-700
                                          hover:bg-gray-100"
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase">
              <Link
                onClick={handleClose}
                to="roadmap"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Roadmap
              </Link>
            </li>

            <li className="w-full mb-3 text-[#000101] dark:text-white hover:bg-[#0097b2] py-2 px-4 hover:text-white leading-6 text-base uppercase">
              <NavLink to="/faq" onClick={handleClose}>
                FAQ
              </NavLink>
            </li>

            <button
              type="button"
              onClick={handleThemeSwitch}
              className="w-12 bg-[#0097b2] text-lg px-2 py-2  grid items-center justify-center m-3 rounded-full"
            >
              {theme === "dark" ? (
                <div className="text-white text-2xl pt-2">
                  <ion-icon name="sunny"></ion-icon>{" "}
                </div>
              ) : (
                <div className="text-black text-2xl pt-2">
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

export default Navbar;

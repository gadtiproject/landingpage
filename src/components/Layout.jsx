import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";

function Layout() {
  return (
    <div className="flex justify-center items-center place-items-center ">
      <div className="w-[100%]">
        <Navbar />
        <Outlet />
        <MainFooter />
      </div>
    </div>
  );

}

export default Layout;

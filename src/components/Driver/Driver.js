import React from "react";
import Infoform from "./Infoform";
import Mainnav from "../MainDashboard/Mainnav";
import Navbar from "../MainDashboard/Navbar";
import Asidenav from "../MainDashboard/Asidenav";
import Cards from "../MainDashboard/Cards";
const User = () => {
  return (
    <div className="md:flex h-screen ">
      <Asidenav />
      <div className="md:w-full md:px-10 ">
        <div className="ml-0 md:ml-[200px]">
          <Navbar />
          <Cards />
        </div>
        <div className=" md:ml-60">
          <Infoform />
        </div>
      </div>
    </div>
  );
};

export default User;

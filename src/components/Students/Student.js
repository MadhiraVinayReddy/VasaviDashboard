import React from "react";
import Studentform from "./Studentform";
import Mainnav from "../MainDashboard/Mainnav";
import Cards from "../MainDashboard/Cards";
import Asidenav from "../MainDashboard/Asidenav";
import Navbar from "../MainDashboard/Navbar";
const Student = () => {
  return (
    <div className="md:flex h-screen ">
      <Asidenav />
      <div className="md:w-full md:px-10 ">
        <div className="ml-0 md:ml-[200px]">
          <Navbar />
          <Cards />
        </div>
        <div className=" md:ml-60">
          <Studentform />
        </div>
      </div>
    </div>
  );
};

export default Student;

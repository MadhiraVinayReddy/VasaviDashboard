import React from "react";
import Mainnav from "../MainDashboard/Mainnav";
import BusComponent from "./BusComponent";
import Asidenav from "../MainDashboard/Asidenav";
import Cards from "../MainDashboard/Cards";
import Navbar from "../MainDashboard/Navbar";
const Busdashboard = () => {
  return (
    <div className="md:flex h-screen ">
      <Asidenav />
      <div className="md:w-full md:px-10 ">
        <div className="ml-0 md:ml-[200px]">
          <Navbar />
          <Cards />
        </div>
        <div className=" md:ml-60">
          <BusComponent />
        </div>
      </div>
    </div>
    // <div>
    //   {/* NAVBAR */}
    //   <Mainnav />
    //   {/* TABLE OF BUS */}
    //   <BusComponent />
    // </div>
  );
};

export default Busdashboard;

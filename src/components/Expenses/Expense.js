import React from "react";
import Expenseform from "./Expenseform";
import Mainnav from "../MainDashboard/Mainnav";
import Navbar from "../MainDashboard/Navbar";
import Cards from "../MainDashboard/Cards";
import Asidenav from "../MainDashboard/Asidenav";
const Expense = () => {
  return (
    <div className="md:flex h-screen ">
      <Asidenav />
      <div className="md:w-full md:px-10 ">
        <div className="ml-0 md:ml-[200px]">
          <Navbar />
          <Cards />
        </div>
        <div className=" md:ml-60">
          <Expenseform />
        </div>
      </div>
    </div>
  );
};

export default Expense;

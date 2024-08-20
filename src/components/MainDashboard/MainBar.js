import React, { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../firebase-config";
import styled, { keyframes } from "styled-components";

const MainBar = () => {
  const [expLoading, setExpLoading] = useState(true);
  const [busLoading, setBusLoading] = useState(true);
  const [driverLoading, setDriverLoading] = useState(true);
  const [studentLoading, setStudentLoading] = useState(true);
  const [buscount, setBusCount] = useState("");

  const [drivercount, setDrivercount] = useState("");
  const [studentcount, setStudentcount] = useState("");
  const [expensecount, setExpensecount] = useState("");
  const busCollection = collection(db, "Buses");
  const driverCollection = collection(db, "Drivers");
  const studentCollection = collection(db, "Students");
  const expenseCollection = collection(db, "Expenses");

  const getExpensecount = async () => {
    // setLoading(true);
    const expensecount = await getCountFromServer(expenseCollection);
    setExpensecount(expensecount.data().count);
    setExpLoading(false);
  };
  const getStudentcount = async () => {
    const studentscount = await getCountFromServer(studentCollection);
    setStudentcount(studentscount.data().count);
    setStudentLoading(false);
  };
  const getDrivercount = async () => {
    const driverscount = await getCountFromServer(driverCollection);
    setDrivercount(driverscount.data().count);
    setDriverLoading(false);
  };
  const getBuscount = async () => {
    const busescounts = await getCountFromServer(busCollection);
    setBusCount(busescounts.data().count);
    setBusLoading(false);
  };
  const CustomLoader = () => (
    <div>
      <Spinner />
    </div>
  );
  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
 }

  to {
    transform: rotate(360deg);  }
`;
  //SPINNER
  const Spinner = styled.div`
    // margin: 16px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 4px solid #ebedef;
    border-right: 4px solid #ebedef;
    border-bottom: 4px solid #ebedef;
    border-left: 4px solid blue;
    background: transparent;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `;

  // text-[#fe9365]
  // text-[#0ac282]
  // text-[#eb3422]
  // bg-[#0AC282]
  useEffect(() => {
    getBuscount();
    getDrivercount();
    getStudentcount();
    getExpensecount();
  }, []);
  return (
    <div>
      <div>
        <div className="flex flex-col px-5 md:px-0 md:items-start justify-between md:flex-row md:justify-around md:w-[80%] md:float-right container h-[600px] md:h-0 font-abc mt-24">
          <div className="md:w-64  shadow-sm shadow-gray-600">
            <div className="flex items-center justify-between  px-4 py-4">
              <div>
                <h3 className="text-3xl text-violet-500 font-medium">
                  {busLoading ? <CustomLoader /> : ""}
                  {buscount}
                </h3>
                <h6 className="text-gray-400">Buses</h6>
              </div>
              <i className="fa-solid fa-signal text-[#4f5d73]"></i>
            </div>
            <div className="flex bg-violet-500 justify-between px-4 py-3 items-center">
              <h3 className="text-gray-100 font-medium">Total Buses</h3>
              <i className="fa-solid fa-arrow-trend-up text-white"></i>
            </div>
          </div>
          <div className="md:w-64 shadow-sm shadow-gray-600">
            <div className="flex items-center justify-between  px-4 py-4">
              <div>
                <h3 className="text-3xl text-violet-500 font-medium">
                  {expLoading ? <CustomLoader /> : ""}
                  {expensecount}
                </h3>
                <h6 className="text-gray-400">Expenses</h6>
              </div>
              <i className="fa-solid fa-sheet-plastic text-gray-500"></i>
            </div>
            <div className="flex  justify-between px-4 py-3 items-center bg-violet-500">
              <h3 className="text-gray-100 font-medium">Number of expenses</h3>
              <i className="fa-solid fa-arrow-trend-up text-white"></i>
            </div>
          </div>
          <div className="md:w-64 shadow-sm shadow-gray-600">
            <div className="flex items-center justify-between  px-4 py-4">
              <div>
                <h3 className="text-3xl text-violet-500 font-medium">
                  {studentLoading ? <CustomLoader /> : ""}
                  {studentcount}
                </h3>
                <h6 className="text-gray-400">Students</h6>
              </div>
              <i className="fa-solid fa-calendar-days text-gray-500"></i>
            </div>
            <div className="flex bg-violet-500 justify-between px-4 py-3 items-center">
              <h3 className="text-gray-100 font-medium">Total Students</h3>
              <i className="fa-solid fa-arrow-trend-up text-white"></i>
            </div>
          </div>
          <div className="md:w-64 shadow-sm shadow-gray-600">
            <div className="flex items-center justify-between  px-4 py-4">
              <div>
                <h3 className="text-3xl text-violet-500 font-medium">
                  {driverLoading ? <CustomLoader /> : ""}
                  {drivercount}
                </h3>
                <h6 className="text-gray-400">Drivers</h6>
              </div>
              <i className="fa-solid fa-download text-gray-500"></i>
            </div>
            <div className="flex bg-violet-500 justify-between px-4 py-3 items-center">
              <h3 className="text-gray-100 font-medium">Total Drivers</h3>
              <i className="fa-solid fa-arrow-trend-up text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;

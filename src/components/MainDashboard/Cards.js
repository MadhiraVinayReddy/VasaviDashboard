import React, { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../firebase-config";
import styled, { keyframes } from "styled-components";

const Cards = () => {
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
    <div className="mt-32 font-poppins  px-5 md:px-0 z-0 container mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  md:grid-cols-1 md:gap-auto xl:grid-cols-4 2xl:gap-auto">
        <div className="flex max-h-[143px] bg-violet-600 max-w-[300px] sm:max-w-none  items-stretch text-white pl-5 pt-6 pb-5 rounded-[4.73079px] relative overflow-hidden">
          <div className=" space-y-5">
            <p className="text-xl">Total Buses</p>
            <p className="text-4xl font-semibold">
              {busLoading ? <CustomLoader /> : ""}
              {buscount}
            </p>
          </div>
          <div className="bg-violet-400 pl-16 pb-16 rounded-full absolute bottom-0 right-0 translate-x-4 translate-y-4"></div>
        </div>
        <div className="max-w-[300px] bg-violet-600 max-h-[143px] sm:max-w-none  flex items-stretch text-white  pl-5 pt-6 pb-5 rounded-[4.73079px] relative overflow-hidden">
          <div className="space-y-5">
            <p className="text-xl ">Total Expenses</p>
            <p className="text-4xl font-semibold">
              {expLoading ? <CustomLoader /> : ""}
              {expensecount}
            </p>
          </div>
          <div className="bg-violet-400 pl-16 pb-16 rounded-full absolute bottom-0 right-0 translate-x-4 translate-y-4"></div>
        </div>
        <div className="max-w-[300px] bg-violet-600 max-h-[143px] sm:max-w-none  flex items-stretch text-white  pl-5 pt-6 pb-5 rounded-[4.73079px] relative overflow-hidden">
          <div className="space-y-5">
            <p className="text-xl">Total Students</p>
            <p className="text-4xl font-semibold">
              {studentLoading ? <CustomLoader /> : ""}
              {studentcount}
            </p>
          </div>
          <div className="bg-violet-400 pl-16 pb-16 rounded-full absolute bottom-0 right-0 translate-x-4 translate-y-4"></div>
        </div>
        <div className="max-w-[300px] bg-violet-600 max-h-[143px] sm:max-w-none  flex items-stretch text-white  pl-5 pt-6 pb-5 rounded-[4.73079px] relative overflow-hidden">
          <div className="space-y-5">
            <p className="text-xl">Total Drivers</p>
            <p className="text-4xl font-semibold">
              {driverLoading ? <CustomLoader /> : ""}
              {drivercount}
            </p>
          </div>
          <div className="bg-violet-400 pl-16 pb-16 rounded-full absolute bottom-0 right-0 translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

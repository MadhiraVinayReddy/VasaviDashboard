import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import Mainnav from "../MainDashboard/Mainnav";
const Studentform = () => {
  const { id } = useParams();
  const [student, setStudent] = useState("");
  //SELECTING DOC BASED ON ID
  const StudentCollection = doc(db, "Students", id);
  const updateStudent = async () => {
    const Studentdoc = doc(db, "Students", id);
    await updateDoc(Studentdoc, {
      name: student.name,
      rollNo: student.rollNo,
      eduType: student.eduType,
      batch: student.batch,
      availingBus: student.availingBus,
      route: student.route,
      amount: student.amount,
      mobile: student.mobile,
      paid: student.paid,
    });
  };
  //GETTING DATA OF SELECTED DOC
  useEffect(() => {
    const Studentdata = async () => {
      const data = await getDoc(StudentCollection);
      setStudent(data.data());
    };
    Studentdata();
  }, []);
  return (
    <>
      <Mainnav />
      <div className="md:w-[80%] md:px-4 md:float-right font-abc mt-28">
        {/*=== EXPENSE FORM START HERE ===*/}
        <main className="container mx-auto mt-5">
          <h1 className="font-medium text-4xl text-center">
            Student Information
          </h1>
          <form className="mt-8 flex flex-col space-y-6 container px-4">
            {/* COMBINING TWO INPUT IN FLEX */}
            <div className="flex-col flex md:flex-row justify-around items-center">
              {/*=== NAME ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Name:</label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, name: e.target.value });
                  }}
                  value={student.name}
                  placeholder="Name"
                />
              </div>
              {/*=== ROLL NUMBER ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Roll Number:</label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, rollNo: e.target.value });
                  }}
                  value={student.rollNo}
                  placeholder="Roll Number"
                />
              </div>
            </div>
            {/* COMBINING TWO INPUT IN FLEX */}
            <div className="flex flex-col md:flex-row justify-around items-center">
              {/*=== EDUCATION TYPE ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Education Type:</label>
                <select
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, eduType: e.target.value });
                  }}
                  value={student.eduType}
                >
                  <option className="bg-orange-500 text-white">Select</option>
                  <option className="bg-orange-500 text-white">Primary</option>
                  <option className="bg-orange-500 text-white">
                    Secondary
                  </option>
                </select>
              </div>
              {/*=== BATCH ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Batch:</label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, batch: e.target.value });
                  }}
                  value={student.batch}
                  placeholder="Batch"
                />
              </div>
            </div>
            {/* COMBINING TWO INPUT IN FLEX */}
            <div className="flex flex-col md:flex-row justify-around items-center">
              {/*=== AVAILING BUS ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Availing Bus:</label>
                <select
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, availingBus: e.target.value });
                  }}
                  value={student.availingBus}
                >
                  <option className="bg-orange-500 text-white">Select</option>
                  <option className="bg-orange-500 text-white">Yes</option>
                  <option className="bg-orange-500 text-white">No</option>
                </select>
              </div>
              {/*=== ROUTE ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Route:</label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, route: e.target.value });
                  }}
                  value={student.route}
                  placeholder="Route"
                />
              </div>
            </div>
            {/* COMBINING TWO INPUT IN FLEX */}
            <div className="flex flex-col md:flex-row justify-around items-center">
              {/*=== AMOUNT ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Amount:</label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, amount: e.target.value });
                  }}
                  value={student.amount}
                  placeholder="Amount"
                />
              </div>
              {/*=== MOBILE NUMBER ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Mobile Number:</label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, mobile: e.target.value });
                  }}
                  value={student.mobile}
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            {/* COMBINING TWO INPUT IN FLEX */}
            <div className="flex flex-col md:flex-row justify-around items-center">
              {/*=== FEE ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium">Fee Paid:</label>
                <select
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                  onChange={(e) => {
                    setStudent({ ...student, paid: e.target.value });
                  }}
                  value={student.paid}
                >
                  <option className="bg-orange-500 text-white">Select</option>
                  <option className="bg-orange-500 text-white">Yes</option>
                  <option className="bg-orange-500 text-white">No</option>
                </select>
              </div>
            </div>
          </form>
          {/*=== BACK AND SUBMIT BUTTONS ===*/}
          <div className=" md:text-right space-x-5 md:mt-20 md:mr-32 mt-10 text-center">
            {/*=== BACK BUTTON ===*/}
            <Link
              to="/students"
              className="bg-gray-200 px-10 text-gray-600 rounded-md py-4"
            >
              Back
            </Link>
            {/*=== SUBMIT BUTTON ===*/}
            <Link
              to="/students"
              className="bg-violet-600 text-gray-100 px-10 py-4 rounded-md"
              onClick={updateStudent}
            >
              update
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Studentform;

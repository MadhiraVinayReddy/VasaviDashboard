import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Studentform = () => {
  //STORING DATA IN VARIABLES
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [eduType, setEduType] = useState("");
  const [batch, setBatch] = useState("");
  const [availingBus, setAvailingBus] = useState("");
  const [route, setRoute] = useState("");
  const [amount, setAmount] = useState("");
  const [mobile, setMobile] = useState("");
  const [paid, setPaid] = useState("");

  const studentCollection = collection(db, "Students");

  // CREATING A NEW DRIVER
  const createStudent = async () => {
    await addDoc(studentCollection, {
      name,
      rollNo,
      eduType,
      batch,
      availingBus,
      route,
      amount,
      mobile,
      paid,
    });
  };
  return (
    <div className="md:w-[100%] md:px-4 md:float-right mt-28">
      {/*=== EXPENSE FORM START HERE ===*/}
      <main className="container mx-auto mt-5 font-abc">
        <h1 className="font-medium text-4xl text-center text-[#4f5d73]">
          Student Information
        </h1>
        <form className="mt-8 flex flex-col space-y-6 container px-4">
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex-col flex md:flex-row justify-around items-center">
            {/*=== NAME ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Name:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              />
            </div>
            {/*=== ROLL NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Roll Number:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setRollNo(e.target.value);
                }}
                placeholder="Roll Number"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== EDUCATION TYPE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                Education Type:
              </label>
              <select
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setEduType(e.target.value);
                }}
              >
                <option className="bg-violet-500 text-white">Select</option>
                <option className="bg-violet-500 text-white">Primary</option>
                <option className="bg-violet-500 text-white">Secondary</option>
              </select>
            </div>
            {/*=== BATCH ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Batch:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setBatch(e.target.value);
                }}
                placeholder="Batch"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== AVAILING BUS ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                Availing Bus:
              </label>
              <select
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setAvailingBus(e.target.value);
                }}
              >
                <option className="bg-violet-500 text-white">Select</option>
                <option className="bg-violet-500 text-white">Yes</option>
                <option className="bg-violet-500 text-white">No</option>
              </select>
            </div>
            {/*=== ROUTE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Route:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setRoute(e.target.value);
                }}
                placeholder="Route"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== AMOUNT ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Amount:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                placeholder="Amount"
              />
            </div>
            {/*=== MOBILE NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                Mobile Number:
              </label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                placeholder="Mobile Number"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== FEE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Fee Paid:</label>
              <select
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setPaid(e.target.value);
                }}
              >
                <option className="bg-violet-500 text-white">Select</option>
                <option className="bg-violet-500 text-white">Yes</option>
                <option className="bg-violet-500 text-white">No</option>
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
            onClick={createStudent}
          >
            Submit
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Studentform;

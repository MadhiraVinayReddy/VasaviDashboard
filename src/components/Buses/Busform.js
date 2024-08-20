import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Busform = () => {
  //STORING DATA IN VARIABLES
  const [busNo, setBusNO] = useState("");
  const [RegistrationNo, setRegistrationNo] = useState("");
  const [route, setRoute] = useState("");
  const [busCondition, setBusCondition] = useState("");
  // CONNECTING TO BUS COLLECTION
  const busCollection = collection(db, "Buses");

  // CREATING A NEW DRIVER
  const createBus = async () => {
    await addDoc(busCollection, {
      busNo,
      RegistrationNo,
      route,
      busCondition,
    });
  };
  return (
    <div className="md:w-[100%] md:px-4 md:float-right mt-28">
      {/*=== BUS FORM START HERE ===*/}
      <main className="container mx-auto mt-5">
        <h1 className="font-medium text-4xl text-center M font-abc text-[#4f5d73]">
          Bus Information
        </h1>
        <form className="mt-8 flex flex-col md:space-y-6 container px-4 font-abc">
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex-col flex md:flex-row justify-around items-center">
            {/*=== BUS NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Bus Number:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setBusNO(e.target.value);
                }}
                placeholder="Bus Number"
              />
            </div>
            {/*=== REGISTRATION NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                Registration Number:
              </label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setRegistrationNo(e.target.value);
                }}
                placeholder="Registration Number"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row md:justify-around items-center">
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
            {/*=== BUS CONDITION ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                Bus Condition:
              </label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setBusCondition(e.target.value);
                }}
                placeholder="Bus Condition"
              />
            </div>
          </div>
        </form>
        {/*=== BACK AND SUBMIT BUTTONS ===*/}
        <div className=" md:text-right space-x-5 md:mt-20 md:mr-32 mt-10 text-center">
          {/*=== BACK BUTTON ===*/}
          <Link
            to="/buses"
            className="bg-gray-200 px-10 text-gray-600 rounded-md py-4"
          >
            Back
          </Link>
          {/*=== SUBMIT BUTTON ===*/}
          <Link
            to="/buses"
            className="bg-violet-600 text-gray-100 px-10 py-4 rounded-md"
            onClick={createBus}
          >
            Submit
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Busform;

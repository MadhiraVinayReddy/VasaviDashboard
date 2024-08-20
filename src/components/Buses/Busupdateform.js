import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import Mainnav from "../MainDashboard/Mainnav";
const Busform = () => {
  //STORING DATA IN VARIABLES
  const [bus, setBus] = useState([]);
  //GETTING SELECTED DOC ID
  const { id } = useParams();
  //SELECTING DOC BASED ON ID
  const busCollection = doc(db, "Buses", id);
  //UPDATE FUNCTION
  const update = async () => {
    const Busdoc = doc(db, "Buses", id);
    await updateDoc(Busdoc, {
      busNo: bus.busNo,
      RegistrationNo: bus.RegistrationNo,
      route: bus.route,
      busCondition: bus.busCondition,
    }).then(console.log("updated"));
  };
  //GETTING DATA OF SELECTED DOC
  useEffect(() => {
    const Busdata = async () => {
      const data = await getDoc(busCollection);
      setBus(data.data());
    };
    Busdata();
  }, []);
  //RENDERING
  return (
    <>
      <Mainnav />
      <div className="md:w-[80%] md:px-4 md:float-right font-abc mt-28">
        {/*=== BUS FORM START HERE ===*/}
        <main className="container mx-auto mt-5">
          <h1 className="font-medium text-4xl text-center text-[#4f5d73]">
            Update Bus Information
          </h1>
          <form className="mt-8 flex flex-col md:space-y-6 container px-4">
            {/* COMBINING TWO INPUT IN FLEX */}
            <div className="flex-col flex md:flex-row justify-around items-center">
              {/*=== BUS NUMBER ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium text-[#4f5d73]">
                  Bus Number:
                </label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                  onChange={(e) => {
                    setBus({ ...bus, busNo: e.target.value });
                  }}
                  value={bus.busNo}
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
                    setBus({ ...bus, RegistrationNo: e.target.value });
                  }}
                  value={bus.RegistrationNo}
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
                    setBus({ ...bus, route: e.target.value });
                  }}
                  value={bus.route}
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
                    setBus({ ...bus, busCondition: e.target.value });
                  }}
                  value={bus.busCondition}
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
              onClick={update}
            >
              Update
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Busform;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Infoform = () => {
  //STORING DATA IN VARIABLES
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  // CONNECTING TO DRIVERS COLLECTION
  const driverCollection = collection(db, "Drivers");

  // CREATING A NEW DRIVER
  const createDriver = async () => {
    await addDoc(driverCollection, {
      fullName: name,
      gender: gender,
      age: age,
      phone,
      address,
      licenseNo,
    });
  };
  return (
    <div className="md:w-[100%] md:px-4 md:float-right mt-28">
      {/*=== DRIVER FORM START HERE ===*/}
      <main className="container mx-auto mt-5">
        <h1 className="font-medium text-4xl text-center text-[#4f5d73]">
          Basic Information
        </h1>
        <form className="mt-8 flex flex-col md:space-y-6 container px-4">
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex-col flex md:flex-row justify-around items-center">
            {/*=== FULL NAME ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Full Name:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Full Name"
              />
            </div>
            {/*=== GENDER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Gender:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                placeholder="Gender"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== AGE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Age:</label>
              <input
                type="number"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Age"
              />
            </div>
            {/*=== PHONE NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Phone:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Phone"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== ADDRESS ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Address:</label>
              <input
                type="textarea"
                className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Address"
              />
            </div>
            {/*=== LICENSE NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                License Number:
              </label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setLicenseNo(e.target.value);
                }}
                placeholder="License Number"
              />
            </div>
          </div>
        </form>
        {/*=== BACK AND SUBMIT BUTTONS ===*/}
        <div className=" md:text-right space-x-5 md:mt-20 md:mr-32 mt-10 text-center">
          {/*=== BACK BUTTON ===*/}
          <Link
            to="/driver"
            className="bg-gray-200 px-10 text-gray-600 rounded-md py-4"
          >
            Back
          </Link>
          {/*=== SUBMIT BUTTON ===*/}
          <Link
            to="/driver"
            className="bg-violet-600 text-gray-100 px-10 py-4 rounded-md"
            onClick={createDriver}
          >
            Submit
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Infoform;

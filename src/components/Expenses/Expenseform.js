import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";

const Expenseform = () => {
  // STORING DATA
  const [busNo, setBusNo] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [repairType, setRepairType] = useState("");
  const [driver, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [fileURL, setFileURL] = useState("");
  const expenseCollection = collection(db, "Expenses");
  // UPLOAD FILE FUNCTRION
  const fileUpload = () => {
    if (uploadFile == null) return;
    const fileRef = ref(storage, `${uploadFile.name}`);
    setFileURL(`${uploadFile.name}`);
    uploadBytes(fileRef, uploadFile)
      .then(() => {
        alert("File uploaded");
      })
      .catch((err) => console.log(err));
  };

  // CREATING A NEW DRIVER
  const createExpense = async () => {
    await addDoc(expenseCollection, {
      BusNumber: busNo,
      ExpenseType: expenseType,
      RepairType: repairType,
      Driver: driver,
      Date: date,
      Amount: amount,
      fileURL,
    });
  };
  return (
    <div className="md:w-[100%] md:px-4 md:float-right font-abc mt-28">
      {/*=== EXPENSE FORM START HERE ===*/}
      <main className="container mx-auto mt-5">
        <h1 className="font-medium text-4xl text-center text-[#4f5d73]">
          Expenses Information
        </h1>
        <form className="mt-8 flex flex-col md:space-y-6 container px-4">
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex-col flex md:flex-row justify-around items-center">
            {/*=== BUS NUMBER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Bus Number:</label>
              <input
                type="text"
                required
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setBusNo(e.target.value);
                }}
                placeholder="Bus Number"
              />
            </div>
            {/*=== EXPENSE TYPE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">
                Expense Type:
              </label>
              <select
                className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12"
                onChange={(e) => {
                  setExpenseType(e.target.value);
                }}
              >
                <option className="bg-violet-500 text-white">Select</option>
                <option className="bg-violet-500 text-white">Fuel</option>
                <option className="bg-violet-500 text-white">Repair</option>
              </select>
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== REPAIR TYPE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Repair Type:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setRepairType(e.target.value);
                }}
                placeholder="Repair Type"
              />
            </div>
            {/*=== DRIVER ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Driver:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setDriver(e.target.value);
                }}
                placeholder="Driver"
              />
            </div>
          </div>
          {/* COMBINING TWO INPUT IN FLEX */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== DATE ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Date:</label>
              <input
                type="date"
                className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                placeholder="Date"
              />
            </div>
            {/*=== AMOUNT ===*/}
            <div className="flex flex-col justify-center items-start">
              <label className="font-medium text-[#4f5d73]">Amount:</label>
              <input
                type="text"
                className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] h-12 outline-blue-500"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                placeholder="Amount"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/*=== FILE ===*/}
            <div className="flex flex-col justify-center items-center">
              <label className="font-medium text-[#4f5d73]">Upload Bill:</label>
              <input
                type="file"
                className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] py-3 outline-blue-500"
                onChange={(e) => {
                  setUploadFile(e.target.files[0]);
                }}
                placeholder="Date"
              />
            </div>
          </div>
        </form>
        {/*=== BACK AND SUBMIT BUTTONS ===*/}
        <div className=" md:text-right space-x-5 md:mt-20 md:mr-32 mt-10 text-center">
          {/*=== BACK BUTTON ===*/}
          <button
            onClick={fileUpload}
            className="bg-gray-200 px-5 py-2 rounded text-gray-600"
          >
            upload
          </button>
          <Link
            to="/expense"
            className="bg-gray-200 px-10 text-gray-600 rounded-md py-4"
          >
            Back
          </Link>
          {/*=== SUBMIT BUTTON ===*/}
          <Link
            to="/expense"
            className="bg-violet-600 text-gray-100 px-10 py-4 rounded-md"
            onClick={createExpense}
          >
            Submit
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Expenseform;

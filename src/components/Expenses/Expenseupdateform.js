import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { updateDoc, doc, getDoc, collection } from "firebase/firestore";
import Mainnav from "../MainDashboard/Mainnav";

const Expenseform = () => {
  //STORING DATA IN VARIABLES
  const { id } = useParams();
  const [Expense, setExpense] = useState("");
  //SELECTING DOC BASED ON ID
  const expenseCollection = doc(db, "Expenses", id);
  const updateExpense = async () => {
    const Expensedoc = doc(db, "Expenses", id);
    await updateDoc(Expensedoc, {
      BusNumber: Expense.BusNumber,
      ExpenseType: Expense.ExpenseType,
      RepairType: Expense.RepairType,
      Driver: Expense.Driver,
      Date: Expense.Date,
      Amount: Expense.Amount,
    });
  };
  //GETTING DATA OF SELECTED DOC
  useEffect(() => {
    const Expensedata = async () => {
      const data = await getDoc(expenseCollection);
      setExpense(data.data());
    };
    Expensedata();
  }, []);
  return (
    <>
      <Mainnav />
      <div className="md:w-[80%] md:px-4 md:float-right font-abc mt-28">
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
                <label className="font-medium text-[#4f5d73]">
                  Bus Number:
                </label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                  onChange={(e) => {
                    setExpense({ ...Expense, BusNumber: e.target.value });
                  }}
                  value={Expense.BusNumber}
                  placeholder="Bus Number"
                />
              </div>
              {/*=== EXPENSE TYPE ===*/}
              <div className="flex flex-col justify-center items-start">
                <label className="font-medium text-[#4f5d73]">
                  Expense Type:
                </label>
                <select
                  className="border-gray-300 border-2 rounded-md px-4  md:w-[400px] w-[375px] h-12 outline-blue-500"
                  onChange={(e) => {
                    setExpense({ ...Expense, ExpenseType: e.target.value });
                  }}
                  value={Expense.ExpenseType}
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
                <label className="font-medium text-[#4f5d73]">
                  Repair Type:
                </label>
                <input
                  type="text"
                  className="border-gray-300 border-2 rounded-md px-4 md:w-[400px] w-[375px] h-12 outline-blue-500"
                  onChange={(e) => {
                    setExpense({ ...Expense, RepairType: e.target.value });
                  }}
                  value={Expense.RepairType}
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
                    setExpense({ ...Expense, Driver: e.target.value });
                  }}
                  value={Expense.Driver}
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
                    setExpense({ ...Expense, Date: e.target.value });
                  }}
                  value={Expense.Date}
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
                    setExpense({ ...Expense, Amount: e.target.value });
                  }}
                  value={Expense.Amount}
                  placeholder="Amount"
                />
              </div>
            </div>
          </form>
          {/*=== BACK AND SUBMIT BUTTONS ===*/}
          <div className=" md:text-right space-x-5 md:mt-20 md:mr-32 mt-10 text-center">
            {/*=== BACK BUTTON ===*/}
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
              onClick={updateExpense}
            >
              Update
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Expenseform;

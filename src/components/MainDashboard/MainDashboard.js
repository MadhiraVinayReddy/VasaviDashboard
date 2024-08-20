import React, { useEffect, useState } from "react";
import Mainnav from "./Mainnav";
import MainBar from "./MainBar";
import BarChart from "./BarChart";
import { Bar } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Asidenav from "./Asidenav";
import Cards from "./Cards";
import Navbar from "./Navbar";
const MainDashboard = () => {
  const expenseCollection = collection(db, "Expenses");
  const [expenseMonth, setExpenseMonth] = useState([]);
  const getExpenses = async () => {
    const data = await getDocs(expenseCollection);
    const expenseData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(expenseData);
    //Total Expenses
    var amount = [];
    var sum = 0;
    expenseData.forEach((datas) => {
      sum += Number(datas.Amount);
    });
    amount.push(sum);
    //Expenses by monthly
    var monthlysumarr = [];
    var Jansum = 0;
    var Febsum = 0;
    var Marchsum = 0;
    var Aprilsum = 0;
    var Maysum = 0;
    var Junesum = 0;
    var Julysum = 0;
    var Augsum = 0;
    var Sepsum = 0;
    var Octsum = 0;
    var Novsum = 0;
    var Decsum = 0;

    expenseData.forEach((data) => {
      var date = data.Date.split("-");
      if (date[1] === "01") {
        Jansum += Number(data.Amount);
      } else if (date[1] === "02") {
        Febsum += Number(data.Amount);
      } else if (date[1] === "03") {
        Marchsum += Number(data.Amount);
      } else if (date[1] === "04") {
        Aprilsum += Number(data.Amount);
      } else if (date[1] === "05") {
        Maysum += Number(data.Amount);
      } else if (date[1] === "06") {
        Junesum += Number(data.Amount);
      } else if (date[1] === "07") {
        Julysum += Number(data.Amount);
      } else if (date[1] === "08") {
        Augsum += Number(data.Amount);
      } else if (date[1] === "09") {
        Sepsum += Number(data.Amount);
      } else if (date[1] === "10") {
        Octsum += Number(data.Amount);
      } else if (date[1] === "11") {
        Novsum += Number(data.Amount);
      } else if (date[1] === "12") {
        Decsum += Number(data.Amount);
      }
    });
    var obj1 = {
      month: "January",
      sum: Jansum,
    };
    var obj2 = {
      month: "February",
      sum: Febsum,
    };
    var obj3 = {
      month: "March",
      sum: Marchsum,
    };
    var obj4 = {
      month: "April",
      sum: Aprilsum,
    };
    var obj5 = {
      month: "May",
      sum: Maysum,
    };
    var obj6 = {
      month: "June",
      sum: Junesum,
    };
    var obj7 = {
      month: "July",
      sum: Julysum,
    };
    var obj8 = {
      month: "August",
      sum: Augsum,
    };
    var obj9 = {
      month: "September",
      sum: Sepsum,
    };
    var obj10 = {
      month: "October",
      sum: Octsum,
    };
    var obj11 = {
      month: "November",
      sum: Novsum,
    };
    var obj12 = {
      month: "December",
      sum: Decsum,
    };

    monthlysumarr.push(obj1);
    monthlysumarr.push(obj2);
    monthlysumarr.push(obj3);
    monthlysumarr.push(obj4);
    monthlysumarr.push(obj5);
    monthlysumarr.push(obj6);
    monthlysumarr.push(obj7);
    monthlysumarr.push(obj8);
    monthlysumarr.push(obj9);
    monthlysumarr.push(obj10);
    monthlysumarr.push(obj11);
    monthlysumarr.push(obj12);
    setExpenseMonth(monthlysumarr);
    //SETTING DATA
    setExpenseData({
      labels: monthlysumarr.map((data) => data.month),
      datasets: [
        {
          label: "Monthly Expenses",
          // data: expenseData.map((data) => data.Amount),
          data: monthlysumarr.map((data) => data.sum),
          borderColor: ["black"],
          backgroundColor: ["#1e90ff"],
        },
      ],
    });
    setTotalData({
      labels: ["Total Expenses"],
      datasets: [
        {
          label: "Total Expenses",
          // data: expenseData.map((data) => data.Amount),
          data: amount,
          borderColor: ["black"],
          backgroundColor: ["#1e90ff"],
        },
      ],
    });
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const [expenseData, setExpenseData] = useState({ labels: [], datasets: [] });
  const [totalData, setTotalData] = useState({ labels: [], datasets: [] });
  return (
    <div className="md:flex h-screen ">
      <Asidenav />
      <div className="md:w-full md:px-10 ">
        <div className="ml-0 md:ml-[200px]">
          <Navbar />
          <Cards />
        </div>
        <div className=" md:ml-60">
          <BarChart Chartdata={expenseData} />
          <BarChart Chartdata={totalData} />
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
    // <div>
    //   <Asidenav />
    //   <MainBar />
    //   <div className="md:w-[850px] md:mt-64 px-5 mx-auto container bg-gray-100 rounded-lg">
    //     <BarChart Chartdata={expenseData} />
    //     <BarChart Chartdata={totalData} />
    //   </div>
    // </div>
  );
};

export default MainDashboard;

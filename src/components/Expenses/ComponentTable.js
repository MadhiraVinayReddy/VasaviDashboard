import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import * as XLSX from "xlsx";
import styled, { keyframes } from "styled-components";

const ComponentTable = () => {
  // SETTING EXPENSES
  const [expenses, setExpenses] = useState([]);
  // SEARCH DATA
  const [search, setSearch] = useState(expenses);
  // IF THERE IS DATA IN SEARCH IT WILL SET TO TRUE
  const [data, setData] = useState(false);
  // SETTING EXPENSES EXCELDATA
  const [excelData, setExcelData] = useState([]);
  // SETTING USERINFO
  const [userInfo, setUserInfo] = useState();
  // LOADER
  const [pending, setPending] = useState(true);
  // SELECTED ROWS
  const [selectedRows, setSelectedRows] = React.useState([]);
  // HANDLING SELECTED ROWS
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  // TO NAVIGATE
  const Navigate = useNavigate();
  // DELETE FUNCTION
  const deleteExpense = async (id) => {
    const Expensedoc = doc(db, "Expenses", id);
    await deleteDoc(Expensedoc);
    window.location.reload();
  };
  const CustomLoader = () => (
    <div style={{ padding: "24px" }}>
      <Spinner />
    </div>
  );
  // KEYFRAMES
  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
 }

  to {
    transform: rotate(360deg);  }
`;
  // SPINNER
  const Spinner = styled.div`
    margin: 16px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 4px solid #ebedef;
    border-right: 4px solid #ebedef;
    border-bottom: 4px solid #ebedef;
    border-left: 4px solid blue;
    background: transparent;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `;
  // COLUMNS TO ADD IN DATATABLE COMPONENT
  const columns = [
    {
      name: "No",
      selector: (row) => row.index + 1,
      sortable: true,
    },
    {
      name: "BusNo",
      selector: (row) => row.BusNumber,
      sortable: true,
    },
    {
      name: "Expense Type",
      selector: (row) => row.ExpenseType,
      sortable: true,
    },
    {
      name: "Repair Type",
      selector: (row) => row.RepairType,
      sortable: true,
    },
    {
      name: "Driver",
      selector: (row) => row.Driver,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
    },
    {
      name: "Bills",
      cell: (row) => (
        <button
          onClick={() => upload(row.fileURL)}
          className="bg-white text-violet-600 border-violet-600 hover:bg-violet-600 rounded hover:text-white border-2 px-4 py-2"
        >
          view
        </button>
      ),
    },
  ];
  const upload = (url) => {
    Navigate("/file/" + url);
  };
  // CONNECTS TO EXPENSE COLLECTION IN FIREBASE
  const expenseCollection = collection(db, "Expenses");
  // NAVIGATES TO EXPENSE UPDATE FORM
  const updateExpense = (id) => {
    Navigate("/updateExpense/" + id);
  };
  // FUNCTION TO CHANGE JSON DATA TO EXCEL
  const downloadExcel = (data) => {
    if (selectedRows.length === 0) {
      alert("Kindly choose the items you wish to download.");
    } else {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
      XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
      XLSX.writeFile(workbook, "Expenses.xlsx");
    }
  };
  // FUNCTION TO GET EXPENSES FORM DATABASE
  const getExpenses = async () => {
    const data = await getDocs(expenseCollection);
    setExpenses(
      data.docs.map((doc, index) => ({ ...doc.data(), id: doc.id, index }))
    );
    // if (rowSelected === true) {
    //   setExcelData(selectedRows.map((doc) => ({ ...doc, doc })));
    // } else {
    //   setExcelData(data.docs.map((doc) => ({ ...doc.data() })));
    // }
    setExcelData(selectedRows.map((doc) => ({ ...doc, doc })));
    // setExcelData(data.docs.map((doc) => ({ ...doc.data() })));
    // setSearch(expenses);
    setPending(false);
  };
  // SIDE EFFECTS
  useEffect(() => {
    getExpenses();
    onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
  }, [selectedRows]);
  // FILTER FUNCTION
  const Filter = (e) => {
    const newData = expenses.filter((row) => {
      return row.BusNumber.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch(newData);
    setData(true);
  };

  //ADMIN ACTIONS
  if (userInfo?.email === "admin@gmail.com") {
    columns.push({
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="px-2 "
            onClick={() => {
              updateExpense(row.id);
            }}
          >
            <i className="fa-solid fa-pencil text-[#4f5d73] hover:text-violet-600"></i>
          </button>
          <button
            className="px-2 "
            onClick={() => {
              deleteExpense(row.id);
            }}
          >
            <i className="fa-solid fa-trash text-[#4f5d73] hover:text-violet-600"></i>
          </button>
        </>
      ),
    });
  }

  return (
    <>
      <main>
        <div className="flex justify-between container mx-auto mt-28 px-4 float-right font-abc ">
          {/*=== EXPENSES HEADING ===*/}
          <h1 className="md:text-4xl text-xl font-semibold text-[#4f5d73]">
            Expenses
          </h1>
          {/*=== NAVIGATES TO EXPENSES BASIC INFORMATION PAGE ===*/}
          <Link
            to="/expense/create-expense"
            className={
              "bg-white text-violet-600 border-violet-600 hover:bg-violet-600 hover:text-white border-2 px-4 py-2 rounded-md " +
              (userInfo?.email === "admin@gmail.com" ? "" : "hidden")
            }
          >
            Create Expense <i className="fa-regular fa-plus"></i>
          </Link>
        </div>
      </main>
      <div className="mt-16 container mx-auto float-right font-abc">
        <div className="flex justify-between py-5 container w-full mx-auto">
          <div>
            {/*=== TABLE SEARCH BAR ===*/}
            <input
              onChange={Filter}
              type="text"
              placeholder="Search by Bus Number"
              className="border-gray-200 border-2 rounded-md p-2 ml-4 w-36 md:w-60 outline-blue-600"
            />
          </div>
          {/* <Link
            to="/expense/files"
            className="bg-[rgba(255,153,0,0.2)] flex items-center bg-white text-violet-600 border-violet-600 hover:bg-violet-600 border-2 hover:text-white rounded-md px-5 py-2"
          >
            <i className="fa-solid fa-eye"></i> &nbsp;&nbsp;Bill
          </Link> */}
          {/*=== DOWNLOAD REPORT BUTTON ===*/}
          <button
            onClick={() => {
              downloadExcel(excelData);
            }}
            className="bg-white text-violet-600 border-violet-600 hover:bg-violet-600 border-2 hover:text-white px-4  py-2 rounded-md mr-4"
          >
            Download Report <i className="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
      {/* DATA TABLE */}
      <div className="container mx-auto float-right">
        <DataTable
          columns={columns}
          data={data ? search : expenses}
          selectableRows
          fixedHeader
          pagination
          progressPending={pending}
          onSelectedRowsChange={handleRowSelected}
          progressComponent={<CustomLoader />}
        ></DataTable>
      </div>
    </>
  );
};

export default ComponentTable;

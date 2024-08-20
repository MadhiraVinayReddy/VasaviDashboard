import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import styled, { keyframes } from "styled-components";
import * as XLSX from "xlsx";

const DrComponent = () => {
  // NAVIGATING
  const Navigate = useNavigate();
  // SETTING DRIVERS DATA
  const [drivers, setDrivers] = useState([]);
  // SEARCH DATA
  const [search, setSearch] = useState();
  // IF THERE IS DATA IN SEARCH IT WILL SET TO TRUE
  const [data, setData] = useState(false);
  // SETTING EXCEL DATA
  const [excelData, setExcelData] = useState([]);
  // CONNECTS TO COLLECTION OF DRIVERS
  const driverCollection = collection(db, "Drivers");
  // USER DETAILS
  const [userInfo, setUserInfo] = useState();
  // LOADER
  const [pending, setPending] = useState(true);
  // SELECTED ROWS
  const [selectedRows, setSelectedRows] = React.useState([]);
  // HANDLING SELECTED ROWS
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  // DELETE DRIVER FUNCTION
  const deleteDriver = async (id) => {
    const driverdoc = doc(db, "Drivers", id);
    await deleteDoc(driverdoc);
    window.location.reload();
  };
  // LOADER COMPONENT
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
  // DATA OF TABLE
  const columns = [
    {
      name: "No",
      selector: (row) => row.index + 1,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "LicenseNo",
      selector: (row) => row.licenseNo,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
  ];
  // FUNCTION TO FETCH DRIVERS DATA
  const getDrivers = async () => {
    const data = await getDocs(driverCollection);
    setDrivers(
      data.docs.map((doc, index) => ({ ...doc.data(), id: doc.id, index }))
    );
    setExcelData(selectedRows.map((doc) => ({ ...doc, doc })));
    setPending(false);
  };
  // FUNCTION TO CONVERT JSON TO EXCEL DATA
  const downloadExcel = (data) => {
    if (selectedRows.length === 0) {
      alert("Kindly choose the items you wish to download.");
    } else {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
      XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
      XLSX.writeFile(workbook, "Drivers.xlsx");
    }
  };
  // UPDATING DRIVER
  const updatedriver = (id) => {
    Navigate("/updatedriver/" + id);
  };
  // SIDE EFFECTS
  useEffect(() => {
    getDrivers();
    onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
  }, [selectedRows]);
  // ADMIN ACTIONS
  if (userInfo?.email === "admin@gmail.com") {
    columns.push({
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="px-1 "
            onClick={() => {
              updatedriver(row.id);
            }}
          >
            <i className="fa-solid fa-pencil text-[#4f5d73] hover:text-violet-600"></i>
          </button>
          <button
            className="px-1 "
            onClick={() => {
              deleteDriver(row.id);
            }}
          >
            <i className="fa-solid fa-trash text-[#4f5d73] hover:text-violet-600"></i>
          </button>
        </>
      ),
    });
  }
  // FILTER FUNCTION
  const Filter = (e) => {
    const newData = drivers.filter((row) => {
      return row.fullName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch(newData);
    setData(true);
  };

  return (
    <>
      <main>
        <div className="flex justify-between container mx-auto mt-28 px-4 float-right  font-abc">
          {/*=== EXPENSES HEADING ===*/}
          <h1 className="md:text-4xl text-xl font-semibold text-[#4f5d73]">
            Drivers
          </h1>
          {/*=== NAVIGATES TO EXPENSES BASIC INFORMATION PAGE ===*/}
          <Link
            to="/driver/createdriver"
            className={
              "bg-white text-violet-600 border-violet-600 hover:bg-violet-600 hover:text-white border-2 px-4 py-2 rounded-md " +
              (userInfo?.email === "admin@gmail.com" ? "" : "hidden")
            }
          >
            New Driver <i className="fa-regular fa-plus"></i>
          </Link>
        </div>
      </main>
      <div className="mt-16 container mx-auto float-right  font-abc">
        <div className="shadow-sm shadow-gray-400 flex justify-between py-5 container w-full mx-auto">
          <div>
            {/*=== TABLE SEARCH BAR ===*/}
            <input
              onChange={Filter}
              type="text"
              placeholder="Search by Name"
              className="border-gray-200 border-2 rounded-md p-2 ml-4 w-36 md:w-60 outline-blue-500"
            />
            {/* <i className="fa-solid fa-magnifying-glass ml-5"></i> */}
          </div>
          {/*=== DOWNLOAD REPORT BUTTON ===*/}
          <button
            onClick={() => downloadExcel(excelData)}
            className="bg-white text-violet-600 border-violet-600 hover:bg-violet-600 hover:text-white border-2 px-4  py-2 rounded-md mr-4"
          >
            Download Report <i className="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
      {/* TABLE */}
      <div className="container mx-auto float-right">
        <DataTable
          columns={columns}
          data={data ? search : drivers}
          selectableRows
          fixedHeader
          pagination
          progressPending={pending}
          progressComponent={<CustomLoader />}
          onSelectedRowsChange={handleRowSelected}
        ></DataTable>
      </div>
    </>
  );
};

export default DrComponent;

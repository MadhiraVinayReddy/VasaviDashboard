import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
const Asidenav = () => {
  const [active, setActive] = React.useState("dashboard");
  const Navigate = useNavigate();
  const logout = async () => {
    signOut(auth);
    Navigate("/");
  };

  return (
    <div
      style={{ overflowY: "auto", maxHeight: "655px" }}
      className={
        "min-h-full  bg-violet-600 hidden md:fixed md:block min-w-[238px] pb-5"
      }
    >
      {/* <img
        src={dashdownimage}
        alt="style"
        className="fixed bottom-0 left-0 w-[238px] h-[440px] hidden md:block"
      /> */}
      <div className="py-12 pl-4 flex justify-between items-center z-50">
        <Link to="/main">
          <h3 className="text-white text-2xl font-semibold">COLLEGE PORTAL</h3>
        </Link>
        {/* <img src={logo} alt="skyGoal Logo" className="w-20]" /> */}
      </div>
      <div className="flex flex-col h-full space-y-1 font-poppins text-lg pl-5 font-semibold">
        <Link
          to="/main"
          onClick={() => setActive("dashboard")}
          className={
            "flex items-center  text-white text-[14px]  pl-4 cursor-pointer py-3 w-[176px] rounded-md z-20 " +
            (window.location.pathname == "/main" ? "bg-violet-400" : "")
          }
        >
          {/* <TbLayoutDashboard className="mr-4 text-lg" /> */}
          <span className=" text-white">Dashboard</span>
        </Link>
        <Link
          to="/expense"
          onClick={() => setActive("expense")}
          className={
            "flex items-center text-white pl-4 cursor-pointer py-3 w-[176px] text-[14px] rounded-md z-20 " +
            (window.location.pathname === "/expense" ? "bg-violet-400" : "")
          }
        >
          {/* <RiAccountCircleLine className="mr-4 text-lg" /> */}
          <span className="">Expense</span>
        </Link>

        <Link
          to="/buses"
          onClick={() => setActive("buses")}
          className={
            "flex items-center text-[14px] text-white pl-4  cursor-pointer py-3 w-[176px] rounded-md z-20 " +
            (window.location.pathname === "/buses" ? "bg-violet-400" : "")
          }
        >
          {/* <RiAccountCircleLine className="mr-4 text-lg" /> */}
          <span className="">Bus</span>
        </Link>

        <Link
          to="/students"
          onClick={() => setActive("referals")}
          className={
            "flex items-center text-[14px] text-white pl-4 cursor-pointer py-3 w-[176px] rounded-md z-20 " +
            (window.location.pathname === "/students" ? "bg-violet-400" : "")
          }
        >
          {/* <HiOutlineDocumentReport className="mr-4 text-lg" /> */}
          <span className="">Students</span>
        </Link>
        <Link
          to="/driver"
          onClick={() => setActive("driver")}
          className={
            "flex items-center text-[14px] text-white pl-4 cursor-pointer py-3 w-[176px] rounded-md z-20 " +
            (window.location.pathname === "/driver" ? "bg-violet-400" : "")
          }
        >
          {/* <HiOutlineDocumentReport className="mr-4 text-lg" /> */}
          <span className="">Drivers</span>
        </Link>

        <Link
          to="/"
          className={
            "flex items-center text-[14px] text-white pl-4 cursor-pointer py-3 rounded-md w-[176px] z-20 " +
            (active === "logout" ? "bg-violet-400" : "")
          }
          onClick={logout}
        >
          {/* <TbLogout className="mr-4 text-lg" /> */}
          <span className="">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Asidenav;

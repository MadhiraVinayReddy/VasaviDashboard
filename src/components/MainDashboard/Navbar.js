import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
const Navbar = () => {
  const [navToggle, setNavToggle] = React.useState(false);
  const [userInfo, setUserInfo] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
  }, []);
  const logout = async () => {
    signOut(auth);
    Navigate("/");
  };
  return (
    <div className="md:w-full md:px-10 fixed top-0 z-30 bg-white shadow-sm shadow-gray-400 w-full font-poppins">
      <div className="flex md:w-full md:mx-auto justify-between items-center h-20">
        <div
          className="flex flex-col justify-between h-[20px] cursor-pointer rounded-md pl-5 md:hidden"
          onClick={() => setNavToggle(true)}
        >
          <span className="w-8 border-[2px] border-violet-600 bg-violet-600 rounded-full "></span>
          <span className="w-8 border-[2px] border-violet-600 bg-violet-600 rounded-full "></span>
          <span className="w-8 border-[2px] border-violet-600 bg-violet-600 rounded-full "></span>
        </div>
        <div className="flex right-10  gap-10 fixed items-center md:pr-0 justify-between ">
          <div className="flex items-center gap-2">
            <div className="flex flex-col font-poppins cursor-pointer">
              <p className="text-xs">{userInfo?.email}</p>
              <p className="text-base">
                {userInfo?.email === "admin@gmail.com" ? "Admin" : "User"}
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            "min-h-full bg-violet-600 top-0 fixed md:relative md:hidden z-50 md:z-0 pl-0 pr-5  duration-500 " +
            (navToggle ? "translate-x-0" : "-translate-x-full")
          }
        >
          <div
            className="py-5 pl-4 flex justify-between items-center cursor-pointer text-xl text-white"
            onClick={() => setNavToggle(false)}
          >
            <div></div>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="py-5 pl-4 flex justify-between items-center"></div>
          <div className="flex flex-col font-semibold h-full  space-y-1 font-poppins text-[14px] px-5 z-20 ">
            <Link
              to="/main"
              className={
                "flex items-center text-white pl-4  cursor-pointer py-4 w-[230px] rounded-md z-20 " +
                (window.location.pathname === "/main" ? "bg-violet-400" : "")
              }
            >
              <span className=" text-white">Dashboard</span>
            </Link>
            <Link
              to="/expense"
              className={
                "flex items-center text-white pl-4  cursor-pointer py-4 w-[230px] rounded-md z-20 " +
                (window.location.pathname === "/expense" ? "bg-violet-400" : "")
              }
            >
              <span className="">Expense</span>
            </Link>
            <Link
              to="/students"
              className={
                "flex items-center text-white pl-4  cursor-pointer py-4 w-[230px] rounded-md z-20 " +
                (window.location.pathname === "/students"
                  ? "bg-violet-400"
                  : "")
              }
            >
              <span className="">Students</span>
            </Link>
            <Link
              to="/buses"
              className={
                "flex items-center text-white pl-4  cursor-pointer py-4 w-[230px] rounded-md z-20 " +
                (window.location.pathname === "/buses" ? "bg-violet-400" : "")
              }
            >
              <span className="">Bus</span>
            </Link>

            <Link
              to="/driver"
              className={
                "flex items-center text-white pl-4  cursor-pointer py-4 w-[230px] rounded-md z-20 " +
                (window.location.pathname === "/driver" ? "bg-violet-400" : "")
              }
            >
              <span className="">Drivers</span>
            </Link>

            <Link
              to="/"
              className="flex items-center text-white pl-4  cursor-pointer py-4 rounded-md z-20 "
              onClick={logout}
            >
              <span className="">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

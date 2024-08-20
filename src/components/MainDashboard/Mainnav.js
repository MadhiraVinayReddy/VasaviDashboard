import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Asidenav from "./Asidenav";
const Mainnav = () => {
  const [userInfo, setUserInfo] = useState();
  const [menuToggle, setMenuToggle] = useState(true);
  const [ProfileToggle, setProfileToggle] = useState(true);

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

  function Toggle() {
    setMenuToggle(!menuToggle);
  }
  function profileToggle() {
    setProfileToggle(!ProfileToggle);
  }

  return (
    <div>
      <nav className=" shadow-sm shadow-gray-500 font-abc">
        <div className=" flex  md:space-x-0 w-full justify-between mx-auto shadow-gray-100 shadow-sm">
          <div className="flex bg-violet-600 justify-between py-[26px] items-center px-5 fixed z-50">
            <Link to="/main">
              <h3 className="text-white text-lg font-semibold">
                COLLEGE PORTAL
              </h3>
            </Link>
            <div onClick={Toggle} className="hidden md:block">
              <i
                className={
                  "fa-solid text-white cursor-pointer " +
                  (menuToggle ? "fa-toggle-on" : "fa-toggle-off")
                }
              ></i>
            </div>
            <div onClick={Toggle} className="md:hidden">
              <i
                className={
                  "fa-solid text-white cursor-pointer " +
                  (menuToggle ? "fa-toggle-off" : "fa-toggle-on")
                }
              ></i>
            </div>
          </div>
          <div className="py-10 px-5 fixed shadow-sm shadow-gray-400 w-full bg-white">
            <div className="flex justify-between items-center right-5 top-5 z-40 absolute">
              {/*=== ACCOUNT PICTURE NAME AND DETAIL ===*/}
              <div
                className="flex items-center justify-between space-x-3"
                onClick={profileToggle}
              >
                <i className="fa-solid fa-user bg-gray-200 p-3 rounded-full text-gray-400 cursor-pointer hover:bg-gray-100"></i>
                <div
                  className={
                    "hidden md:" + (ProfileToggle ? "hidden" : "block")
                  }
                >
                  <p className="text-sm font-medium">{userInfo?.email}</p>
                  <p className="text-sm">
                    {userInfo?.email === "admin@gmail.com" ? "Admin" : "User"}
                  </p>
                </div>
                <button
                  className="bg-violet-600 px-4 text-gray-100 font-semibold py-2 rounded-md flex items-center "
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          "flex flex-col bg-gray-100 text-[#4f5d73] font-abc z-50 float-left shadow-sm shadow-gray-400 h-[100vh] px-8 py-5 fixed top-20 " +
          (menuToggle ? "md:block hidden" : "md:hidden block")
        }
      >
        <ul>
          <li className="py-2 hover:text-white hover:bg-violet-600 text-lg">
            <Link to="/main" className="flex items-center justify-start gap-5">
              <i className="fa-solid fa-house text-violet-600 hover:text-white"></i>{" "}
              Dashboard
            </Link>
          </li>
          <li className="py-2 hover:text-violet-600 text-lg">
            <Link
              to="/expense"
              className="flex items-center justify-start gap-5"
            >
              <i className="fa-solid fa-hand-holding-dollar text-violet-600"></i>
              Expense
            </Link>
          </li>
          <li className="py-2 hover:text-violet-600 text-lg">
            <Link to="/buses" className="flex items-center justify-start gap-5">
              <i className="fa-solid fa-bus text-violet-600"></i> Bus
            </Link>
          </li>
          <li className="py-2 hover:text-violet-600 text-lg">
            <Link
              to="/students"
              className="flex items-center justify-start gap-5"
            >
              <i className="fa-solid fa-users text-violet-600"></i> Students
            </Link>
          </li>
          <li className="py-2 hover:text-violet-600 text-lg">
            <Link
              to="/driver"
              className="flex items-center justify-start gap-5"
            >
              <i className="fa-solid fa-id-card text-violet-600"></i> Drivers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mainnav;

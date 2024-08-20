import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useToast } from "../../context/ToastProvider";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const { success, errormsg } = useToast();
  const Demoadmin = (e) => {
    e.preventDefault();
    setLogin("admin@gmail.com");
    setPassword("Admin1");
  };
  const Login = async (e) => {
    e.preventDefault();
    try {
      if (login.length === 0) return errormsg("Enter Email");
      if (password.length === 0) return errormsg("Enter Password");
      if (password.length < 6)
        return errormsg("Password should contain atleast 6 characters");
      const user = await signInWithEmailAndPassword(auth, login, password);
      success("Successfully logedIn");
      Navigate("/main");
    } catch (error) {
      errormsg(error.code);
    }
  };

  return (
    <div className=" min-h-screen font-bcd">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="container  flex flex-col items-center justify-center h-screen mx-auto px-5 z-100">
        <h1 className="text-3xl text-white mb-2 font-semibold">
          Welcome Back !
        </h1>
        <form className="w-full max-w-md bg-white flex flex-col justify-center items-left rounded-md p-6 space-y-3">
          <h1 className="font-extrabold text-2xl text-gray-700">
            Sign In to your account
          </h1>
          <label className="font-semibold text-[#4f5d73]">Your Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={login}
            className="rounded p-3 border-gray-400 border-2 outline-violet-600"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <label className="font-semibold text-[#4f5d73]">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            className="rounded p-3 border-gray-400 border-2 outline-violet-600"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div></div>
          {/* <div className="flex justify-between">
            <span className="flex space-x-2 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p className="font-semibold text-[#4f5d73]">Remember me</p>
            </span>
            <a href="#" className="font-semibold text-[#4f5d73]">
              Forgot Password ?
            </a>
          </div> */}
          <button
            className="bg-white text-violet-600 border-violet-600 hover:bg-violet-600 hover:text-white border-2  p-3 rounded font-semibold"
            onClick={Demoadmin}
          >
            Demo admin
          </button>
          <button
            className="bg-white text-violet-600 border-violet-600 hover:bg-violet-600 hover:text-white border-2  p-3 rounded font-semibold"
            onClick={Login}
          >
            Sign In
          </button>
          <p className="text-gray-800">
            Don't have an account at?&nbsp;&nbsp;
            <Link
              to="/register"
              className="font-semibold hover:text-violet-600"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

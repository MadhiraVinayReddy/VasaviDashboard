import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useToast } from "../../context/ToastProvider";
import "../../App.css";
const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { success, errormsg } = useToast();
  const userCollection = collection(db, "users");
  const Navigate = useNavigate();
  const Register = (e) => {
    e.preventDefault();
    if (registerEmail.length === 0) return errormsg("Enter Email");
    if (registerPassword.length === 0) return errormsg("Enter Password");
    if (registerPassword.length < 6)
      return errormsg("Password should contain atleast 6 characters");
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        addDoc(userCollection, {
          registerEmail,
          registerPassword,
          isUser: 1,
        });
        success("Account created successfully !! Login to your account");
        Navigate("/");
      })
      .catch((error) => {
        const errorcode = error.code;
        errormsg(errorcode);
      });
  };
  return (
    <div>
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
          <li></li>
        </ul>
      </div>
      <div className="min-h-screen font-bcd">
        <div className="container flex flex-col items-center justify-center h-screen mx-auto px-5">
          <h1 className="text-3xl text-white mb-2 font-semibold">
            Welcome !! Let's begin
          </h1>
          <form className="w-full max-w-md bg-white flex flex-col justify-center items-left rounded-md p-6 space-y-3">
            <h1 className="font-extrabold text-2xl text-gray-700">
              Create your account
            </h1>
            <label className="font-semibold text-[#4f5d73]">Your Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="rounded p-3 border-gray-400 border-2 outline-blue-500"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <label className="font-semibold text-[#4f5d73]">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="rounded p-3 border-gray-400 border-2 outline-blue-500"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
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
              className="bg-white text-violet-600 border-violet-600 hover:bg-violet-600 hover:text-white border-2 font-semibold p-3 rounded"
              onClick={Register}
            >
              Create Account
            </button>
            <p className="text-gray-700">
              Already have an account ?&nbsp;&nbsp;
              <Link to="/" className=" font-semibold hover:text-violet-600">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

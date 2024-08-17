import React, { useState } from "react";
import axiosInstance from "../../utils/Axios";
import { FaUser, FaLock } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setLoginState,
  setAdminState,
  setUserState,
  setGmailState,
} from "../../../Store/store"; // Adjust the path as necessary

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setDetails((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post(
        "http://localhost:3000/auth/loginDetails",
        details,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log(result);
      const token = Cookies.get("token"); // 'token' is the cookie name
      console.log(token); // Prints the token value
      const role = Cookies.get("role");
      console.log(role); // 'role' is the cookie name
      if (token && role) {
        console.log("Logged In Successfully");
        const decoded = jwtDecode(token);
        dispatch(setGmailState(decoded));
        dispatch(setLoginState(true));
        if (role === "admin") {
          dispatch(setAdminState(true)); // Or false depending on your logic
        } else {
          dispatch(setUserState(true)); // Or false depending on your logic
        }
        console.log(decoded);
        setDetails({
          username: "",
          password: "",
        });
        navigate("/");
      } else {
        console.log("Failed to Login");
        setDetails({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setDetails({
        username: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 w-full px-[5vw] py-6 pt-14 justify-between max-md:grid-cols-1">
        <div className="max-w-96  pt-16 max-md:pt-0">
          <div className="flex-col space-y-4 max-md:">
            <h2 className="font-bold text-5xl leading-tight">
            Welcome Back!
            
            </h2>
            <p className="text-lg">
            Log in to access your account and continue where you left off.
            </p>
          </div>
        </div>
        <div className="col-start-2 justify-self-end p-16  rounded-large max-md:col-start-1 , max-md:p-4 max-md:justify-self-auto ">
          <form method="post" onSubmit={handleSubmit} className="flex-col space-y-4">
          <div className="">
              <p className="py-2">Name</p>
              <div className=" flex items-center space-x-2 ">
            <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
              type="text"
              id="username"
              onChange={handleInputChange}
              placeholder="Enter your username"
              name="username"
              value={details.username}
            />
            <FaUser className="icon" />
            </div>
            </div>
            <div>
              <p className="py-2">Password</p>
              <div className="flex items-center space-x-2">
            <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
              type="password"
              id="pass"
              onChange={handleInputChange}
              placeholder="Enter your password"
              name="password"
              value={details.password}
            />
            <FaLock className="icon" />
            </div>
            </div>

            <button type="submit" className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950 hover:scale-110 hover:border-medium">Send Feedback</button>
          </form>
        </div>
          <div  className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;

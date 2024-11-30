import React, { useState } from "react";
import axiosInstance from "../../utils/Axios";
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import useAlert  from "../../utils/setAlert";
import { CheckboxGroup } from "@nextui-org/react";
import  CustomCheckbox  from "./SignupEssentials/CustomCheckbox";
import InterestedGenre from "./SignupEssentials/InterestedGenre";

const Signup = () => {
  const navigate = useNavigate();
  const { handleSuccess, handleError } = useAlert();

  // State to store user inputs
  const [details, setDetails] = useState({
    fullName: "",
    gmail: "",
    username: "",
    number: "",
    address: "",
    password: "",
    cpassword: "",
    gender: "",
  });
  const [groupSelected, setGroupSelected] = React.useState([]);

  // State to track the current step in the signup process
  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    setDetails((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (details.password === details.cpassword) {
        const response = await axiosInstance.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signupDetails`, details, {
          headers: { 'Content-Type': 'application/json' },
        });

        const result = response.data;
        if (result.success === true) {
          const token = Cookies.get('token'); // 'token' is the cookie name
          if (token) {
            console.log("Signup Successfully");
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("gmail", details.gmail);
            localStorage.setItem("fullName", details.fullName);
            localStorage.setItem("username", details.username);
            localStorage.setItem("role", "user");
            handleSuccess(result.message);
            setDetails({
              fullName: '',
              username: '',
              gmail: '',
              number: '',
              address: '',
              password: '',
              cpassword: '',
              gender: ''
            });
            navigate("/");
          } else {
            console.log("Signup failed");
            handleError("Signup failed");
          }
        } else if (result.exists === true) {
          handleError(result.message);
        }
      } else {
        handleError("Password and Confirm password didn't match");
      }
      setDetails({
        fullName: '',
        username: '',
        gmail: '',
        number: '',
        address: '',
        password: '',
        cpassword: '',
        gender: ''
      });
    } catch (error) {
      console.log(error);
      if (error.response.status === 429) {
        handleError('Rate limit exceeded. Please try again later.');
      } else {
        handleError(error.response.data.message);
      }
      setDetails({
        fullName: '',
        username: '',
        gmail: '',
        number: '',
        address: '',
        password: '',
        cpassword: '',
        gender: ''
      });
    }
  };

  // Step navigation functions
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Render different form parts based on the current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>
              <p className="py-2">Name</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                value={details.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Username</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="text"
                placeholder="Enter your username"
                name="username"
                value={details.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Email</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="email"
                placeholder="Enter your email"
                name="gmail"
                value={details.gmail}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Phone Number</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="tel"
                placeholder="Enter your phone number"
                name="number"
                value={details.number}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Password</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={details.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Confirm Password</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="password"
                placeholder="Confirm your password"
                name="cpassword"
                value={details.cpassword}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <p className="py-2">City</p>
              <input
                className="w-full p-2 rounded-lg bg-slate-100"
                type="text"
                placeholder="Enter your City"
                name="city"
                value={details.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Address</p>
              <input
                className="w-full h-8 p-2 rounded-lg bg-slate-100"
                type="text"
                placeholder="Enter your Address"
                name="address"
                value={details.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Gender</p>
              <select
                name="gender"
                className="w-full p-2 rounded-lg bg-slate-100"
                value={details.gender}
                onChange={handleInputChange}
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <p className="py-2">Your interests</p>
              <div className="flex flex-col gap-1 w-full">
                <CheckboxGroup
                  className="gap-1"
                  label="Select multiples"
                  orientation="horizontal"
                  value={groupSelected}
                  onChange={setGroupSelected}
                >
                  <CustomCheckbox value="Fictional">Fictional</CustomCheckbox>
                  <CustomCheckbox value="Finance">Finance</CustomCheckbox>
                  <CustomCheckbox value="Self-Help">Self-Help</CustomCheckbox>
                  <CustomCheckbox value="Skill-Based">Skill-Based</CustomCheckbox>
                  <CustomCheckbox value="Biography">Biography</CustomCheckbox>
                  <CustomCheckbox value="Comics">Comics</CustomCheckbox>
                </CheckboxGroup>
                <p className="mt-4 ml-1 text-default-500">
                  Selected: {groupSelected.join(", ")}
                </p>
              </div>
            </div>

          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[80vh] grid grid-cols-2 w-full 100vh px-[5vw] py-6 justify-between max-md:grid-cols-1">
      <div className="max-w-80 pt-16 max-md:pt-0">
        <div className="flex-col space-y-4 max-md:">
          <h2 className="font-bold text-5xl leading-tight">Read More, Spend Less</h2>
          <p className="text-lg">
            Become a member and enjoy the convenience of renting books at affordable prices. Sign up and start reading today.
          </p>
        </div>
      </div>
      <div className="col-start-2 pl-72 p-16 rounded-large max-md:col-start-1 max-md:p-4 max-md:justify-self-auto">
        <form method="post" className="signup" onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950">
                Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={nextStep} className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950">
                Next
              </button>
            ) : (
              <button type="submit" className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950">
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

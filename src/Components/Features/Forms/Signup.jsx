import { useState } from "react";
import axiosInstance from "../../utils/Axios";
import { useNavigate } from "react-router-dom";
import useAlert from "../../utils/setAlert";

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
    city: "",
  });

  // State to track the current step in the signup process
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleCPasswordVisibility = () => {
    setShowCPassword((prev) => !prev);
  };

  const handleNext = async (e) => {
    e.preventDefault();
  };
  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (details.password === details.cpassword) {
        console.log(details, "Form Details");
        const response = await axiosInstance.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/signupDetails`,
          details,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const result = response.data;
        if (result.success === true) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("gmail", details.gmail);
          localStorage.setItem("fullName", details.fullName);
          localStorage.setItem("username", details.username);
          localStorage.setItem("role", result.role);
          handleSuccess(result.message);
          setDetails({
            fullName: "",
            username: "",
            gmail: "",
            number: "",
            address: "",
            password: "",
            cpassword: "",
            gender: "",
            city: "",
          });
          navigate("/");
        } else if (result.exists === true) {
          handleError(result.message);
        } else if (result.success === false) {
          handleError("Singup failed");
        }
      } else {
        handleError("Password and Confirm password didn't match");
      }
      setDetails({
        fullName: "",
        username: "",
        gmail: "",
        number: "",
        address: "",
        password: "",
        cpassword: "",
        gender: "",
        city: "",
      });
    } catch (error) {
      if (error.response.status === 429) {
        handleError("Rate limit exceeded. Please try again later.");
      } else {
        handleError(error.response.data.message);
        console.log(error.response.data.error, "Error");
      }
      setDetails({
        fullName: "",
        username: "",
        gmail: "",
        number: "",
        address: "",
        password: "",
        cpassword: "",
        gender: "",
        city: "",
      });
      setStep(1);
    }
  };

  const handleInputChange = (e) => {
    setDetails((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (details.password === details.cpassword) {
        if (
          details.number.length === 10 &&
          /^[0-9]+$/.test(details.number) &&
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            details.gmail
          ) &&
          details.username.length >= 8 &&
          details.fullName.length >= 10
        ) {
          setStep(step + 1);
        } else {
          handleError("Please ensure all fields are valid before proceeding.");
        }
      } else {
        handleError("Password and Confirm Password do not match.");
      }
    }
  };

  const prevStep = () => {
    if (step == 2) {
      setStep(step - 1);
    } else if (step == 1) {
      handleError("You cannot go beyond this step");
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
                required
                placeholder="Enter your full name"
                name="fullName"
                value={details.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Username</p>
              <input
                required
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
                required
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
                type="number"
                required
                placeholder="Enter your phone number"
                name="number"
                maxLength={10}
                value={details.number}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-2">Password</p>
              <div className="relative">
                <input
                  className="w-full p-2 rounded-lg bg-slate-100"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  required
                  value={details.password}
                  onChange={handleInputChange}
                />
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
            </div>
            <div>
              <p className="py-2">Confirm Password</p>
              <div className="relative">
                <input
                  required
                  className="w-full p-2 rounded-lg bg-slate-100"
                  type={showCPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="cpassword"
                  autoComplete="off"
                  value={details.cpassword}
                  onChange={handleInputChange}
                />
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleCPasswordVisibility}
                >
                  {showCPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
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
      default:
        return null;
    }
  };

  return (
    <div className=" grid grid-cols-2 w-full 100vh px-[5vw] py-6 justify-between max-md:grid-cols-1">
      <div className="max-w-80 pt-16 max-md:pt-0">
        <div className="flex-col space-y-4 max-md:">
          <h2 className="font-bold text-5xl leading-tight">
            Read More, Spend Less
          </h2>
          <p className="text-lg">
            Become a member and enjoy the convenience of renting books at
            affordable prices. Sign up and start reading today.
          </p>
        </div>
      </div>
      <div className="col-start-2 pl-72 p-16 rounded-large max-md:col-start-1 max-md:p-4 max-md:justify-self-auto">
        <form method="post" className="signup" onSubmit={handleNext}>
          {renderStepContent()}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={step == 1 ? true : false}
              className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950"
            >
              Previous
            </button>
            {step == 1 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={step == 2 ? true : false}
                className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950"
                onClick={handleSubmit}
              >
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

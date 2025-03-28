import { useState } from "react";
import axiosInstance from "../../utils/Axios";
import { useNavigate } from "react-router-dom";
import useAlert from "../../utils/setAlert";

const Login = () => {
  const navigate = useNavigate();
  const { handleSuccess, handleError } = useAlert();
  const [showPassword, setShowPassword] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
        `${import.meta.env.VITE_BACKEND_URL}/auth/loginDetails`,
        details,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.success);
      const result = response.data.userData;
      if (response.data.success === true) { 
          handleSuccess(response.data.message);
          const role = response.data.role;
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("gmail", result.emailId);
          localStorage.setItem("fullName", result.fullName);
          localStorage.setItem("username", result.username);
          localStorage.setItem("city", result.city);
          if (role === "admin") {
            localStorage.setItem("role", "admin");
          } else if (role == "user") {
            localStorage.setItem("role", "user");
          }
          setDetails({
            username: "",
            password: "",
          });
          navigate("/");
        
      }else {
        handleError("Invalid Credentials, Failed to login");
        setDetails({
          username: "",
          password: "",
        });
      }  
    } catch (error) {
      if (error.response.status === 429) {
        handleError("Rate limit exceeded. Please try again later.");
      } else {
        handleError("Failed to Login, Try again later");
      }
      setDetails({
        username: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 w-full px-[5vw] py-6 justify-between max-md:grid-cols-1">
        <div className="max-w-96  pt-16 max-md:pt-0">
          <div className="flex-col space-y-4 max-md:">
            <h2 className="font-bold text-5xl leading-tight">Welcome Back!</h2>
            <p className="text-lg">
              Log in to access your account and continue where you left off.
            </p>
          </div>
        </div>
        <div className="col-start-2 pl-72 p-16  rounded-large max-md:col-start-1 , max-md:p-4 max-md:justify-self-auto ">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex-col space-y-4"
          >
            <div className="">
              <p className="py-2">Name</p>
              <div className=" flex items-center space-x-2 ">
                <input
                  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="text"
                  id="username"
                  autoComplete="username"
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  name="username"
                  value={details.username}
                />
              </div>
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

            <button
              type="submit"
              className="p-2 my-2 relative h-10 w-24  rounded-xl bg-slate-400 text-slate-100 ease-in duration-150 hover:bg-slate-950 hover:text-sm "
            >
              Login
            </button>
          </form>
        </div>
        <div className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;

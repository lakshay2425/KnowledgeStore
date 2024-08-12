import React, { useState } from "react";
import axiosInstance from "../../utils/Axios";
import "./form.css";
import { FaUser, FaLock } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLoginState, setAdminState, setUserState, setEmailState } from '../../../Store/store'; // Adjust the path as necessary
import {useAlert} from "../../utils/setAlert";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSuccess, handleError } = useAlert();


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
            'Content-Type': 'application/json'
          }
        }
      );
      const result = response.data;
      const token = Cookies.get('token'); // 'token' is the cookie name
      const role = Cookies.get('role');
      if(token && role){
        console.log("Logged In Successfully");
        handleSuccess("Logged In Successfully");
        const decoded = jwtDecode(token);
        dispatch(setEmailState(decoded.data));
        dispatch(setLoginState(true));
        if(role === "admin"){
          dispatch(setAdminState(true)); // Or false depending on your logic     
        }else{
          dispatch(setUserState(true)); // Or false depending on your logic
        }
        setDetails({
          username: "",
          password: "",
        });
        navigate("/");
      }else{
        console.log("Failed to Login");
        handleError("Failed to Login")
        setDetails({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      handleError("Failed to Login");
      setDetails({
        username : '',
        password : ''
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="form-box login">
            <form method="post" onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="text"
                  id="username"
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  name="username"
                  value={details.username}
                />
                <FaUser className="icon"/>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  id="pass"
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  name="password"
                  value={details.password}
                />
                <FaLock className="icon"/>
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot password</a>
              </div>

              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Don't have an account <Link to="http://localhost:4000/Signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

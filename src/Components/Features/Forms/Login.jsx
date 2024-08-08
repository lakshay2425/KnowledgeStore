import React, { useState } from "react";
import axiosInstance from "../../utils/Axios";
import "./form.css";
import { FaUser, FaLock } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState("");

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
      console.log(result);
      setToken(Cookies.get('token')); // 'token' is the cookie name
      console.log(token); // Prints the token value
      if(token){
        console.log("Logged In Successfully");
        const decoded = jwtDecode(token);
        console.log(decoded);
        setDetails({
          username: "",
          password: "",
        });
        navigate("/");
      }else{
        console.log("Failed to Login");
        setDetails({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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

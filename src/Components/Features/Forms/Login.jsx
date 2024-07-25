import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { FaUser, FaLock } from "react-icons/fa";


const Login = () => {
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
      const response = await axios.post(
        "http://localhost/auth/loginDetails",
        details,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("Server response:", response.data);
      setDetails({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
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
                  Don't have an account <a href="http://localhost:4000/Signup">Register</a>
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

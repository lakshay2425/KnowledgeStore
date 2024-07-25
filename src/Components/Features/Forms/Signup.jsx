import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { FaUser,FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
//import { useHistory } from 'react-router-dom';

const Signup = () => {
  //const history = useHistory();
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

  const handleInputChange = (e) => {
    setDetails((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        if(details.password === details.cpassword){
        const response = await axios.post('http://localhost:3000/auth/signupDetails', details,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log(response);
        }else{
          console.log("Password and Confirm password didn't match");
        }
      setDetails({
        fullName : '',
        username : '',
        gmail : '',
        number : '',
        address : '',
        password : '',
        cpassword : '',
        gender : ''
        });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <div className="Form-box login">
            <form method="post" className="signup" onSubmit={handleSubmit}>
              <h1>sign up</h1>
              <div className="input-box">
                <input
                  type="text"
                  id="fullName"
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  name="fullName"
                  value={details.fullName}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  id="Username"
                  onChange={handleInputChange}
                  placeholder="Enter your user name"
                  name="username"
                  value={details.username}
                />
                <FaUser className="icon"/>
              </div>
              <div className="input-box">
                <input
                  type="gmail"
                  id="gmail"
                  onChange={handleInputChange}
                  placeholder="Enter your gmail"
                  name="gmail"
                  value={details.gmail}
                />
                <IoIosMail className="icon"/>
              </div>
              <div className="input-box">
                <input
                  type="number"
                  id="contact"
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  name="number"
                  value={details.number}
                />
                <FaPhone className="icon"/>
              </div>
              <div className="text">

                <textarea
                  name="address"
                  placeholder="Enter your address"
                  id="address"
                  onChange={handleInputChange}
                  cols="32"
                  value={details.address}
                  rows="5"
                  ></textarea>
              
                  </div>
              <div className="input-box">

              <input
                type="password"
                id="pass"
                name="password"
                onChange={handleInputChange}
                value={details.password}
                placeholder="Enter your password"
                required
              /><FaLock className="icon"/>
                </div>
                <div className="input-box">

                <input
                  type="password"
                  id="cpass"
                  name="cpassword"
                  onChange={handleInputChange}
                  value={details.cpassword}
                  placeholder="Enter your confirm password"
                  required
                />
                <FaLock className="icon"/>
                  </div>
                Select your Gender
                <div className="custom-select">

                <div className="gender">

                <select
                  name="gender"
                  className="gender"
                  onChange={handleInputChange}
                  value={details.gender}
                  size={1}
                  >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="others">Others</option>
                  <option value="not_specified">Prefer not to say</option>
                </select>
                  </div>
                    </div>
                  <button type="submit">signup</button>
              <div className="register-link">
                <p>
                  already't have an account <a href="Signup.jsx">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

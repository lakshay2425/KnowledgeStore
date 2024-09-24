import React, { useState } from "react";
import axiosInstance from "../../utils/Axios"
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { useAlert } from "../../utils/setAlert";

const Signup = () => {
  const navigate = useNavigate();
  const { handleSuccess, handleError } = useAlert();

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
      if (details.password === details.cpassword) {
        const response = await axiosInstance.post('http://localhost:3000/auth/signupDetails', details,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        const result = response.data;
        console.log(result);
        token = Cookies.get('token'); // 'token' is the cookie name
        console.log(token); // Prints the token value
        if (token) {
          console.log("Signup Successfully");
          const decoded = jwtDecode(token);
          console.log(decoded);
          handleSuccess("Signup Successfully");
          setTimeout(() => {
            clearAlert();
          }, 2000)
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
          navigate("/");          
        }else{
          console.log("Signup failed");
          handleError("Signup failed");
          setTimeout(() => {
            clearAlert();
          }, 3000)
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
      } else {
        console.log("Password and Confirm password didn't match");
        handleError("Password and Confirm password didn't match");
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
    } catch (error) {
      console.log(error);
      handleError(error.message);
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

  return (
    <>
      <div className="grid grid-cols-2 w-full px-[5vw] py-6 justify-between max-md:grid-cols-1">
        <div className="max-w-80  pt-16 max-md:pt-0">
          <div className="flex-col space-y-4 max-md:">
            <h2 className="font-bold text-5xl leading-tight">Read More, Spend Less</h2>
            <p className="text-lg">Become a member and enjoy the convenience of renting books at affordable prices. Sign up and start reading today.</p>
          </div>
        </div>
        <div className="col-start-2 pl-72 p-16 rounded-large max-md:col-start-1 , max-md:p-4 max-md:justify-self-auto ">
          <form method="post" className="signup" onSubmit={handleSubmit}>
            <div className="">
              <p className="py-2">Name</p>
              <div className=" flex items-center space-x-2 ">
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="text"
                  id="fullName"
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  name="fullName"
                  value={details.fullName}
                />

              </div>
            </div>
            <div>
              <p className="py-2">Username</p>
              <div className="flex items-center space-x-2">
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="text"
                  id="Username"
                  onChange={handleInputChange}
                  placeholder="Enter your user name"
                  name="username"
                  value={details.username}
                />
                <FaUser className="icon" />
              </div>
            </div>
            <div>
              <p className="py-2">Email</p>
              <div className="flex items-center space-x-2">
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="gmail"
                  id="gmail"
                  onChange={handleInputChange}
                  placeholder="Enter your gmail"
                  name="gmail"
                  value={details.gmail}
                />
                <IoIosMail className="icon" />
              </div>
            </div>
            <div>
              <p className="py-2">Phone Number</p>
              <div className="flex items-center space-x-2">
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium ,
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  id="contact"

                  max={10}
                  min={10}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  name="number"
                  value={details.number}
                />
                <FaPhone className="icon" />
              </div>
            </div>
            {/* <div>
              <p className="py-2">Message</p>
              <div className="flex items-center space-x-2">
                <textarea className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  name="address"
                  placeholder="Enter your address"
                  id="address"
                  onChange={handleInputChange}
                  cols="32"
                  value={details.address}
                  rows="5"
                ></textarea>

              </div>
            </div> */}
            <div>
              <p className="py-2">Password</p>
              <div className="flex items-center space-x-2">
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="password"
                  id="pass"
                  name="password"
                  onChange={handleInputChange}
                  value={details.password}
                  placeholder="Enter your password"
                  required
                /><FaLock className="icon" />
              </div>
            </div>
            <div>
              <p className="py-2">Confirm Password</p>
              <div className="flex items-center space-x-2">
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="password"
                  id="cpass"
                  name="cpassword"
                  onChange={handleInputChange}
                  value={details.cpassword}
                  placeholder="Enter your confirm password"
                  required
                />
                <FaLock className="icon" />
              </div>
            </div>
            <div>
              <p className="py-2">select your gender</p>
              <div className="flex items-center space-x-2">


                <select
                  name="gender"
                  className="gender w-full p-2 rounded-lg bg-slate-100 border-medium"
                  onChange={handleInputChange}
                  value={details.gender}
                  size={1}
                >
                  <option name="gender" value="Male" >Male</option>
                  <option name="gender" value="Female">Female</option>
                  <option name="gender" value="others">Others</option>
                  <option name="gender" value="not_specified">Prefer not to say</option>
                </select>
              </div>
            </div>
            <button type="submit" className="p-2 my-2 relative h-10 w-24  rounded-xl bg-slate-400 text-slate-100 ease-in duration-150 hover:bg-slate-950 hover:text-sm ">Sign up</button>

          </form>
        </div>
        <div className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div>

    </>
  );
};

export default Signup;

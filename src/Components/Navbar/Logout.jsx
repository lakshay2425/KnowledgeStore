// export default Logout
import React from 'react'
import axiosInstance from "../utils/Axios";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Logout = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`);
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("role", "");
      localStorage.setItem("gmail", "");
      localStorage.setItem("fullName", "");
      localStorage.setItem("username", "");
      Cookies.remove('token');  // Remove the token cookie
      navigate("/Login");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <input type="submit" onClick={handleSubmit} value="Logout" className='btn btn-danger nav-btn px-1 w-full justify-start' />
    </>
  )
}

export default Logout

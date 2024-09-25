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
      const response = await axiosInstance.get("http://localhost:3000/auth/logout")
      const result = response.data;
      console.log(result);
      sessionStorage.setItem("isLoggedIn", false);
      sessionStorage.setItem("gmail", "");
      sessionStorage.setItem("role", "");
      Cookies.remove('token');  // Remove the token cookie
      Cookies.remove('role');   // Remove the role cookie
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

import axiosInstance from "./Axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const handleLogout = async () => {
    try {
      const navigate  = useNavigate();
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
  };
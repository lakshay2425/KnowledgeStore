import React from 'react'
import axiosInstance from "../utils/Axios";
import { useDispatch } from 'react-redux';
import { setLoginState, setAdminState, setUserState, setEmailState } from '../../../Store/store';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.get("http://localhost:3000/auth/logout")
      const result = response.data;
      console.log(result);
      dispatch(setEmailState(""));
      dispatch(setLoginState(false));
      dispatch(setAdminState(false));
      dispatchEvent(setUserState(false));
      Cookies.remove('token');  // Remove the token cookie
      Cookies.remove('role');   // Remove the role cookie
      navigate("/Login");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <input type="submit" onClick={handleSubmit} value="Logout" className='btn btn-danger' />
    </>
  )
}

export default Logout

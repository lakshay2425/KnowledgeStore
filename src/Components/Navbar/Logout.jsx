import { useNavigate } from 'react-router-dom';
import useAlert from '../utils/setAlert';
import axiosInstance from '../utils/Axios';
import Cookies from 'js-cookie';

const Logout = () => {
  const { handleError } = useAlert();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
      e.preventDefault();
      await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`)
      .then(()=>{
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("role", "");
        localStorage.setItem("gmail", "");
        localStorage.setItem("fullName", "");
        localStorage.setItem("username", "");
        Cookies.remove('token');  // Remove the token cookie
        navigate("/");
      })
     .catch(()=> {
      handleError("Failed to login, Try again in some time");
    });
  }
  return (
    <>
      <input type="submit" onClick={handleSubmit} value="Logout" className='btn btn-danger nav-btn px-1 w-full justify-start' />
    </>
  )
}

export default Logout

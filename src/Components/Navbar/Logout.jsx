import { useNavigate } from 'react-router-dom';
import useAlert from '../utils/setAlert';
import axiosInstance from '../utils/Axios';
import Cookies from 'js-cookie';

const Logout = () => {
  const { handleError } = useAlert();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
      e.preventDefault();
      await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`)
      .then(()=>{
        localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("role");
        localStorage.removeItem("gmail");
        localStorage.removeItem("fullName");
        localStorage.removeItem("username");
        localStorage.removeItem("city");
        Cookies.remove('token');  // Remove the token cookie
        navigate("/Login");
      })
     .catch(()=> {
      handleError("Failed to login, Try again in some time");
    });
  }
  return (
    <>
      {/* <input type="submit" onClick={handleLogout} value="Logout" className='btn btn-danger nav-btn px-1 w-full justify-start' /> */}
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout

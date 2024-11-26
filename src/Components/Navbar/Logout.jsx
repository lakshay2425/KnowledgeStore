import React from 'react'
import { handleLogout } from '../utils/LogoutUser';

const Logout = () => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      handleLogout();
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

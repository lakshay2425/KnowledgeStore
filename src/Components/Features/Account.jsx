import React, { useEffect } from 'react'

const Account = () => {
  let userData = "";
  useEffect(() => {
      userData = JSON.parse(localStorage.getItem("userDetails"));
  }, [localStorage.getItem("userDetails")])

  console.log("User Details", userData);

  return (
    <div>Account</div>
  )
}

export default Account
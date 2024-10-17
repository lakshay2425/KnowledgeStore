/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoBagHandleOutline } from "react-icons/io5";
import NavbarMobile from "./NavbarMobile";
import Search from "./Search";
import Categories from "./Categories";
import FormDropDown from "./formDropDown";
import AdminPanel from "./adminPanel";
import Logout from "./Logout";
import UserAvatar from "./UserAvatar";
import { Divider } from "@nextui-org/divider";
import axiosInstance from "../utils/Axios"


var Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState((localStorage.getItem("role")));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [email, setEmail] = useState((localStorage.getItem("gmail")));
 const  [userData, setUserData] = useState((localStorage.getItem("userDetails")))

  //To fetch isLoggedIn value from localStorage
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [localStorage.getItem("isLoggedIn")]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // //To fetch gmail from localStorage
  useEffect(() => {
    if (localStorage.getItem("gmail") != null) {
      const mail = (localStorage.getItem("gmail"));
      setEmail(mail)
    }
  }, [localStorage.getItem("gmail")])

  //To fetch useDetails from localStorage
  useEffect(() => {
    if (!userData) {
      const data = localStorage.getItem("userDetails");
      if(data){
       setUserData(JSON.parse(data)) 
      }
    }
  }, [(localStorage.getItem("userDetails"))])

  //To fetch role of the user from localStorage
  useEffect(() => {
    const Role = localStorage.getItem("role");
    setRole(Role)
  }, [localStorage.getItem("role")])

  // if (isLoggedIn) {
  //   console.log("LoggedIn")
  //   const data = localStorage.getItem("userDetails");
  //   if (!data) {
  //     try {
  //       async function profileDetail() {
  //         console.log("User Email", email);
  //         const response = await axiosInstance.post('http://localhost:3000/user/profile',
  //           { email },
  //           {
  //             headers: {
  //               'Content-Type': 'application/json'
  //             }
  //           }
  //         );
  //         let userDetails = JSON.stringify(response.data.userDetails);
  //         console.log("User Profile Details", userDetails);
  //         localStorage.setItem("userDetails", userDetails);
  //       }
  //       profileDetail();
  //     } catch (error) {
  //       console.error("Error in fetching user profile details", error.message)
  //     }
  //   }else{
  //     if(!userData){
  //       let parsedData = JSON.parse(data);
  //     setUserData(parsedData);
  //     }
  //   }
  // }

  return (
    <>
      <header>
        <nav className="navbar main">
          <div id="logo">
            <Link to="/" className="book">
              Books.Rent
            </Link>
          </div>
          <div className="nav-links">
            <Categories />
            {isLoggedIn && (
              <Link to="/Wishlist">
                <p>Wishlist</p>
              </Link>
            )}
            <FormDropDown />
            {role == "admin" && (
              <AdminPanel />
            )}
            <Link>
              <p className="about">About Us</p>
            </Link>
            {isLoggedIn && (
              <>
                <p>
                  <Logout />
                </p>
              </>

            )}
          </div>

          <Search />
          {isLoggedIn && (
            <Link className="cart-icon " to="/Cart">
              <IoBagHandleOutline />
            </Link>
          )}

          <div className="nav-menu-btn z-20" onClick={toggleMenu} >
            {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

          </div>
          {isLoggedIn && (
            <>
              <div className={isOpen ? 'hidden' : 'flex items-center max-md:hidden'}>
                <Divider orientation="vertical" className="h-6 w-[1.5px] mx-4 bg-zinc-800" />
                <UserAvatar />
              </div>

            </>

          )}

          <div className={isOpen ? 'flex nav-menu z-10 fixed right-90 top-15 ease-in-out duration-500' : 'hidden nav-menu fixed left-[100%] z-10'}>
            <NavbarMobile />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

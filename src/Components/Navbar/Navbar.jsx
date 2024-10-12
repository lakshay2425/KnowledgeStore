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
import { useDispatch } from 'react-redux';
import { setUserDetails } from "../../../features/userDetailsSlice";


var Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === "true");
  //console.log(sessionStorage.getItem("isLoggedIn"));
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");
  }, [sessionStorage.getItem("isLoggedIn")]);
  //console.log(isLoggedIn, "State variable")

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setRole(sessionStorage.getItem("role"))
  }, [sessionStorage.getItem("role")])

  // Account
  const [email, setEmail] = useState(sessionStorage.getItem("gmail"));
  const [details, setDetails] = useState(null);
  if (isLoggedIn) {


    useEffect(() => {
      const storedEmail = sessionStorage.getItem("gmail");
      if (storedEmail !== email) {
        setEmail(storedEmail);
      }
    }, [sessionStorage.getItem("gmail")]);

    useEffect(() => {
      async function profileDetail() {
        try {
          const response = await axiosInstance.post('http://localhost:3000/user/profile', { email }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          // console.log(response.data, "User Profile Details");
          setDetails(response.data);
        } catch (error) {
          console.error("Error in fetching user profile details", error.message);
        }
      }
      if (email) {
        profileDetail();
      }
      dispatch(setUserDetails(details))
      console.log(details);
    }, [email]);
    
    
  }



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
              <Divider orientation="vertical" className="h-6 w-[1.5px] mx-4 bg-zinc-800" />
              <UserAvatar user={details} />
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

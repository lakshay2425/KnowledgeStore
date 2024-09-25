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

var Navbar = () => {
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
          </div>
          {isLoggedIn && (
            <Logout />
          )}
          <Search />
          {isLoggedIn && (
            <Link className="cart-icon " to="/Cart">
              <IoBagHandleOutline />
            </Link>
          )}

          <div className="nav-menu-btn z-20" onClick={toggleMenu} >
            {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

          </div>
          <div className={isOpen ? 'flex nav-menu z-10 fixed right-90 top-15 ease-in-out duration-500' : 'hidden nav-menu fixed left-[100%] z-10'}>
            <NavbarMobile />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

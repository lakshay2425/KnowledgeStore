/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoBagHandleOutline } from "react-icons/io5";
import NavbarMobile from "./NavbarMobile";
import Search from "./Search";
import Categories from "./Categories";
import FormDropDown from "./formDropDown";
import AdminPanel from "./adminPanel";
import { useSelector } from 'react-redux';
import Logout from "./Logout";

var  Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.admin);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
            <Categories/>
            {isLoggedIn &&(
              <Link to= "/Wishlist">
              <p>Wishlist</p>
              </Link>
            )} 
            <FormDropDown/>
            {isAdmin && (
              <AdminPanel/>
            )}
            <Link>
              <p className="about">About Us</p>
            </Link>
          </div>
          {isLoggedIn && (
            <Logout/>
          )}
          <Search/>
          {isLoggedIn && (
            <Link className="cart-icon " to="/Cart">
              <IoBagHandleOutline />
            </Link>
          )}
          <div className="nav-menu-btn z-40" onClick={toggleMenu} >
            {isOpen ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
            
          </div>
          <div className={isOpen ? 'flex nav-menu z-10 fixed right-90 top-15 ease-in-out duration-500' : 'hidden nav-menu fixed left-[100%] z-10'}>
            <NavbarMobile/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

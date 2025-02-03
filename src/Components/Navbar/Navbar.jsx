/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarMobile from "./NavbarMobile";
import Search from "./Search";
import Categories from "./Categories";
import FormDropDown from "./formDropDown";
import AdminPanel from "./adminPanel";
import Logout from "./Logout";
import UserAvatar from "./UserAvatar";
import { Divider } from "@nextui-org/divider";


var Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState((localStorage.getItem("role")));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //To fetch isLoggedIn value from localStorage
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [localStorage.getItem("isLoggedIn")]);


  //To fetch role of the user from localStorage
  useEffect(() => {
    const Role = localStorage.getItem("role");
    setRole(Role)
  }, [localStorage.getItem("role")])



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
            <FormDropDown />
            {role == "admin" && (
              <AdminPanel />
            )}
            {isLoggedIn && (
              <>
                <p>
                  <Logout />
                </p>
              </>

            )}
          </div>

          <Search />

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

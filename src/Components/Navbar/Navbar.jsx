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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem
} from "@nextui-org/react";

var  Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link>
              <p href="/" className="book">
                Books
              </p>
            </Link>            
            <Categories/>
            <Link>
              <p>Wishlist</p>
            </Link>
            {/* &nbsp; */}   
            <FormDropDown/>
            <AdminPanel/>
            <Link>
              <p className="about">About Us</p>
            </Link>
          </div>
          <Search/>
          <Link className="cart-icon " to="/Cart">
            <IoBagHandleOutline />
          </Link>

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

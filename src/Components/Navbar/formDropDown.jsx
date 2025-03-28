/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem
} from "@nextui-org/react";


const FormDropDown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [localStorage.getItem("isLoggedIn")]);

  return (
    <>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button variant="" className="nav-btn px-1 w-full justify-start">
            <p className="nav-menu-link">{isLoggedIn ? "Forms" : "Login/Signup"}</p>
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">

          {(!(isLoggedIn)) && (
            <DropdownItem key="login">
              <Link className="dropdown-item" to="/Login">
                Login
              </Link>
            </DropdownItem>
          )}
          {(!(isLoggedIn)) && (
            <DropdownItem key="signup">
              <Link className="dropdown-item" to="/Signup">
                Signup
              </Link>
            </DropdownItem>
          )}
          {isLoggedIn && (
            <DropdownItem key="feedback">
              <Link className="dropdown-item" to="/feedback">
                Feedback
              </Link>
            </DropdownItem>
          )}
          {isLoggedIn && (
            <DropdownItem key="suggestion">
              <Link className="dropdown-item" to="/suggestion">
                Suggestion
              </Link>
            </DropdownItem>
          )}
          {isLoggedIn && (
            <DropdownItem key="contact">
              <Link className="dropdown-item" to="/Contact">
                Contact
              </Link>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default FormDropDown;

/* eslint-disable no-unused-vars */
import React from "react";
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
  return (
    <>
                  <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className="nav-btn">
                  <p>Contact Us</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="login">
                  <Link className="dropdown-item" to="/Login">
                    Login
                  </Link>
                </DropdownItem>
                <DropdownItem key="signup">
                  <Link className="dropdown-item" to="/Signup">
                    Signup
                  </Link>
                </DropdownItem>
                <DropdownItem key="feedback">
                  <Link className="dropdown-item" to="/feedback">
                    Feedback
                  </Link>
                </DropdownItem>
                <DropdownItem key="suggestion">
                  <Link className="dropdown-item" to="/suggestion">
                    Suggestion
                  </Link>
                </DropdownItem>

                <DropdownItem
                  key="contact">
                  <Link className="dropdown-item" to="/Contact">
                    Contact
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </>
  )
}

export default FormDropDown;

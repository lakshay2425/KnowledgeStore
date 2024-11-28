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

const Categories = () => {
  return (
    <>
      <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className="nav-bnav-btn px-1 w-full justify-start">
                  <p className="nav-menu-link" >Categories</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="finance">
                  <Link className="dropdown-item" to="/Finance">
                    Finance
                  </Link>
                </DropdownItem>
                <DropdownItem key="skillbased">
                  <Link className="dropdown-item" to="/Skill-based">
                    Skill-Based
                  </Link>
                </DropdownItem>
                <DropdownItem key="biography">
                  <Link className="dropdown-item" to="/Biography">
                    Biography
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="dropdown-item" to="/Self-Help">
                    Self-Help
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="Fictional"
                  className="text-danger"
                  color="danger"
                >
                  <Link className="dropdown-item" to="/Fictional">
                    Fictional
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </>
  )
}

export default Categories


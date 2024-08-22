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


const AdminPanel = () => {
  return (
    <>
      <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className="nav-btn">
                  <p>Admin</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="create">
                  <Link className="dropdown-item" to="/Create">
                    Create
                  </Link>
                </DropdownItem>
                <DropdownItem key="read">
                  <Link className="dropdown-item" to="/Read">
                    Read
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </>
  )
}

export default AdminPanel;

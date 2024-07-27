/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownSection,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { SearchIcon } from "./utils/SearchIcon";
import { IoBagHandleOutline } from "react-icons/io5";
import NavbarMobile from "./NavbarMobile";


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
              <p href="/" className="">
                Books
              </p>
            </Link>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className="nav-btn">
                  <p>Categories</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="finance">
                  <Link className="dropdown-item" to="/Finance">
                    Finance
                  </Link>
                </DropdownItem>
                <DropdownItem key="skillbased">
                  <Link className="dropdown-item" to="/SkillBased">
                    Skill-Based
                  </Link>
                </DropdownItem>
                <DropdownItem key="biography">
                  <Link className="dropdown-item" to="/Biography">
                    Biography
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className="dropdown-item" to="/SelfHelp">
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
            <Link>
              <p>Wishlist</p>
            </Link>
            {/* &nbsp; */}
           
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
                  key="contact"
                >
                  <Link className="dropdown-item" to="/Contact">
                    Contact
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link>
              <p className="about">About Us</p>
            </Link>
          </div>
          <div className="search">
            <Input
              isClearable
              type="test"
              // label="Search"
              variant="underlined"
              placeholder="Search For Books!"
              defaultValue=""
              // onClear={() => console.log("input cleared")}
              startContent=<SearchIcon />
              className="w-42 h-10 "
            />
            
          </div>
          <Link className="cart-icon " to="/Cart">
            <IoBagHandleOutline />
          </Link>

          <div className="nav-menu-btn z-20" onClick={toggleMenu} >
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

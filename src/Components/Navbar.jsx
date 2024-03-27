import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Dropdown, DropdownTrigger, DropdownMenu, Button, DropdownSection, DropdownItem, Input } from "@nextui-org/react";
import {SearchIcon} from "./utils/SearchIcon";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <div id="logo"><Link to="/">Books.Rent</Link></div>


          <div className="nav-links">
            <Link><p href="/" className="">Books</p></Link>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className='nav-btn'>
                  <p>Categories</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="new"><Link className="dropdown-item" to="/Finance">Finance</Link></DropdownItem>
                <DropdownItem key="copy"><Link className="dropdown-item" to="/SkillBased">Skill-Based</Link></DropdownItem>
                <DropdownItem key="edit"><Link className="dropdown-item" to="/Biography">Biography</Link></DropdownItem>
                <DropdownItem ><Link className="dropdown-item" to="/SelfHelp">Self-Help</Link></DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                <Link className="dropdown-item" to="/Fictional">Fictional</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            

            <Link><p>Wishlist</p></Link>&nbsp;
            <Link><p>About Us</p></Link>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className='nav-btn'>
                <p>Ways to Contact</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="new"><Link className="dropdown-item" to="/Login"><p>Login</p></Link></DropdownItem>
                <DropdownItem key="copy"><Link className="dropdown-item" to="/Signup"><p>Signup</p></Link></DropdownItem>
                <DropdownItem key="edit"><Link className="dropdown-item" to="/feedback"><p>Feedback</p></Link></DropdownItem>
                <DropdownItem key="edit"><Link className="dropdown-item" to="/suggestion"><p>Suggestion</p></Link></DropdownItem>

                <DropdownItem key="delete" className="text-danger" color="danger">
                <Link className="dropdown-item" to="/Contact"><p>Contact</p></Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
          </div>
          <div>
          <Input
              isClearable
              type="test"
              // label="Search"
              variant="underlined"
              placeholder="Search For Books!"
              defaultValue=""
              onClear={() => console.log("input cleared")}
              startContent = <SearchIcon/>
              className="w-42 h-10 "
            />
          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar

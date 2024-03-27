import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Dropdown, DropdownTrigger, DropdownMenu, Button, DropdownSection, DropdownItem, Input } from "@nextui-org/react";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <div id="logo">Books.Rent</div>


          <div className="nav-links">
            <a href="/" className="">
              Books
            </a>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className='nav-btn'>
                  Categories
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
            

            <a><Link>Wishlist</Link></a>
            <a><Link>About Us</Link></a>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="" className='nav-btn'>
                Ways to Contact
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="new"><Link className="dropdown-item" to="/Login">Login</Link></DropdownItem>
                <DropdownItem key="copy"><Link className="dropdown-item" to="/Signup">Signup</Link></DropdownItem>
                <DropdownItem key="edit"><Link className="dropdown-item" to="/feedback">Feedback</Link></DropdownItem>
                <DropdownItem key="edit"><Link className="dropdown-item" to="/suggestion">Suggestion</Link></DropdownItem>

                <DropdownItem key="delete" className="text-danger" color="danger">
                <Link className="dropdown-item" to="/Contact">Contact</Link>
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
              className="w-42 h-10 "
            />
          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
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
                <Button variant="bordered">
                  Categories
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="new">Finance</DropdownItem>
                <DropdownItem key="copy">Skill-Based</DropdownItem>
                <DropdownItem key="edit">Biography</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                <Link className="dropdown-item" to="/Fictional">Fictional</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <a><Link>Wishlist</Link></a>
            <a><Link>About Us</Link></a>
            
          </div>
          <div>
          <Input
              isClearable
              type="test"
              // label="Search"
              variant="bordered"
              placeholder="Search For Books!"
              defaultValue=""
              onClear={() => console.log("input cleared")}
              className="w-42 h-10"
            />
          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar

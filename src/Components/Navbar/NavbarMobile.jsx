import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    Button,
    DropdownSection,
    DropdownItem,
    Input,
} from "@nextui-org/react";
import { SearchIcon } from "../utils/SearchIcon";
import { IoBagHandleOutline } from "react-icons/io5";

import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper } from "../Others/ListboxWrapper";
function NavbarMobile() {


    return (
        <ListboxWrapper>
            <Listbox variant="faded" aria-label="Listbox menu with icons">
                <ListboxItem
                    key="new"

                >
                    <Link>
                        <Button variant="" className="nav-btn px-1">
                            <p href="/" className="nav-menu-link">
                                Books
                            </p>
                        </Button>

                    </Link>
                </ListboxItem>
                <ListboxItem
                    key="copy"

                >
                    <Dropdown backdrop="">
                        <DropdownTrigger>
                            <Button variant="" className="nav-btn px-1 w-full justify-start">
                                <p className="nav-menu-link">Categories</p>
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
                </ListboxItem>
                <ListboxItem
                    key="Wishlist"
                    

                >
                    <Link>
                        <Button variant="" className="nav-btn px-1 w-full justify-start">
                            <p className="nav-menu-link">Wishlist</p>
                        </Button>

                    </Link>
                </ListboxItem>
                <ListboxItem
                    key="delete"
                    className="text-danger"
                    color="danger"

                >
                    <Dropdown backdrop="">
                        <DropdownTrigger>
                            <Button variant="" className="nav-btn px-1 w-full justify-start">
                                <p className="nav-menu-link">Contact Us</p>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="flat" aria-label="Static Actions">
                            <DropdownItem key="login" to="/Login">
                                <Link className="dropdown-item" to="/Login">
                                    Login
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="signup" to="/Signup">
                                <Link className="dropdown-item" to="/Signup">
                                    Signup
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="feedback" to="/feedback">
                                <Link className="dropdown-item" to="/feedback">
                                    Feedback
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="suggestion" to="/suggestion">
                                <Link className="dropdown-item" to="/suggestion">
                                    Suggestion
                                </Link>
                            </DropdownItem>

                            <DropdownItem
                                key="contact"
                                to="/Contact">
                                <Link className="dropdown-item" to="/Contact">
                                    Contact
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </ListboxItem>
                <ListboxItem>
                    <Link>
                    <Button variant="" className="nav-btn px-1 w-full justify-start">
                            <p className="nav-menu-link">About Us</p>
                        </Button>
                        
                    </Link>
                </ListboxItem>
                <ListboxItem>
                   
                        <Input
                            isClearable
                            type="test"
                            // label="Search"
                            variant="underlined"
                            placeholder="Search For Books!"
                            
                            onClear={() => console.log("input cleared")}
                            startContent=<SearchIcon />
                            classNames={""}
                        />

                    
                </ListboxItem>

            </Listbox>
        </ListboxWrapper>
    )
}

export default NavbarMobile
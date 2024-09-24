import React from 'react'
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
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../Others/ListboxWrapper";
import Search from "./Search";
import Categories from "./Categories";
import FormDropDown from "./formDropDown";
import AdminPanel from "./adminPanel";
import Logout from "./Logout";

function NavbarMobile() {


    return (
        <ListboxWrapper>
            <Listbox variant="faded" aria-label="Listbox menu with icons">
                <ListboxItem>
                    <Link>
                        <Button variant="" className="nav-btn px-1">
                            <p href="/" className="nav-menu-link">
                                Books
                            </p>
                        </Button>

                    </Link>
                </ListboxItem>
                <ListboxItem className="nav-menu-link">
                <p href="/" className="nav-menu-link">
                                <Categories />
                            </p>
                    
                </ListboxItem>


                <ListboxItem>
                    <Link>
                        <Button variant="" className="nav-btn px-1 w-full justify-start">
                            <p className="nav-menu-link">Wishlist</p>
                        </Button>

                    </Link>
                </ListboxItem>
                <ListboxItem>
                    <FormDropDown />
                </ListboxItem>
                <ListboxItem>
                    <AdminPanel />
                </ListboxItem>


                <ListboxItem>
                    <Link>
                        <Button variant="" className="nav-btn px-1 w-full justify-start">
                            <p className="nav-menu-link">About Us</p>
                        </Button>

                    </Link>
                </ListboxItem>
                <ListboxItem>
                    <Logout />
                </ListboxItem>
                <ListboxItem>
                    <Search />
                </ListboxItem>



            </Listbox>
        </ListboxWrapper>
    )
}

export default NavbarMobile
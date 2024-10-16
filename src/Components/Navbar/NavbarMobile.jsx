import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../Others/ListboxWrapper";
import Search from "./Search";
import Categories from "./Categories";
import FormDropDown from "./formDropDown";
import AdminPanel from "./adminPanel";
import Logout from "./Logout";
import UserAvatar from './UserAvatar';

function NavbarMobile() {
    const [role, setRole] = useState(localStorage.getItem("role"));
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    //To update isLoggedIn value based on localStorage
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }, [localStorage.getItem("isLoggedIn")]);
    //console.log(isLoggedIn, "State variable")

    //TO update role value based on localStorage
    useEffect(() => {
        setRole(localStorage.getItem("role"))
    }, [localStorage.getItem("role")])


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
                    {isLoggedIn && (
                        <ListboxItem
                            key="Wishlist"
                        >
                            <Link>
                                <Button variant="" className="nav-btn px-1 w-full justify-start">
                                    <p className="nav-menu-link">Wishlist</p>
                                </Button>

                            </Link>
                        </ListboxItem>
                    )}
                </ListboxItem>

                <ListboxItem>
                    <FormDropDown />
                </ListboxItem>

                <ListboxItem>
                    {role === "admin" && (
                        <AdminPanel />
                    )}
                </ListboxItem>


                <ListboxItem>
                    <Link>
                        <Button variant="" className="nav-btn px-1 w-full justify-start">
                            <p className="nav-menu-link">About Us</p>
                        </Button>

                    </Link>
                </ListboxItem>
                <ListboxItem>
                {isLoggedIn && (
                        <UserAvatar/>
                    )}
                </ListboxItem>

                <ListboxItem>
                    {isLoggedIn && (
                        <Logout />
                    )}
                </ListboxItem>
                <ListboxItem>
                    <Search />
                </ListboxItem>

            </Listbox>
        </ListboxWrapper>
    )
}

export default NavbarMobile
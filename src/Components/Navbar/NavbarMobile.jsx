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

function NavbarMobile() {
    const [role, setRole] = useState(sessionStorage.getItem("role"));
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === "true");
    //console.log(sessionStorage.getItem("isLoggedIn"));

        //TO update isLoggedIn value based on sessionStorage
    useEffect(() => {
      setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");
    }, [sessionStorage.getItem("isLoggedIn")]);
    //console.log(isLoggedIn, "State variable")

    //TO update role value based on sessionStorage
    useEffect(() => {
        setRole(sessionStorage.getItem("role"))
      }, [sessionStorage.getItem("role")])
   

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
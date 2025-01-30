import { User } from "@nextui-org/react";
import {  Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserAvatar() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");

  //To update fullName from localStorage
  useEffect(() => {
    const name = localStorage.getItem("fullName");
    if (name) {
      setFullName(name);
    }
  }, [(localStorage.getItem("fullName"))])

  //To update username from localStorage
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUserName(username);
    }
  }, [(localStorage.getItem("username"))])


  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }
  return (
    //<Dropdown>
    //  <DropdownTrigger className="p-6">
        <Button variant="flat" className="py-6" onClick={navigateToProfile}>
          <User
            name={fullName}
            description={userName} 
          />
        </Button>
    //  </DropdownTrigger>
    //</Dropdown>

  );
}
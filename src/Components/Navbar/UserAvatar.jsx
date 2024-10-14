import { User, Link } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
// import { Link as Navigate } from "react-router-dom";
import { useState } from "react";

export default function UserAvatar() {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const[data, setData] = useState(user);
  return (
    <Dropdown>
      <DropdownTrigger className="p-6">
        <Button
          variant=""
          className=""
        >
          
          <User
            // name={user.details.userDetails.fullName}
            description={(
              <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                {/* {user.details.userDetails.username} */}
              </Link>
            )}
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="Profile">
          <Button className="w-full ">
            
          </Button>
        </DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

  );
}
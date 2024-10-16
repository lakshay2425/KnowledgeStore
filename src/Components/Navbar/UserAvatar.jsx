import { User, Link } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserAvatar() {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const[data, setData] = useState(user);
  // console.log(data)

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }

  return (
    <Dropdown>
      <DropdownTrigger className="p-6">
        <Button
          variant=""
          className=""
        >
          
          <User
            name={data.fullName}
            description={(
              <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                {user.username}
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
          <Button className="w-full " onClick={navigateToProfile}>
            Profile
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
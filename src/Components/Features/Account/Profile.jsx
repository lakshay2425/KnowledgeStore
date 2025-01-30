import { useState, useEffect } from "react";
import UserSection from './UserSection';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';

function Profile() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [gmail, setGmail] = useState('');
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

    //To update fullName from localStorage
    useEffect(() => {
        const Gmail = localStorage.getItem("gmail");
        if (Gmail) {
          setGmail(Gmail);
        }
      }, [(localStorage.getItem("gmail"))])

    return (
        <div className="w-full h-auto bg-[#F6F6F6] overflow-hidden">
            <h1 className="font-medium text-xl md:text-3xl p-4 text-center md:text-left">Account Setting</h1>
            <div className="bg-white mx-2 md:mx-5 my-2 w-[98%] h-auto md:h-[90%] flex flex-col md:flex-row">
                <Sidebar />
                <div className="w-full h-full capitalize">
                    <h1 className="px-4 md:px-10 py-4 text-xl md:text-2xl font-medium">My Profile</h1>
                    <UserSection title="Personal Information">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-48">
                            <UserInfo label="Full Name" value={fullName} />
                            <UserInfo label="Username" value={userName} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-32">
                            <UserInfo label="Email" value={gmail} />
                        </div>
                    </UserSection>
                    <UserSection title="Address">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-48">
                            <UserInfo label="Country" value={"India"} />
                            <UserInfo label="City" value={ "Delhi"} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-52">
                            <UserInfo label="Postal Code" value={ "110086"} />
                        </div>
                    </UserSection>
                </div>
            </div>
        </div>
    );
}

export default Profile;
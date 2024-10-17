import React, { useState, useEffect } from "react";
import UserSection from './UserSection';
import ProfileSection from './ProfileSection';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';

function Profile() {
    const [data, setData] = useState((localStorage.getItem("userDetails")));

    //To update useDetails from localStorage
    useEffect(() => {
        if (data) {
            const userData = JSON.parse(localStorage.getItem("userDetails"));
            setData(userData);
            //console.log(userData)
        }
    }, [(localStorage.getItem("userDetails"))])

    return (
        <div className="w-full h-auto bg-[#F6F6F6] overflow-hidden">
            <h1 className="font-medium text-xl md:text-3xl p-4 text-center md:text-left">Account Setting</h1>
            <div className="bg-white mx-2 md:mx-5 my-2 w-[98%] h-auto md:h-[90%] flex flex-col md:flex-row">
                <Sidebar />
                <div className="w-full h-full capitalize">
                    <h1 className="px-4 md:px-10 py-4 text-xl md:text-2xl font-medium">My Profile</h1>
                    <ProfileSection data={data} />
                    <UserSection title="Personal Information">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-48">
                            <UserInfo label="First Name" value={data.fullName} />
                            <UserInfo label="Username" value={data.username} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-32">
                            <UserInfo label="Email" value={data.emailId} />
                            <UserInfo label="Phone" value={data.contactNumber} />
                        </div>
                        <div className="px-4 md:px-6 py-2 md:py-3">
                            <h1 className="text-zinc-600">Bio</h1>
                            <p>{data?.status || "Single"}</p>
                        </div>
                    </UserSection>
                    <UserSection title="Address">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-48">
                            <UserInfo label="Country" value={data?.country || "India"} />
                            <UserInfo label="City" value={data?.city || "Delhi"} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-52">
                            <UserInfo label="Postal Code" value={data?.postalcode || "110086"} />
                            {/* <UserInfo label="Tax ID" value={data.taxid} /> */}
                        </div>
                    </UserSection>
                </div>
            </div>
        </div>
    );
}

export default Profile;
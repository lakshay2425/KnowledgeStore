import React from "react";
import { RiEdit2Line } from "react-icons/ri";
const Sidebar = () => {
  const menuItems = [
    "My profile",
    "Security",
    "Teams",
    "Team member",
    "Notifications",
    "Billing",
    "Data export",
  ];
  return (
    <ul className="bg-slate-200/60 w-full md:w-48 lg:w-64 h-auto px-4 md:px-6 lg:px-8 py-6 text-zinc-600 text-base md:text-lg capitalize">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="list-none hover:bg-sky-200 rounded-full pl-4 md:pl-5 py-2 md:py-3 hover:text-blue-500 hover:font-medium duration-500"
        >
          <a href="#">{item}</a>
        </li>
      ))}
      <li className="text-red-600 list-none hover:bg-white rounded-full pl-4 py-3 hover:font-medium w-full md:w-40 mt-9">
        <a href="#">Delete Account</a>
      </li>
    </ul>
  );
};

const UserInfo = ({ label, value }) => (
  <div className="px-4 md:px-6 py-2 md:py-3">
    <h1 className="text-zinc-600">{label}</h1>
    <p>{value}</p>
  </div>
);

const ProfileSection = ({ data }) => (
  <div className="w-full md:w-[96%] h-auto md:h-44 bg-white/10 mx-4 md:mx-8 rounded-lg flex flex-col md:flex-row border-2 border-gray-500/30">
    <img
      src={data.srclink}
      alt={data.name}
      className="object-cover w-full md:w-48 h-48 md:h-full p-4 md:p-8 rounded-full self-center md:self-auto"
    />
    <div className="py-4 md:py-9 w-full md:w-[70%] text-center md:text-left">
      <h2 className="text-xl md:text-3xl font-bold">{data.name}</h2>
      <p className="text-gray-800 py-2 font-medium">{data.status}</p>
      <p className="text-gray-600">{data.Address}</p>
    </div>
    <button className="flex gap-1 mx-auto md:ml-14 my-4 md:my-16 px-4 md:px-5 py-2 md:py-3 rounded-3xl border-2 border-zinc-500/30 text-zinc-800 hover:bg-slate-400 duration-700">
      Edit <RiEdit2Line className="text-lg" />
    </button>
  </div>
);

const UserSection = ({ title, children }) => (
  <div className="w-full md:w-[96%] h-auto bg-white/10 mx-4 md:mx-8 my-4 rounded-2xl py-4 md:py-3 border-2 border-gray-500/30">
    <div className="flex flex-col md:flex-row h-auto justify-between items-center px-4 md:px-4 py-3">
      <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
      <button className="flex gap-1 px-4 md:px-5 h-10 md:h-12 py-2 md:py-3 rounded-3xl border-2 border-zinc-500/30 text-zinc-800 hover:bg-slate-400 duration-700 mt-2 md:mt-0">
        Edit <RiEdit2Line className="text-lg" />
      </button>
    </div>
    {children}
  </div>
);

const Userpage = ({ data }) => {
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
              <UserInfo label="First Name" value={data.firstname} />
              <UserInfo label="Last Name" value={data.lastname} />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-32">
              <UserInfo label="Email" value={data.Email} />
              <UserInfo label="Phone" value={data.phone} />
            </div>
            <div className="px-4 md:px-6 py-2 md:py-3">
              <h1 className="text-zinc-600">Bio</h1>
              <p>{data.status}</p>
            </div>
          </UserSection>
          <UserSection title="Address">
            <div className="flex flex-col md:flex-row gap-4 md:gap-48">
              <UserInfo label="Country" value={data.country} />
              <UserInfo label="City" value={data.city} />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-52">
              <UserInfo label="Postal Code" value={data.postalcode} />
              <UserInfo label="Tax ID" value={data.taxid} />
            </div>
          </UserSection>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
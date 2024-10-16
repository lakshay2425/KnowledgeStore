import React from 'react'
import { RiEdit2Line } from "react-icons/ri";


const ProfileSection = ({ data }) => (

    <div className="w-full md:w-[96%] h-auto md:h-44 bg-white/10 mx-4 md:mx-8 rounded-lg flex flex-col md:flex-row border-2 border-gray-500/30">
        <img
            src={data.srclink}
            alt={data.fullName}
            className="object-cover w-full md:w-48 h-48 md:h-full p-4 md:p-8 rounded-full self-center md:self-auto"
        />
        <div className="py-4 md:py-9 w-full md:w-[70%] text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold">{data.fullName}</h2>
            <p className="text-gray-800 py-2 font-medium">{data.status}</p>
            <p className="text-gray-600">{data.Address}</p>
        </div>
        <button className="flex gap-1 mx-auto md:ml-14 my-4 md:my-16 px-4 md:px-5 py-2 md:py-3 rounded-3xl border-2 border-zinc-500/30 text-zinc-800 hover:bg-slate-400 duration-700">
            Edit <RiEdit2Line className="text-lg" />
        </button>
    </div>
);

export default ProfileSection;
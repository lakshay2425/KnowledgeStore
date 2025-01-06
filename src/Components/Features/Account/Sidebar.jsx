import React from 'react'
import DeleteUser from './DeleteUser';

const Sidebar = () => {
    const menuItems = [
        {pathName : "My profile", path : "/Profile"},
        {pathName : "Orders" , path : "/Account/Orders"},
        {pathName : "Wishlist" , path : "/Wishlist"},
        {pathName : "Tracking" , path : "/Account/Tracking"},
    ];
    return (
        <ul className="bg-slate-200/60 w-full md:w-48 lg:w-64 h-auto px-4 md:px-6 lg:px-8 py-6 text-zinc-600 text-base md:text-lg capitalize">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className="list-none hover:bg-sky-200 rounded-full pl-4 md:pl-5 py-2 md:py-3 hover:text-blue-500 hover:font-medium duration-500"
                >
                    <a href= {item.path}>{item.pathName}</a>
                </li>
            ))}
            <li className='list-none rounded-full pl-4 hover:font-medium duration-500 md:pl-5 py-2 md:py-3 text-base md:text-lg capitalize'>
                <DeleteUser/>
            </li>
            
        </ul>
    );
};

export default Sidebar;
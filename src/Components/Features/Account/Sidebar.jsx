import React from 'react'

const Sidebar = () => {
    const menuItems = [
        "My profile",
        "Wishlist",
        "Orders"
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

export default Sidebar
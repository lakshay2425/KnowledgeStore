import React from 'react';
import FetchData from './FetchData';
import './BestSellers.css'
import { useRef } from 'react';
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";


const BestSeller = () => {
    const ApiUrl = 'http://localhost/Programs/BookRental/FetchData.php';
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 630; // Adjust the scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 630; // Adjust the scroll amount as needed
        }
    };

    return <>
        <div className="best-seller-container">
            <div className='flex pt-12 pb-4 justify-between'>
                <h1 className="text-zinc-800 text-3xl text font-bold w-min">Bestsellers</h1>
            <div className='text-2xl flex gap-2 w-max max-sm:hidden'>
                <button className="flex items-center justify-center rounded-full  w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out hover:scale-125 duration-300" onClick={scrollLeft}><FaCaretLeft /></button>
                <button className="flex items-center justify-center rounded-full w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out  hover:scale-125 duration-300" onClick={scrollRight}><FaCaretRight /></button>
            </div>
            </div>
            
            <div ref={containerRef} className="product-show product-container z-10">
                <FetchData apiUrl={ApiUrl} />
            </div>
        </div>

    </>
};

export default BestSeller;

import React, { useEffect } from 'react';
import './BestSellers.css'
import ProductCard from '../utils/ProductCard';
import { useSelector} from 'react-redux';
import CallAPI from '../utils/CallAPI';
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
import { useRef } from 'react';

const BestSeller = () => {
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
  CallAPI();
    const bookInfo = useSelector((state)=> state.book?.booksInfo || []);
    return <>
    <div className="best-seller-container">
        
            <div className='flex pt-12 pb-4 justify-between'>
                <h1 className="text-zinc-800 text-3xl text font-bold ">All Books</h1>
            <div className='text-2xl flex gap-2 w-max max-sm:hidden'>
                <button className="flex items-center justify-center rounded-full  w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out hover:scale-125 duration-300" onClick={scrollLeft}><FaCaretLeft /></button>
                <button className="flex items-center justify-center rounded-full w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out  hover:scale-125 duration-300" onClick={scrollRight}><FaCaretRight /></button>
            </div>
            </div>
        
        <div ref={containerRef} className="product-show product-container">
           <ProductCard books={bookInfo}/>
        </div>
    </div>
    
    </>
};

export default BestSeller;

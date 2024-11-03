import React from 'react'
import { useLocation } from 'react-router-dom';
import ProductCard from '../utils/ProductCard';
import { Image } from '@nextui-org/react';
export default function ProductView() {
    let bookData = JSON.parse(localStorage.getItem('selectedBook'));
    console.log(bookData);
    
    if (!bookData) {
        return <div>No book information available.</div>;
    }
    return (
        <div className='h-full w-[90vw] mx-auto pt-10 '>
            <h1 className='text-3xl'>{bookData.title}</h1>
            <div key={bookData._id} className=" w-[90vw] h-full my-10 backdrop-blur-3xl z-30">
              <div className=" w-[90vw] h-full mx-auto my-auto p-auto z-40 backdrop-blur-3xl bg-white/30 rounded-large flex shadow-large max-md:overflow-scroll" >
                
                <div key={bookData.s_no} className='w-full grid grid-cols-7 max-md:grid-rows-2 max-md:grid-cols-1'>

                  <div className='flex items-center justify-center col-span-3 max-md:w-full max-md:'>
                    <Image
                      className="w-auto max-md:w-fit max-md:my-12"
                      alt={bookData.title}
                      src={bookData.imageLink}
                    />

                  </div>
                  <div className='flex-col col-span-4 w-full h-auto mx-auto my-[25%] max-md:p-10 max-md:my-0'>
                    <h2 className='text-4xl leading-relaxed pb-2'>{bookData.title}</h2>
                    <p className='text-xl pb-2'>&#8377;{bookData.price}</p>
                    <p className='pb-2'>{bookData.genres}
                    </p>
                  </div>
                </div>
              </div >
            </div>
        </div>
    )
}

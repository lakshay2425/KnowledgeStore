import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';
import useFilterBooks from '../utils/useFilterBooks';
import { Divider } from '@nextui-org/react';

const SelfHelp = () => {
    CallAPI();
    useFilterBooks("Self-Help")
    const book = useSelector((state) => state.book?.genreBookInfo)
    return (
        <div className="w-[90vw] m-auto p-2">
            <div className='w-full flex pt-12 pb-4 justify-center'>
                <h1 className="text-zinc-800 text-3xl text font-bold ">Self-Help</h1>
            </div>
            <Divider className='mb-6'/>
            <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-3 mb-10 max-xl:grid-cols-4 max-2xl:grid-cols-4">
                <ProductCard books={book} />
            </div>
        </div>
    )
};

export default SelfHelp;

import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'; 
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';
import useFilterBooks from '../utils/useFilterBooks';
import { Divider } from '@nextui-org/react';
import Loader from '../utils/Loader';

const Category = () => {
  const location = useLocation(); 
  const currentPath = location.pathname; 
  const category = currentPath.substring(1); 
  const [loading, setLoading] = useState(true);
  const isBookFetched = useSelector((state) => state.book?.bookFetched);
  CallAPI();
  useFilterBooks(category);
  useEffect(()=>{
    if(isBookFetched){
      setTimeout(()=>{
        setLoading(false)
      }, 3000)
    }
  })
  const book = useSelector((state) => state.book?.genreBookInfo); 
  return (
      loading === true ? (
        <Loader/>
      ) :
      (
        <div className="w-[90vw] m-auto p-2">
      <div className='w-full flex pt-12 pb-4 justify-center'>
        <h1 className="text-zinc-800 text-3xl text font-bold ">{category}</h1>
      </div>
      <Divider className='mb-6' />
      <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-3 mb-10 max-xl:grid-cols-4 max-2xl:grid-cols-4">
        <ProductCard books={book} />
      </div>
    </div>
      )
  )
};

export default Category;

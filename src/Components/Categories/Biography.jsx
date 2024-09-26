import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import  CallAPIConditionally  from '../utils/CallAPIConditionally';

const Biography = () => {
  //CallAPIConditionally();
  const book = useSelector((state)=> state.book?.biographyBookInfo || [])
    return( 
    <div className="product-show">
        <ProductCard books={book}/>
        </div>
    )
};

export default Biography;

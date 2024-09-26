import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import  CallAPIConditionally  from '../utils/CallAPIConditionally';

const Fictional = () => {
    //CallAPIConditionally();
    const book = useSelector((state) => state.book?.fictionalBookInfo || [])
    return (
        <div className="product-show">
            <ProductCard books={book} />
        </div>
    )
};

export default Fictional;

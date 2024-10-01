import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';

const Fictional = () => {
    CallAPI();
    const book = useSelector((state) => state.book?.fictionalBookInfo || [])
    return (
        <div className="product-show">
            <ProductCard books={book} />
        </div>
    )
};

export default Fictional;

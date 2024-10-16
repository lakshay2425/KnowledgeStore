import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';

function Recomended() {
    CallAPI();
    const book = useSelector((state) => state.book?.skillBasedInfo || [])
    return (

        <ProductCard books={book} />
    )
}

export default Recomended;
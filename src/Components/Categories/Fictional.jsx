import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';
import useFilterBooks from '../utils/useFilterBooks';

const Fictional = () => {
    CallAPI();
    useFilterBooks("Fictional");
    const book = useSelector((state) => state.book?.genreBookInfo)
    return (
        <div className="product-show">
            <ProductCard books={book} />
        </div>
    )
};

export default Fictional;

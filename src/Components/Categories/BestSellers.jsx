import React, { useEffect } from 'react';
import './BestSellers.css'
import ProductCard from '../utils/ProductCard';
import { useSelector} from 'react-redux';
import CallAPI from '../utils/CallAPI';

const BestSeller = () => {
  CallAPI();
    const bookInfo = useSelector((state)=> state.book?.booksInfo || []);
    return <>
    <div className="best-seller-container">
        
            <h1 className="best-seller-title">Bestsellers</h1>
        
        <div className="product-show product-container">
           <ProductCard books={bookInfo}/>
        </div>
    </div>
    
    </>
};

export default BestSeller;

import React from 'react';
import FetchData from './FetchData';
import './BestSellers.css'
const BestSeller = () => {
    const ApiUrl = 'http://localhost/Programs/BookRental/FetchData.php';

    return <>
    <div className="best-seller-container">
        
            <h1 className="best-seller-title">Bestsellers</h1>
        
        <div className="product-show product-container">
            <FetchData apiUrl={ApiUrl} />
        </div>
    </div>
    
    </>
};

export default BestSeller;

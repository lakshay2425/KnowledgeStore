// FinancePage.jsx
import React from 'react';
import FetchData from '../BestSellers/FetchData';

const FinancePage = () => {
    const financeApiUrl = 'http://localhost/Programs/BookRental/FetchData.php?genre=Finance';
    return <div className="product-show"><FetchData apiUrl={financeApiUrl} />;</div>
};

export default FinancePage;

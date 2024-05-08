// FinancePage.jsx
import React from 'react';
import FetchData from '../BestSellers/FetchData';

const FinancePage = () => {
    const financeApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Finance';
    return <div className="product-show"><FetchData apiUrl={financeApiUrl} />;</div>
};

export default FinancePage;

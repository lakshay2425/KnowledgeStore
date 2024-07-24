// FinancePage.jsx
import React from 'react';
import FetchData from '../utils/FetchData';

const FinancePage = () => {
    const financeApiUrl = 'http://localhost:3000/books/Finance';
    return <div className="product-show"><FetchData apiUrl={financeApiUrl} />;</div>
};

export default FinancePage;

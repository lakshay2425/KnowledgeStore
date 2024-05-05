// FinancePage.jsx
import React from 'react';
import FetchData from '../BestSellers/FetchData';



const FinancePage = () => {
    const financeApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Finance';

    return <FetchData apiUrl={financeApiUrl} />;
};

export default FinancePage;

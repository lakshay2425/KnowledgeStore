import React from 'react';
import FetchData from './FetchData';

const FinancePage = () => {
    const financeApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php';

    return <FetchData apiUrl={financeApiUrl} />;
};

export default FinancePage;

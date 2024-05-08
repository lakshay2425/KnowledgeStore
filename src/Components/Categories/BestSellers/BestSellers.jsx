import React from 'react';
import FetchData from './FetchData';

const FinancePage = () => {
    const financeApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php';

    return <div className='product-show'><FetchData apiUrl={financeApiUrl} />;</div>
};

export default FinancePage;

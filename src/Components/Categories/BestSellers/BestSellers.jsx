import React from 'react';
import FetchData from './FetchData';

const BestSeller = () => {
    const ApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php';

    return <div className='product-show'><FetchData apiUrl={ApiUrl} />;</div>
};

export default BestSeller;

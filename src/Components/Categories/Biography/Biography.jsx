import React from 'react';
import FetchData from '../BestSellers/FetchData';

const Biography = () => {
    const biographyApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Biography';

    return <div className="product-show"><FetchData apiUrl={biographyApiUrl} />;</div>
};

export default Biography;

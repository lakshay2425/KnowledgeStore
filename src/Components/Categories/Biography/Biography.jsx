import React from 'react';
import FetchData from '../BestSellers/FetchData';

const Biography = () => {
    const biographyApiUrl = 'http://localhost/Programs/bookRental/FetchData.php?genre=Biography';

    return <div className="product-show"><FetchData apiUrl={biographyApiUrl} />;</div>
};

export default Biography;

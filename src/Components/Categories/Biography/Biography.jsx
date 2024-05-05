import React from 'react';
import FetchData from '../BestSellers/FetchData';

const Biography = () => {
    const biographyApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Biography';

    return <FetchData apiUrl={biographyApiUrl} />;
};

export default Biography;

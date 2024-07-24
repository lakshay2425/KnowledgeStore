import React from 'react';
import FetchData from '../utils/FetchData';

const Biography = () => {
    const biographyApiUrl = 'http://localhost:3000/books/Biography';
    return <div className="product-show"><FetchData apiUrl={biographyApiUrl} />;</div>
};

export default Biography;

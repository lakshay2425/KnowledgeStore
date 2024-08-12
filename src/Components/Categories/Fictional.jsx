import React from 'react';
import FetchData from '../utils/FetchData';

const Fictional = () => {
    const fictionalApiUrl = 'http://localhost:3000/books/Fictional';

    return <div className="product-show"><FetchData apiUrl={fictionalApiUrl} />;</div>
};

export default Fictional;

import React from 'react';
import FetchData from '../BestSellers/FetchData';

const Fictional = () => {
    const fictionalApiUrl = 'http://localhost/Programs/bookRental/FetchData.php?genre=Fictional';

    return <div className="product-show"><FetchData apiUrl={fictionalApiUrl} />;</div>
};

export default Fictional;

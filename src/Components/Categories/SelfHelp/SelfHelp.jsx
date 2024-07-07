import React from 'react';
import FetchData from '../BestSellers/FetchData';


const SelfHelp = () => {
    const selfHelpApiUrl = 'http://localhost/Programs/BookRental/FetchData.php?genre=Self-Help';

    return <div className="product-show"><FetchData apiUrl={selfHelpApiUrl} />;</div>
};

export default SelfHelp;

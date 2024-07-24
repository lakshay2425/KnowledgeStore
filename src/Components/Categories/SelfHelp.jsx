import React from 'react';
import FetchData from '../utils/FetchData';


const SelfHelp = () => {
    const selfHelpApiUrl = 'http://localhost:3000/books/Self-Help';

    return <div className="product-show"><FetchData apiUrl={selfHelpApiUrl} />;</div>
};

export default SelfHelp;

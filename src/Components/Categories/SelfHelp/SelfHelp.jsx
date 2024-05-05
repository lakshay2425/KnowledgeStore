import React from 'react';
import FetchData from '../BestSellers/FetchData';


const SelfHelp = () => {
    const selfHelpApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Self-Help';

    return <FetchData apiUrl={selfHelpApiUrl} />;
};

export default SelfHelp;

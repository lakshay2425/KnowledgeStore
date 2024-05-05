import React from 'react';
import FetchData from '../BestSellers/FetchData';

const Fictional = () => {
    const fictionalApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Fictional';

    return <FetchData apiUrl={fictionalApiUrl} />;
};

export default Fictional;

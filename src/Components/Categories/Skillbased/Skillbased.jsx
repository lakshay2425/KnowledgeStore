import React from 'react';
import FetchData from '../BestSellers/FetchData';


const SkillBased = () => {
    const skillBasedApiUrl = 'http://localhost/Programs/Book_rental%20Project/FetchData.php?genre=Skill-based';

    return  <div className="product-show"><FetchData apiUrl={skillBasedApiUrl} />;</div>
};

export default SkillBased;

import React from 'react';
import FetchData from '../BestSellers/FetchData';


const SkillBased = () => {
    const skillBasedApiUrl = 'http://localhost/Programs/bookRental/FetchData.php?genre=Skill-based';

    return  <div className="product-show"><FetchData apiUrl={skillBasedApiUrl} />;</div>
};

export default SkillBased;

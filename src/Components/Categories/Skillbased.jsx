import React from 'react';
import FetchData from '../utils/FetchData';


const SkillBased = () => {
    const skillBasedApiUrl = 'http://localhost:3000/books/Skill-based';

    return  <div className="product-show"><FetchData apiUrl={skillBasedApiUrl} />;</div>
};

export default SkillBased;

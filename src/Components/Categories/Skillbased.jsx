import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPIConditionally  from '../utils/CallAPIConditionally';

const SkillBased = () => {
    //CallAPIConditionally();
    const book = useSelector((state) => state.book?.skillBasedInfo || [])
    return (<div className="product-show">
        <ProductCard books={book} />
    </div>
    )
};

export default SkillBased;

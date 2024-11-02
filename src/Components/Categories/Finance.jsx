// FinancePage.jsx
import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';
import { filterBooks } from '../../../features/bookDetailsSlice';

const FinancePage =  () => {
    CallAPI();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterBooks("Finance"));
    }, [dispatch])
    const book = useSelector((state) => state.book?.genreBookInfo);
    return (
    <div className="product-show">
        <ProductCard books={book}/>
    </div>
    )
};

export default FinancePage;

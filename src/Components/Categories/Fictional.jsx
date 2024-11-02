import React,  {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import CallAPI from '../utils/CallAPI';
import { filterBooks } from '../../../features/bookDetailsSlice';

const Fictional = () => {
    CallAPI();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterBooks("Fictional"));
    }, [dispatch])

    const book = useSelector((state) => state.book?.genreBookInfo)
    return (
        <div className="product-show">
            <ProductCard books={book} />
        </div>
    )
};

export default Fictional;

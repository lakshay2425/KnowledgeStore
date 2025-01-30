import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../utils/ProductCard';
import { fetchRecommendedBooks } from '../../../features/bookDetailsSlice';

function Recomended() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecommendedBooks());
    }, [dispatch])

    const book = useSelector((state) => state.book?.recommendedBooksInfo);
    return (
        <ProductCard books={book} />
    )
}

export default Recomended;
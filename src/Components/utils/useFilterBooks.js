import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { filterBooks } from '../../../features/bookDetailsSlice'; 


const useFilterBooks = (genre) => {
    const [bookFetched, setBookFetched] = useState(false);
    const isBookFetched = useSelector((state) => state.book?.bookFetched);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(isBookFetched){
            setBookFetched(true);
        }
    }, [isBookFetched])

    useEffect(() => {
        if(bookFetched){
            dispatch(filterBooks(genre));
        }
    }, [dispatch, genre,bookFetched]);
};

export default useFilterBooks;
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterBooks } from '../../../features/bookDetailsSlice'; 


const useFilterBooks = (genre) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(filterBooks(genre));
    }, [dispatch, genre]);
};

export default useFilterBooks;
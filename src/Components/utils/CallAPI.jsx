import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../../features/bookDetailsSlice';


const CallAPI = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchBooks());
    }, [dispatch])
}

export default CallAPI


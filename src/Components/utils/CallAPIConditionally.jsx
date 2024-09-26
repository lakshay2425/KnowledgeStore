import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../../features/bookDetailsSlice";

 const CallAPIConditionally = ()=>{
    const [fetched, setFetched] = useState(false);
    const dispatch = useDispatch();

    console.log("API called Conditionally printing fetched value", fetched);
    const fetch = useSelector((state)=>{
        state.book?.fetched
    })
    useEffect(()=>{  
        setFetched(fetch)
    }, [fetch])

    console.log((!(fetched)), "After applying the condition")
    if((!(fetched))){
        useEffect(()=>{
            dispatch(fetchBooks());
          }, [dispatch])
    }
} 

export default CallAPIConditionally
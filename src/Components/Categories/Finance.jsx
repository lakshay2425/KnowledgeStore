// FinancePage.jsx
import React from 'react';
import { useSelector} from 'react-redux';
import ProductCard from '../utils/ProductCard';
// import CallAPIConditionally from '../utils/CallAPIConditionally';
//import CallAPI from '../utils/CallAPI';
const FinancePage =  () => {
    //CallAPIConditionally();
    const loading = useSelector((state)=> state.book?.loading);    
    const fetch = useSelector((state)=> state.book?.fetched);
    // if(fetch == false){
    //     console.log("False from boolean")
    //     CallAPI();
    // }
    const book = useSelector((state) => state.book?.financeBookInfo || [])
    //console.log(book.length, "Length");
    return (
    <div className="product-show">
        <ProductCard books={book}/>
    </div>
    )
};

export default FinancePage;

import { useLocation } from 'react-router-dom';
import ProductCard from '../utils/ProductCard';

const SearchResult = () => {
    const location = useLocation();
    let {book}  = (location.state || {}); // Get the book details from the state
    book = Array(book);
    return (
        <div className='h-screen w-[90vw] mx-auto pt-10 '>
            <h1 className='text-3xl'>Searched Result</h1>
            <div className="product-show">
                
                <ProductCard books={book} />
            </div>
        </div>
    );
};

export default SearchResult;

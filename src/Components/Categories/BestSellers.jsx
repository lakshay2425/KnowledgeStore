import './BestSellers.css'
import ProductCard from '../utils/ProductCard';
import { useSelector } from 'react-redux';
import CallAPI from '../utils/CallAPI';

const BestSeller = () => {
    CallAPI();
    const bookInfo = useSelector((state) => state.book?.booksInfo || []);
    return <>
        <div className="best-seller-container">

            <div className='flex pt-12 pb-4 justify-between'>
                <h1 className="text-zinc-800 text-3xl text font-bold ">All Books</h1>
            </div>

            <div className=" grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-3 mb-10 max-xl:grid-cols-4 max-2xl:grid-cols-4">
                <ProductCard books={bookInfo} />
            </div>
        </div>

    </>
};

export default BestSeller;

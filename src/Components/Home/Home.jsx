import { useRef } from "react";
import "./Home.css";
import BestSellers from "../Categories/BestSellers.jsx";
import Recomended from "../Categories/Recomended.jsx";
import main from './main.png';
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
// import {useSelector} from "react-redux"
// import Loader from "../utils/Loader"

const Home = () => {
  const containerRef = useRef(null);
//  const isFetched = useSelector((state)=> state.book.bookFetched || false)

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 630; // Adjust the scroll amount as needed
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 630; // Adjust the scroll amount as needed
    }
  };
  return (
    // isFetched ? 
    //  (
    //   <Loader/>
    // ) : (
      <>
        <div className="home-section pt-10 max-md:flex-col-reverse">
          <div className="home-title max-md:flex max-md:w-full max-md:text-7xl">
            <div className="home-heading max-md:max-w- ">
              <div className="">
                <p className="">&#10095; Find Your Next Book</p>
              </div>
            </div>
            <div className="home-reading max-md:w-full max-md:leading-normal max-md:text-sm">
              <p>Our most popular and trending <span>On.Book</span> perfect . </p>
              <p>Not sure what to read now next reading mood perfectly .</p>
              <div className="explore">
                <button>Explore Now</button>
              </div>
            </div>
  
  
          </div>
          <div className=" max-md:">
            <img src={main} alt="" sizes="" className="object-cover" />
          </div>
        </div>
        {/* Recomended Section */}
        <div className="w-[90%] mx-auto">
          <div className='flex pt-12 pb-4 justify-between'>
            <h2 className="text-zinc-800 text-3xl text font-bold ">Recomended Books</h2>
            <div className='text-2xl flex gap-2 w-max max-sm:hidden'>
              <button className="flex items-center justify-center rounded-full  w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out hover:scale-125 duration-300" onClick={scrollLeft}><FaCaretLeft /></button>
              <button className="flex items-center justify-center rounded-full w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out  hover:scale-125 duration-300" onClick={scrollRight}><FaCaretRight /></button>
            </div>
          </div>
          <div ref={containerRef} className="w-[90vw] grid grid-flow-col  auto-cols-max	overflow-x-hidden scroll-smooth">
            <Recomended />
          </div>
  
        </div>
        <BestSellers />
      </>
    // ) 
  );
};

export default Home;

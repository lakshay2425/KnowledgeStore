import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
// import ProductPreview from "./ProductPreview";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import axiosInstance from "../utils/Axios";


const ProductCard = ({ books }) => {
  var [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn"));
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState(sessionStorage.getItem("gmail"));
  let [num, setnum] = useState(1);
  var Preview = (id) => {
    setIsOpen(!isOpen);
    setnum(id);
  };
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    // console.log(isLoggedIn);
  }, [sessionStorage.getItem("isLoggedIn")])

  useEffect(() => {
    setEmail(sessionStorage.getItem("gmail"));
  }, [sessionStorage.getItem("gmail")])

  //To disable the button when user isn't loggedIn or book quantity is equal to zero
  useEffect(() => {
    if ((!(isLoggedIn))) {
      setIsDisabled(true);
    }
  }, [isLoggedIn])

  //Function to add book to wishlist
  const handleWishList = async (bookName) => {
    try {
      console.log(bookName);
      const apiUrl = `http://localhost:3000/user/${bookName}/wishlist`;
      const response = await axiosInstance.post(apiUrl, { email: email });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Function to add book to Cart
  const hanldeCart = async (bookName) => {
    try {
      const apiUrl = `http://localhost:3000/user/${bookName}/cart`;
      console.log("Add to cart API called");
      const response = await axiosInstance.post(apiUrl, { email: email });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const hanldeDeletion = async (bookName) => {
    try {
      const apiUrl = `http://localhost:3000/user/${bookName}/cart/delete`;
      const response = await axiosInstance.delete(apiUrl, { email: email });
      const result = response;
      console.log(result);
      // setBooks((prevBooks) => prevBooks.filter((book) => book.book_name !== bookName));
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {books.map((book) => (
        <div key={book._id} className="product-card max-md:w-52 rounded-[--nextui-radius-large] shadow-small px-4 py-3 m-2 backdrop-blur-lg max-md:p-2 z-0">
          <Image
            onClick={() => Preview(book)}
            className="max-w-[280px] h-[450px] max-md:h-80 max-md:max-w-48 "
            alt={book.title}
            src={book.imageLink}
          />
          <div className="product-card-chip">
            <div className="product-name max-md:text-sm">
              <span className="slide">{book.title}</span>

            </div>
            <span className="product-price max-md:text-sm">&#8377;{book.price}</span>
          </div>
        </div>
      ))}
      {
        isOpen ? (<>
          <div className="w-[100vw] h-[100vh] backdrop-blur-3xl fixed inset-0 z-30">
            <div className="fixed inset-0 w-[90vw] h-[90vh] mx-auto my-auto p-auto z-40 backdrop-blur-3xl bg-white/30 rounded-large flex shadow-large max-md:overflow-scroll" >
              <div className="fixed right-5 top-5" onClick={Preview}>
                {isOpen ? <AiOutlineClose size={25} /> : <></>}
              </div>
              <div key={num.s_no} className='w-full grid grid-cols-7 max-md:grid-rows-2 max-md:grid-cols-1'>

                <div className='flex items-center justify-center col-span-3 max-md:w-full max-md:'>
                  <Image
                    className="w-auto max-md:w-fit max-md:my-12"
                    alt={num.title}
                    src={num.imageLink}
                  />

                </div>
                <div className='flex-col col-span-4 w-full h-auto mx-auto my-[25%] max-md:p-10 max-md:my-0'>
                  <h2 className='text-4xl leading-relaxed pb-2'>{num.title}</h2>
                  <p className='text-xl pb-2'>&#8377;{num.price}</p>
                  <p className='pb-2'>{num.genres}
                  </p>
                  <button className="product-btn" onClick={() => hanldeCart(num.title)} disabled={isDisabled}>Add to Cart<IoBagHandleOutline /></button>
                </div>
              </div>
            </div >
          </div>

        </>
        ) : (
          <></>
        )};

    </>
  );
};

export default ProductCard;

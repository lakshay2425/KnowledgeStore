import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
// import ProductPreview from "./ProductPreview";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import axiosInstance from "../utils/Axios";
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ books }) => {
  var [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn"));
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState(sessionStorage.getItem("gmail"));
  let [num, setnum] = useState(1);
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();

  // Navigate to ProductView and pass the book data

  const handleImageClick = async (book) => {
    console.log(book.title);
    setBookName(book.title);
    try {
      // Send GET request with bookName as query parameter
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_BACKEND_URL}/search/${bookName}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.found) {
        const result = response.data.bookDetails;
        console.log(result);
        localStorage.setItem('selectedBook', JSON.stringify(result));
        window.open('/ProductView', '_blank'); // Opens in a new tab
      } else {
        console.log("Book not found");
      }

      // Reset the bookName after search
      // setBookName("");
    } catch (error) {
      console.error("Error fetching book data:", error);
    }

  }

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
  // const handleWishList = async (bookName) => {
  //   try {
  //     console.log(bookName);
  //     const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/wishlist/${bookName}`;
  //     const response = await axiosInstance.post(apiUrl, { email: email });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };


  //Function to add book to Cart
  const hanldeCart = async (bookName) => {
    try {
      const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/cart/${bookName}`;
      console.log("Add to cart API called");
      const response = await axiosInstance.post(apiUrl, { email: email });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // const hanldeDeletion = async (bookName) => {
  //   try {
  //     const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/cart/${bookName}/delete`;
  //     const response = await axiosInstance.delete(apiUrl, { email: email });
  //     const result = response;
  //     console.log(result);
  //     // setBooks((prevBooks) => prevBooks.filter((book) => book.book_name !== bookName));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // functionality to preview book 


  return (
    <>
      {books.map((book) => (
        <div key={book._id} className=" rounded-[--nextui-radius-large] shadow-small px-4 py-3 m-2 backdrop-blur-lg max-md:p-2 z-0 max-md:w-52 max-sm:w-44 max-lg:w-60">
          <Image
            onClick={() => handleImageClick(book)}
            className="max-w-full  h-[450px] max-md:h-80 max-md:max-w-48 max-sm:w-40 max-sm:h-64 max-xl:h-[300px] max-lg:h-80 max-lg:w-52"
            alt={book.title}
            src={book.imageLink}
          />
          <div className="product-card-chip">
            <div className="product-name max-md:text-sm max-sm:text-xs max-xl:text-small max-lg:" >
              <span className="slide">{book.title}</span>

            </div>
            <span className="product-price max-md:text-sm max-sm:text-xs">&#8377;{book.price}</span>
          </div>
        </div>
      ))}
      {
        isOpen ? (
          <>
            <div key={num._id} className="w-[100vw] h-[100vh] backdrop-blur-3xl fixed inset-0 z-30">
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
        )}
    </>
  );
};

export default ProductCard;

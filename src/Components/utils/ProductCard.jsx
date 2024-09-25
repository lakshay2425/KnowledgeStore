import React, { useState } from "react";
import { Image } from "@nextui-org/react";
// import ProductPreview from "./ProductPreview";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import axiosInstance from "../utils/Axios";


const ProductCard = ({ books }) => {
  const img = "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg";
  console.log(books, "From Product card");

  var [isOpen, setIsOpen] = useState(false);
  let [num, setnum] = useState(1);
  var Preview = (id) => {
    setIsOpen(!isOpen);
    setnum(id);
  };

  //Function to add book to wishlist
  const handleWishList = async (bookName) => {
    try {
      console.log(bookName);
      const apiUrl = `http://localhost:3000/user/${bookName}/wishlist`;
      const response = await axiosInstance.get(apiUrl);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Function to add book to Cart
  const hanldeCart = async (bookName) => {
    try {
      const apiUrl = `http://localhost:3000/user/${bookName}/cart`;
      const response = await axiosInstance.get(apiUrl);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const hanldeDeletion = async (bookName) => {
    try {
      const apiUrl = `http://localhost:3000/user/${bookName}/cart/delete`;
      const response = await axiosInstance.delete(apiUrl);
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
        <div key={book.s_no} className="product-card max-md:w-52 rounded-[--nextui-radius-large] shadow-small px-4 py-3 m-2 backdrop-blur-lg max-md:p-2 z-0">
          <Image
            onClick={() => Preview(book)}
            className="max-w-[280px] h-[450px] max-md:h-80 max-md:max-w-48 "
            alt={book.title}
            src={book.imageLink}
          />
          <div className="product-card-chip">
            <span className="product-name max-md:text-sm">{book.title}</span>
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
              <div key={num.s_no} className='flex max-md:flex-col'>

                <div className='flex w-2/5 justify-center items-center max-md:w-full max-md:'>
                  <Image

                    className="w-96 max-md:w-fit max-md:my-12"
                    alt={num.book_name}
                    src={num.img_link}

                  />

                </div>
                <div className='flex-col w-2/4 mx-auto my-auto max-md:w-4/5'>
                  <h2 className='text-4xl leading-relaxed pb-2'>{num.book_name}</h2>
                  <p className='text-xl pb-2'>&#8377;{num.price}</p>
                  <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus quisquam iure, voluptatem consequuntur aperiam cum doloremque, excepturi eum praesentium vero totam numquam inventore itaque maiores libero quos rem architecto.
                    Eaque magnam molestiae adipisci ex ullam, laboriosam id porro laborum dolor perferendis veniam vero excepturi totam earum voluptatem repudiandae est, impedit illo quidem perspiciatis culpa minus quam? Iste, maiores dolor?
                    Aspernatur placeat voluptas, ea fugiat ipsum consequuntur eos, reiciendis fuga, non possimus repudiandae nisi. Esse tempore consectetur nulla labore, at quod debitis perspiciatis quaerat enim natus consequatur sequi praesentium nam.
                    Laboriosam, nihil voluptas praesentium deleniti dolores modi illo aliquam quidem repellat ab qui cupiditate tempore numquam minus consequuntur rem animi debitis, fugit, tempora non ullam possimus voluptate pariatur iure. Cum.
                    Est doloribus minus voluptatum impedit amet officia porro temporibus quos eum, labore soluta fugit cupiditate nemo! Distinctio magnam laborum, ipsam mollitia ipsum beatae dolorum nam illo odit eaque tenetur minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eos! Amet nostrum, temporibus ad nobis quaerat quas nam distinctio aliquid doloribus totam facere mollitia, sapiente sit eos aspernatur quae officia.
                  </p>
                  <button className="product-btn " onClick={() => hanldeCart(num.book_name)} disabled={num.Quantity <= 0}>Add to Cart<IoBagHandleOutline /></button>
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

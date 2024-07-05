import React from "react";
import { Image } from "@nextui-org/react";
import { IoBagHandleOutline } from "react-icons/io5";
const ProductCard = ({ books }) => {
  const img = "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg";
  // const cart = () => {
  //   try {
  //     const response = await axios.post('http://localhost/Programs/Book_rental%20Project/Cart.php', details);
  // }
  // catch(e){

  // }

  return (
    <>
      {books.map((book) => (
        <div key={book.s_no} className="product-card max-md:w-52">
          <Image
            className="product-img max-md:h-80 max-md:max-w-44"
            style={{width: 300}}
            isZoomed
            
            height={525}
            alt={book.book_name}
            src={book.img_link}
            
          />
          <div className="product-card-chip">
            <span className="product-name max-md:text-sm">{book.book_name}</span>
            <span className="product-price max-md:text-sm">&#8377;{book.price}</span>
          </div>
          <div className="product-card-chip">
            <span className="product-author max-md:text-sm">By {book.author}</span>
            <span className="genre max-md:text-sm">{book.genre}</span>
          </div>
          
          {/* <p className="product-total-items">Total Items: {totalItems}</p> */}
          <button className="product-btn">Add <IoBagHandleOutline /></button>
        </div>
      ))}
    </>

    // <div className="product-card">
    //   {books.map((book) => (
    //     <div key={book.s_no} className="card">
    //       <div className="card-body">
    //         <h5 className="card-title">{book.book_name}</h5>
    //         <p className="card-text">Author: {book.author}</p>
    //         <p className="card-text">Genre: {book.genre}</p>
    //         <p className="card-text">Price: ${book.price}</p>
    //         <a href="#" className="btn btn-primary">
    //           Add to Cart
    //         </a>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ProductCard;

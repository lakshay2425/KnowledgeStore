import React, { useState } from "react";
import { Image } from "@nextui-org/react";
// import ProductPreview from "./ProductPreview";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const ProductCard = ({ books }) => {
  const img = "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg";
  // const cart = () => {
  //   try {
  //     const response = await axios.post('http://localhost/Programs/Book_rental%20Project/Cart.php', details);
  // }
  // catch(e){

  // }

  var [isOpen, setIsOpen] = useState(false);
  let [num, setnum] = useState(1);
  var Preview = (id) => {
    setIsOpen(!isOpen);

    setnum(id);
  };
  let arr = {num};

console.log(num);
  // console.log(isOpen);

  // if (isOpen) {
  //   return (

  //   )
  // }

  return (
    <>
      {books.map((book) => (
        <div key={book.s_no} className="product-card max-md:w-52">
          <Image
            onClick={() => Preview(book)}
            className="product-img max-md:h-80 max-md:max-w-44"
            style={{ width: 300 }}
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
      {
        isOpen ? (<>
          <div className="fixed inset-0 w-[90vw] h-[90vh] mx-auto my-auto z-40 backdrop-blur-3xl bg-white/30 rounded-large flex shadow-large" >
            <div className="fixed right-5 top-5" onClick={Preview}>
              {isOpen ? <AiOutlineClose size={25} /> : <></>}
            </div>
            {/* {console.log(num)} */}
            <div key={num.s_no} className='flex max-md:flex-col'>

                <div className='w-2/5 h-full flex '>
                    <img src={num.img_link} className='w-3/4 mx-auto my-auto rounded-large transition ease-in-out hover:scale-150' />
                </div>
                <div className='flex-col w-2/4  mx-auto my-auto '>
                    <h2 className='text-4xl leading-relaxed pb-2'>{num.book_name}</h2>
                    <p className='text-xl pb-2'>&#8377;{num.price}</p>
                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eos! Amet nostrum, temporibus ad nobis quaerat quas nam distinctio aliquid doloribus totam facere mollitia, sapiente sit eos aspernatur quae officia.
                    </p>
                    <button className="product-btn">Add <IoBagHandleOutline /></button>
                </div>

            </div>
          </div >
        </>
        ) : (
          <></>
        )};

    </>
  );
};

export default ProductCard;

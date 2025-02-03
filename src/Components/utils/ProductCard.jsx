/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";

const ProductCard = ({ books }) => {

  return (
    <>
      {books?.map((book) => (
        <div key={book._id} className="w-72 rounded-3xl shadow-small px-4 py-3 m-2 backdrop-blur-lg max-md:p-2 z-0 max-md:w-52 max-sm:w-44 max-lg:w-60">
          <Image
            className="max-w-full rounded-2xl h-[400px] max-md:h-80 max-md:max-w-48 max-sm:w-40 max-sm:h-64 max-xl:h-[300px] max-lg:h-80 max-lg:w-52"
            alt={book.title}
            src={book.imageLink}
            textvalue={book.title}
          />
          <div className="product-card-chip">
            <div className="product-name max-md:text-sm max-sm:text-xs max-xl:text-small max-lg:" >
              <span className="slide">{book.title}</span>

            </div>
            <span className="product-price max-md:text-sm max-sm:text-xs">&#8377;{book.price}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;

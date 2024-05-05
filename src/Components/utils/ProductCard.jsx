import React from 'react';

const ProductCard = ({ books }) => {

    return (
        <div className='product-card'>
                {books.map(book => (
                    <div key={book.s_no} className="book-card product-card">
                      <div className="product-card-chip">
                        <p className="product-name"> Book Name:{book.book_name}</p>
                        <p className="product-price">Price: {book.price}</p >
                      </div>
                        <p className="product-author">Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                        <br /><br />
                    </div>
                ))}
            </div>
    );
};

export default ProductCard;

import React from "react";

var product = Array('', 20, 'Rohan', 'comics', 100)

function ProductCard(product) {

  const { image, name, price, author, category, totalItems } = product;
  // css is written in index.css

  return (
    <div className='product-card'>
      {/* // css is written in index.css */}
      {/* <div className="product-img">
        <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg" alt="" />

      </div>
      <div className='product-data'>
        <p className='product-name'>Product name</p>
        <p className='product-price'> &#x20B9; 0.0</p>
      </div>
      <div>
        <button className='product-btn'>Add to cart</button>
      </div> */}
      <div className="product-card">
        <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg" alt="Product" className="product-img" />

        <div className="product-card-chip">
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>

        </div>
        <p className="product-author">By {author}</p>
        {/* <p className="product-total-items">Total Items: {totalItems}</p> */}
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
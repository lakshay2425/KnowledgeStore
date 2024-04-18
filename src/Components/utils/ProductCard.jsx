import React from 'react'

function ProductCard() {
  return (
    <div className='product-card'> 
        {/* // css is written in index.css */}
        <div className="product-img">
            <img src="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg" alt="" />

        </div>
        <div className='product-data'>
            <p className='product-name'>Product name</p>
            <p className='product-price'> &#x20B9; 0.0</p>
        </div>
        <div>
            <button className='product-btn'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard
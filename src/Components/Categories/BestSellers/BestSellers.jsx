import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProductCard from '../../utils/ProductCard'
import './BestSellers.css'
export class BestSellers extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='best-seller-container'>
        <h1 className="best-seller">Best Sellers</h1>
        <div className="product-container">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    )
  }
}

export default BestSellers
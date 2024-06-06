import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { toast } from 'react-toastify'
import {food_list} from '../../components/assets/assets.js'

const Product = () => {
  const { productId } = useParams()
  const { addToCart } = useContext(ShopContext)
  const product = food_list.filter(function (food) {
    return food._id === productId
  })
  console.log(product);
  
  return (
    <div class="product-container">
      <img src={product != null && product[0].image} alt="Product Image" class="product-image" />
      <div class="product-info">
        <h1>{product != null && product[0].name}</h1>
        <div class="product-rating">
          <span class="star-icon">&#9733;</span> <span class="star-icon">&#9733;</span>
          <span class="star-icon">&#9733;</span>
          <span class="star-icon">&#9733;</span>
          <span class="star-icon">&#9734;</span> <span class="rating-text">(4.5 out of 5 stars)</span>
        </div>
        <div className="item-prices">
                <div className="item-price-new">
                    ${product != null && product[0].price}
                </div>
            </div>
        <p class="description">{product != null && product[0].description}</p>
        <ul class="features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        {/* <div class="quantity-selector">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" />
        </div> */}
        <button id="add-to-cart" onClick={()=>{
          addToCart(product[0])
          toast('Added in Cart')
        }}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
import React from 'react'
import './ExploreProduct.css'
import { product_list } from '../../assets/assets'
const ExploreProduct = () => {
  return (
    <div className='explore-product' id='explore-product'>
        <h1>Our Products</h1>
        <p className='explore-product-text'>Checkout our extensive range of Agro food products right from Rice, 
        Groundnut oil, Gingelly oil, Coconut oil to all type of Flours & more</p>
        <div className='explore-product-list'>
            {product_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-product-list-item'>
                        <img src={item.product_image}  alt="" />
                        <p>{item.product_name}</p>
                        </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreProduct

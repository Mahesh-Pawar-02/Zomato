import React from 'react'
import './ShopCategory.css'
import Item from '../../components/Item/Item'
import { useParams } from 'react-router-dom'
import {food_list} from '../../components/assets/assets.js'

const ShopCategory = () => {
  const { category } = useParams()

  return (
    <div className="shopcategory-products">
      {food_list.map((food, i) => {
        if(food.category === category) {
          return <Item food={food} key={i}/>
        }
        else {
          return <></>
        }
      })}
    </div>
  )
}

export default ShopCategory
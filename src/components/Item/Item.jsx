import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({food}) => {
    return (
        <Link to={`/product/${food.category}/${food._id}`}><div className="card" style={{width: "18rem"}}>
            <img src={food.image} className="card-img-top" style={{height: '200px'}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <a href="#" className="btn btn-primary">${food.price}</a>
            </div>
        </div></Link>
    )
}

export default Item
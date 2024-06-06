import React, { useContext } from 'react'
import './Navbar.css'
import {ShopContext} from '../../context/ShopContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {cartItems} = useContext(ShopContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">Zomato</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to={`/shop/Salad`}><li className="nav-item">
                            <a className="nav-link" href="#">Salad</a>
                        </li></Link>
                        <Link to={`/shop/Rolls`}><li className="nav-item">
                            <a className="nav-link" href="#">Rolls</a>
                        </li></Link>
                        <Link to={`/shop/Deserts`}><li className="nav-item">
                            <a className="nav-link" href="#">Deserts</a>
                        </li></Link>
                        <Link to={`/shop/Sandwitch`}><li className="nav-item">
                            <a className="nav-link" href="#">Sandwitch</a>
                        </li></Link>
                        <Link to={`/shop/Cake`}><li className="nav-item">
                            <a className="nav-link" href="#">Cake</a>
                        </li></Link>
                        <Link to={`/shop/Pure Veg`}><li className="nav-item">
                            <a className="nav-link" href="#">Pure Veg</a>
                        </li></Link>
                        <Link to={`/shop/Pasta`}><li className="nav-item">
                            <a className="nav-link" href="#">Pasta</a>
                        </li></Link>
                        <Link to={`/shop/Noodles`}><li className="nav-item">
                            <a className="nav-link" href="#">Noodles</a>
                        </li></Link>
                    </ul>
                    <form className="d-flex nav-right" role="search">
                        <Link to='/login'><button type="button" class="btn btn-outline-info">Login</button></Link>
                        <Link to='/cart'><img src='data:image/png;base64,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' alt="" /></Link>
                        {cartItems.length === 0 ? <></> :
                        <div className="items">{cartItems.length}</div>}
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
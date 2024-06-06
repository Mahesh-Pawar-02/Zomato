import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop/Shop'
import ShopCategory from './pages/ShopCategory/ShopCategory'
import Cart from './pages/Cart/Cart'
import LoginSignup from './pages/LoginSignup/LoginSignup'

// import banner_mens from './components/assets/banner_mens.png'
// import banner_womens from './components/assets/banner_women.png'
// import banner_kids from './components/assets/banner_kids.png'
import Product from './pages/Product/Product'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/shop/:category' element={<ShopCategory />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />
      <Route path='/product/:category/:productId' element={<Product />} />
    </Routes>


    <ToastContainer />
    </>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './context/ShopContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
)

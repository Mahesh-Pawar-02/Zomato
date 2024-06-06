import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../../context/ShopContext'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext)

  let subTotal = 0, total = 0
  return (
    <>
      <h1 className='cart-heading'>Your Shopping Cart</h1>

      <div className="cart-container">
        <div className="table">
          <table id="cart-items">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>New Price</th>
                <th>Old Price</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => {
                console.log(item);
                total = item.price * item.quantity
                subTotal += total
                return <tr>
                  <td><img className='cart-img' src={item.image} /></td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>$200</td>
                  <td>${total}</td>
                  <td className='cart-cross'>
                    <img
                      onClick={() => removeFromCart(item.id)}
                      src='data:image/png;base64,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'
                      alt=""
                    />
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <p>Subtotal: <span id="subtotal">&#36;{subTotal}</span></p>
          <p>Taxes (estimated): <span id="taxes">&#36;0.20</span></p>
          <p><strong>Total: <span id="total">&#36;{subTotal + 0.20}</span></strong></p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
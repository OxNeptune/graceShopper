//guest cart will render the Cart component which renders SinglePlant
//it will be a stateful component and manage it's own state

import React, {Component} from 'react'
import {CartTwo} from './CartTwo'
import Checkout from './Checkout'
import {Link} from 'react-router-dom'

export default class GuestCart extends Component {
  render() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) cart = []
    let total = 0

    cart.forEach(item => {
      total += item.total
    })

    localStorage.setItem('OrderTotal', JSON.stringify(total))
    return (
      <div className="user-cart-wrapper">
        {cart.length ? (
          <div>
            <CartTwo cart={cart} />
            <div className="final-total">
              <h2>Your Total is ${total}!</h2>
            </div>
            <div className="cart-button">
              <Link to="/checkout" component={Checkout}>
                <button className="submit-button" type="submit">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <h3>You have no items in your cart!</h3>
        )}
      </div>
    )
  }
}

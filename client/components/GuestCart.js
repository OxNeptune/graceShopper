//guest cart will render the Cart component which renders SinglePlant
//it will be a stateful component and manage it's own state

import React, {Component} from 'react'
import {CartTwo} from './CartTwo'

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
          <CartTwo cart={cart} />
        ) : (
          <h3>You have no items in your cart!</h3>
        )}
        <div className="final-total">
          <h2>Your Total is ${total}!</h2>
        </div>
      </div>
    )
  }
}

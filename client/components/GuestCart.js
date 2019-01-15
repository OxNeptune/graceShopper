//guest cart will render the Cart component which renders SinglePlant
//it will be a stateful component and manage it's own state

import React, {Component} from 'react'
import {CartTwo} from './CartTwo'

export default class GuestCart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)

    return (
      <div className="user-cart-wrapper">
        {cart.length ? (
          <CartTwo cart={cart} />
        ) : (
          <h3>You have no items in your cart!</h3>
        )}
      </div>
    )
  }
}

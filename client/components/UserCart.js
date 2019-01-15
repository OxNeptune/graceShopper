//user cart will render the Cart component which renders SinglePlant
//it will pull props from the store

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/userCart'
import {Cart} from './Cart'
import {Link} from 'react-router-dom'
import Checkout from './Checkout'

class UserCart extends Component {
  render() {
    const cart = this.props.cart
    let total = 0

    cart.forEach(item => {
      total += item.cartItem.total
    })
    localStorage.setItem('OrderTotal', JSON.stringify(total))
    return (
      <div className="user-cart-wrapper">
        {cart.length ? (
          <div>
            <Cart cart={cart} />
            <h2>Your Total is ${total}!</h2>
            <Link to="/checkout" component={Checkout}>
              <button type="submit">Checkout</button>
            </Link>
          </div>
        ) : (
          <h3>You have no items in your cart!</h3>
        )}
      </div>
    )
  }

  componentDidMount() {
    this.props.loadCart()
  }
}

const mapState = state => {
  return {
    cart: state.userCart.cart
  }
}

const mapDispatch = dispatch => ({
  loadCart: () => dispatch(getCartThunk())
})

export default connect(mapState, mapDispatch)(UserCart)

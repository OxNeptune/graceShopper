//user cart will render the Cart component which renders SinglePlant
//it will pull props from the store

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/userCart'
import {Cart} from './Cart'

class UserCart extends Component {
  render() {
    const cart = this.props.cart

    return (
      <div className="user-cart-wrapper">
        {cart.length ? (
          <Cart cart={cart} />
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

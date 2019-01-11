//user cart will render the Cart component which renders SinglePlant
//it will pull props from the store

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/userCart'
import {Cart} from '.'

export class UserCart extends Component {
  render() {
    const cart = this.props.cart.plants

    return (
      <div className="user-cart-wrapper">
        <Cart cart={cart} />
      </div>
    )
  }

  componentDidMount() {
    this.props.loadCart()
  }
}

const mapState = state => ({
  cart: state.cart.cart
})

const mapDispatch = dispatch => ({
  loadCart: () => dispatch(getCartThunk())
})

export default connect(mapState, mapDispatch)(UserCart)

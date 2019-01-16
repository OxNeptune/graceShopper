import React, {Component} from 'react'
import {Elements} from 'react-stripe-elements'
import InjectedCheckoutForm from './CheckoutForm'
import {connect} from 'react-redux'
import {deleteCartItemsThunk} from '../store/userCart'

class Checkout extends Component {
  render() {
    const total = localStorage.OrderTotal
    return (
      <div>
        <h3>Total: ${total}</h3>
        <Elements>
          <InjectedCheckoutForm
            total={total}
            deleteCartItems={this.props.deleteCartItems}
          />
        </Elements>
      </div>
    )
  }
}
const mapDispatch = dispatch => ({
  deleteCartItems: () => dispatch(deleteCartItemsThunk())
})

export default connect(null, mapDispatch)(Checkout)

import React, {Component} from 'react'
import {Elements} from 'react-stripe-elements'
import InjectedCheckoutForm from './CheckoutForm'

class Checkout extends Component {
  render() {
    const total = localStorage.OrderTotal
    console.log(localStorage)
    console.log('hello')
    return (
      <div>
        <h3>Total: ${total}</h3>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </div>
    )
  }
}

export default Checkout

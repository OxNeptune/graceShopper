import React, {Component} from 'react'
import {Elements} from 'react-stripe-elements'
import InjectedCheckoutForm from './CheckoutForm'

class Checkout extends Component {
  render() {
    console.log('hello')
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    )
  }
}

export default Checkout

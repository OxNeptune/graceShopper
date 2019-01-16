import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {complete: false}
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    console.log(this.props, 'PROPS')
    let {error, token} = await this.props.stripe.createToken({name: 'Name'})
    if (error) console.log('Error', error)
    console.log('TOKEN', token)
    let response = await fetch('/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: {
        stripeToken: token.id,
        amount: this.props.total
      }
    })
    console.log('response', response)

    if (response.ok) {
      console.log('Purchase Complete!')
      localStorage.setItem('cart', JSON.stringify([]))
      localStorage.setItem('OrderTotal', JSON.stringify(0))
      this.props.deleteCartItems()
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className="stripe-checkout checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button type="submit" onClick={this.submit}>
          Send
        </button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)

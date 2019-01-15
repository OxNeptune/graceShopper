import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {complete: false}
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    console.log('ev', ev)
    let {error, token} = await this.props.stripe.createToken({name: 'Name'})
    if (error) console.log('Error', error)
    console.log('TOKEN', token)
    let response = await fetch('/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: token.id
    })
    console.log('response', response)

    if (response.ok) console.log('Purchase Complete!')
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className="stripe-checkout checkout">
        <form>
          <h1>Checkout</h1>
          <br />

          <CardElement />
          <button onClick={this.submit}>Send</button>
        </form>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)

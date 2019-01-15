import React, {Component} from 'react'

class AddressCheckoutForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = event => {
    event.preventDefault()

    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    const firstLine = evt.target.firstLine.value
    const secondLine = evt.target.secondLine.value
    const city = evt.target.city.value
    const state = evt.target.state.value
    const zip = evt.target.zip.value
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <h3>Billing Address</h3>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" required />

          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" required />

          <label htmlFor="firstLine">
            <small>Street</small>
          </label>
          <input name="firstLine" type="text" required />

          <label htmlFor="secondLine">
            <small>Apt/Suite</small>
          </label>
          <input name="secondLine" type="text" />

          <label htmlFor="city">
            <small>City</small>
          </label>
          <input name="city" type="text" required />

          <label htmlFor="state">
            <small>State</small>
          </label>
          <input name="state" type="text" required />

          <label htmlFor="zip">
            <small>Zip Code</small>
          </label>
          <input name="zip" type="text" required />
        </div>

        <button type="submit">Submit Address Information</button>
      </form>
    )
  }
}

export default AddressCheckoutForm

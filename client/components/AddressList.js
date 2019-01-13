import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserProfileThunk, addAddress, removeAddress} from '../store/user'
import SingleAddress from './SingleAddress'

class AddressList extends Component {
  componentDidMount() {
    this.props.loadUser(this.props.id)
  }
  render() {
    const addresses = this.props.addresses

    return (
      <div>
        <h4>Addresses</h4>
        {addresses.length > 0 ? (
          <div>
            {addresses.map(address => {
              return (
                <SingleAddress
                  key={address.id}
                  address={address}
                  removeAddress={this.props.removeAddress}
                />
              )
            })}
          </div>
        ) : (
          <div>
            <p>No available addresses</p>
          </div>
        )}
        <div>
          <p>Add an Address</p>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label htmlFor="firstName">
                <small>Receipient First Name</small>
              </label>
              <input name="firstName" type="text" required />
            </div>
            <div>
              <label htmlFor="lastName">
                <small>Recipeient Last Name</small>
              </label>
              <input name="lastName" type="text" required />
            </div>
            <div>
              <label htmlFor="firstLine">
                <small>Street</small>
              </label>
              <input name="firstLine" type="text" required />
            </div>

            <div>
              <label htmlFor="secondLine">
                <small>Apt/Suite</small>
              </label>
              <input name="secondLine" type="text" />
            </div>
            <div>
              <label htmlFor="city">
                <small>City</small>
              </label>
              <input name="city" type="text" required />
            </div>
            <div>
              <label htmlFor="state">
                <small>State</small>
              </label>
              <input name="state" type="text" required />
            </div>
            <div>
              <label htmlFor="zip">
                <small>Zip Code</small>
              </label>
              <input name="zip" type="text" required />
            </div>

            <div>
              <button type="submit">Add Address</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id,
    addresses: state.user.addresses
  }
}

function mapDispatch(dispatch) {
  return {
    loadUser: userId => dispatch(getUserProfileThunk(userId)),
    handleSubmit(evt) {
      evt.preventDefault()

      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const firstLine = evt.target.firstLine.value
      const secondLine = evt.target.secondLine.value
      const city = evt.target.city.value
      const state = evt.target.state.value
      const zip = evt.target.zip.value

      const address = {
        firstName,
        lastName,
        firstLine,
        secondLine,
        city,
        state,
        zip
      }
      dispatch(addAddress(address))
    },
    removeAddress(addressId) {
      dispatch(removeAddress(addressId))
    }
  }
}

export default connect(mapState, mapDispatch)(AddressList)

import {SingleAddress} from './SingleAddress'
import {getUserProfileThunk} from '../store/user'
import {connect} from 'react-redux'
import React from 'react'

const AddressList = props => {
  const addresses = props
  console.log('hi', props)
  return (
    <div>
      <h4>Addresses</h4>
      {addresses.length > 0 ? (
        <div>
          {addresses.map(address => {
            return <SingleAddress key={address.id} props={address} />
          })}
        </div>
      ) : (
        <div>
          <p>No available addresses</p>
        </div>
      )}
      <div>
        <p>Add an Address</p>
        <form>
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
            <input name="secondLine" type="text" required />
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
    loadUser: userId => dispatch(getUserProfileThunk(userId))
    // removePlant: plantId => dispatch(removePlant(plantId))
    // submitPlant: plant => dispatch(submitPlant(plant))
  }
}

export default connect(mapState, mapDispatch)(AddressList)

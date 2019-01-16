import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AddressList from './AddressList'
import Orders from './Orders'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAdresses: false,
      showOrders: false,
      showInfo: false,
      showPaymentOptions: false
    }
    this.toggleAddresses = this.toggleAddresses.bind(this)
    this.toggleOrders = this.toggleOrders.bind(this)
  }

  toggleAddresses() {
    this.setState({
      showAdresses: !this.state.showAdresses,
      showOrders: this.state.showOrders
    })
  }

  toggleOrders() {
    this.setState({
      showAdresses: this.state.showAdresses,
      showOrders: !this.state.showOrders
    })
  }

  render() {
    const {firstName} = this.props

    return (
      <div className="user-home-wrapper">
        <h2>Welcome, {firstName}</h2>
        <div className="user-home-buttons">
          <button
            className="user-submit-button"
            type="button"
            onClick={this.toggleOrders}
          >
            Orders
          </button>
          <button
            className="user-submit-button"
            type="button"
            onClick={this.toggleAddresses}
          >
            Your Addresses
          </button>
          <button className="user-submit-button" type="button">
            Login/Security
          </button>
          <button className="user-submit-button" type="button">
            Payment Options
          </button>
          <div>{this.state.showAdresses && <AddressList />}</div>
          <div>{this.state.showOrders && <Orders />}</div>
        </div>
      </div>
    )
  }
}

// export const UserHome = props => {
//   const {firstName} = props

//   return (
//     <div>
//       <h2>Welcome, {firstName}</h2>
//       <div className="user-home-features">
//         <button type="button">Orders</button>
//         <button type="button">Your Addresses</button>
//         <button type="button">Login/Security</button>
//         <button type="button">Payment Options</button>
//       </div>
//     </div>
//   )
// }

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName
    // address: state.user.addresses
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string
  // address: PropTypes.array
}

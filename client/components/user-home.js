import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {Link, withRouter} from 'react-router-dom'
import AddressList from './AddressList'
// import SingleAddress from './SingleAddress'
// import orders from '../store/orders'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAdresses: false,
      showOrders: false,
      showInfo: false,
      showPaymentOptions: false
    }
    this.toggleAddresses = this.toggleAddresses.bind(this)
    // this.toggleOrders = this.toggleOrders.bind(this)
  }

  toggleAddresses() {
    this.setState({
      showAdresses: !this.state.showAdresses
    })
  }

  render() {
    const {firstName} = this.props
    console.log('User-home props', this.props)

    return (
      <div>
        <h2>Welcome, {firstName}</h2>
        <div className="user-home-features">
          <button type="button" onClick={this.toggleOrders}>
            Orders
            <div>
              {/* {orders.length ? (
                orders.map(order => (
                  <Link to={`/orders/${order.id}`} key={order.id}>
                    <Order />
                  </Link>
                ))
              ) : (
                <h4>You have no orders at this time</h4>
              )} */}
            </div>
          </button>
          <button type="button" onClick={this.toggleAddresses}>
            Your Addresses
          </button>
          <button type="button">Login/Security</button>
          <button type="button">Payment Options</button>
        </div>
        <div>{this.state.showAdresses && <AddressList />}</div>
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

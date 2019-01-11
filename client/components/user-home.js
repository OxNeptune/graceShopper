import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import orders from '../store/orders'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.showOrders = this.showOrders.bind(this)
  }

  showOrders() {
    console.log('Many orders, yay, I bought a monkey!')
  }

  render() {
    const {firstName} = this.props

    return (
      <div>
        <h2>Welcome, {firstName}</h2>
        <div className="user-home-features">
          <button type="button" onClick={this.showOrders}>
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
          <button type="button">Your Addresses</button>
          <button type="button">Login/Security</button>
          <button type="button">Payment Options</button>
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
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string
}

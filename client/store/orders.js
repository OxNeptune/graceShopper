import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */
const prevOrders = []

/**
 * ACTION CREATORS
 */
const getOrders = orders => ({type: GET_ORDERS, orders})

/**
 * THUNK CREATORS
 */
export const getOrdersThunk = () => async dispatch => {
  try {
    const response = await axios.get('/api/orders')
    dispatch(getOrders(response.data || prevOrders))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = prevOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}

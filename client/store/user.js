import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_USER_PROFILE = 'GET_USER_PROFILE'
const ADD_ADDRESS_TO_USER = 'ADD_ADDRESS_TO_USER'
const REMOVE_ADDRESS_FROM_USER = 'REMOVE_ADDRESS_FROM_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {
  user: {},
  addresses: []
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getUserProfile = user => ({type: GET_USER_PROFILE, user})
const addAddressToUser = address => ({type: ADD_ADDRESS_TO_USER, address})
const removeAddressFromUser = address => ({
  type: REMOVE_ADDRESS_FROM_USER,
  address
})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  email,
  password,
  method,
  firstName,
  lastName
) => async dispatch => {
  let res
  try {
    if (method === 'signup') {
      res = await axios.post(`/auth/${method}`, {
        email,
        password,
        firstName,
        lastName
      })
    } else {
      res = await axios.post(`/auth/${method}`, {email, password})
    }
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/account')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

//This gets the User's information including eager loaded addresses so that home page can display
export const getUserProfileThunk = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}`)
    dispatch(getUserProfile(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
//This adds an address to the User
export const addAddress = address => async dispatch => {
  try {
    const res = await axios.post(`/api/address`, address)
    dispatch(addAddressToUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

//This adds an address to the User
export const removeAddress = addressId => async dispatch => {
  try {
    const res = await axios.delete(`/api/address/${addressId}`)
    dispatch(removeAddressFromUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, ...action.user}
    case GET_USER_PROFILE:
      return {...state, ...action.user}
    case REMOVE_USER:
      return defaultUser
    case ADD_ADDRESS_TO_USER:
      return {...state, addresses: [...state.addresses, action.address]}
    case REMOVE_ADDRESS_FROM_USER: {
      let newAddress = []
      for (let i = 0; i < state.addresses.length; i++) {
        if (state.addresses[i].id !== action.address.id) {
          newAddress.push(state.addresses[i])
        }
      }
      return {...state, addresses: newAddress}
    }
    default:
      return state
  }
}

import axios from 'axios'

const initialState = {
  cart: [],
  cartItem: {}
}

//a cart is an array containing

const GOT_CART = 'GOT_CART'
const ADDED_PLANT_TO_CART = 'ADDED_PLANT_TO_CART'
const UPDATED_PLANT_IN_CART = 'UPDATED_PLANT_IN_CART'
const DELETE_CART_ITEMS_IN_CART = 'DELETE_CART_ITEMS_IN_CART'

export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

export const addedPlantToCart = cartItem => ({
  type: ADDED_PLANT_TO_CART,
  cartItem
})

export const updatedPlantInCart = cartItem => ({
  type: UPDATED_PLANT_IN_CART,
  cartItem
})

export const deleteCartItems = () => ({
  type: DELETE_CART_ITEMS_IN_CART
})

export const updatePlantInCartThunk = plantInfo => async dispatch => {
  try {
    const res = await axios.put('/api/guestCart', plantInfo)
    dispatch(updatedPlantInCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const addPlantToCartThunk = plantInfo => async dispatch => {
  try {
    const res = await axios.post('/api/guestCart', plantInfo)
    dispatch(addedPlantToCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getCartThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/guestCart')
    dispatch(gotCart(res.data.plants))
  } catch (err) {
    console.error(err)
  }
}

export const deleteCartItemsThunk = () => async dispatch => {
  try {
    await axios.delete('/api/guestCart/')
    dispatch(deleteCartItems())
  } catch (err) {
    console.error(err)
  }
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CART:
      return {...state, cart: action.cart}
    case ADDED_PLANT_TO_CART:
      return {...state, cart: action.cartItem}
    case UPDATED_PLANT_IN_CART:
      return {...state, cart: action.cartItem}
    case DELETE_CART_ITEMS_IN_CART:
      return {...state, cart: []}
    default:
      return state
  }
}

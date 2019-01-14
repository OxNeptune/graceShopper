import axios from 'axios'

const initialState = {
  cart: [],
  cartItem: {}
}

//a cart is an array containing

const GOT_CART = 'GOT_CART'
const ADDED_PLANT_TO_CART = 'ADDED_PLANT_TO_CART'

const gotCart = cart => ({
  type: GOT_CART,
  cart
})

const addedPlantToCart = cartItem => ({
  type: ADDED_PLANT_TO_CART,
  cartItem
})

export const addPlantToCartThunk = plantInfo => async dispatch => {
  try {
    const res = await axios.post('/api/guestCart', plantInfo)
    console.log(res.data)
    dispatch(addedPlantToCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getCartThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart')
    dispatch(gotCart(res.data))
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
      return {...state, cart: [...state.cart, action.cartItem]}
    default:
      return state
  }
}

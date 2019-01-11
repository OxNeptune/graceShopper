import axios from 'axios'

const initialState = {
  cart: [],
  cartItem: {}
}

//a cart is an array containing

const GOT_CART = 'GOT_CART'

export const gotCart = cart => {
  return {
    type: GOT_CART,
    cart
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
    default:
      return state
  }
}

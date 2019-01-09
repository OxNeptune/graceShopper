import axios from 'axios'

// action types
const GOT_PLANTS = 'GOT_PLANTS'

// action creators
export const gotPlants = plants => {
  return {
    type: GOT_PLANTS,
    plants
  }
}

// thunk creators
// export function getPlantsThunk() {
//   return async function thunk(dispatch) {
//     const response = await axios.get('/api/plants')
//     dispatch(gotPlants(response))
//   }
// }

export const getPlantsThunk = () => async dispatch => {
  try {
    const response = await axios.get('/api/plants')
    dispatch(gotPlants(response))
  } catch (err) {
    console.error(err)
  }
}

// reducer
export default (state = [], action) => {
  switch (action.type) {
    case GOT_PLANTS:
      return action.plants
    default:
      return state
  }
}

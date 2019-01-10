import axios from 'axios'

const initialState = {
  plants: [],
  singlePlant: {}
}

// action types
const GOT_PLANTS = 'GOT_PLANTS'
const GOT_SINGLE_PLANT = 'GOT_SINGLE_PLANT'

// action creators
export const gotPlants = plants => {
  return {
    type: GOT_PLANTS,
    plants
  }
}

export const gotSinglePlant = plant => {
  return {
    type: GOT_SINGLE_PLANT,
    plant
  }
}

export const getPlantsThunk = () => async dispatch => {
  try {
    const response = await axios.get('/api/plants')
    dispatch(gotPlants(response.data))
  } catch (err) {
    console.error(err)
  }
}

export const getSinglePlantThunk = id => async dispatch => {
  try {
    const response = await axios.get(`/api/plants/${id}`)
    dispatch(gotSinglePlant(response.data))
  } catch (err) {
    console.error(err)
  }
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_PLANTS:
      return {...state, plants: action.plants}
    case GOT_SINGLE_PLANT:
      return {...state, plant: action.plant}
    default:
      return state
  }
}

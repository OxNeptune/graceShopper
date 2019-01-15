import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/plants'
import {
  addPlantToCartThunk,
  updatePlantInCartThunk,
  getCartThunk
} from '../store/userCart'
import {me} from '../store'

class SinglePlant extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadPlant(this.props.match.params.id)
    if (this.props.isLoggedIn) {
      this.props.loadCart()
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const plant = this.props.plant
    const plantId = this.props.plant.id
    const quantity = Number(event.target.quantity.value)
    const total = this.props.plant.price * quantity
    const cart = this.props.cart

    if (this.props.isLoggedIn) {
      if (!cart.length) {
        this.props.addPlant({
          plantId,
          quantity,
          total
        })
      } else {
        const existingPlant = cart.filter(cartItem => cartItem.id === plantId)

        if (existingPlant.length) {
          this.props.updatePlant({
            quantity: existingPlant[0].cartItem.quantity + quantity,
            total: existingPlant[0].cartItem.total + total,
            plantId
          })
        } else {
          this.props.addPlant({
            plantId,
            quantity,
            total
          })
        }
      }
    } else {
      const newPlant = {
        quantity,
        total,
        plant
      }
      let localStorageCart = JSON.parse(localStorage.getItem('cart'))
      if (!localStorageCart) {
        localStorageCart = []
      }
      if (localStorageCart.length) {
        const foundIndex = localStorageCart.findIndex(
          cartItem => cartItem.plant.id === plantId
        )
        if (foundIndex > -1) {
          localStorageCart[foundIndex].quantity =
            localStorageCart[foundIndex].quantity + quantity
          localStorageCart[foundIndex].total =
            localStorageCart[foundIndex].total + total
          localStorageCart.splice(foundIndex, 1, localStorageCart[foundIndex])
        } else {
          localStorageCart.push(newPlant)
        }
      } else {
        localStorageCart.push(newPlant)
      }
      localStorage.setItem('cart', JSON.stringify(localStorageCart))
    }

    //     if the array in local storage has length
    //     search through the array for the current plant
    //         if current plant exists
    //             update the qty and total in the array
    //         if it doesn’t
    //             push it to the end of the array
    //         if it doesn’t have length
    //           push the plant into the array
  }

  render() {
    const plant = this.props.plant

    return (
      <div className="single-plant-wrapper">
        <div className="single-plant-img">
          <img src={plant.imageURI} />
        </div>
        <div className="single-plant-info">
          <div className="plant-head">
            <h1>{plant.name}</h1>
            <h3>${plant.price}.00</h3>
          </div>
          <p>{plant.description}</p>
          <form onSubmit={this.handleSubmit}>
            Qty:
            <select name="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button className="submit-button" type="submit">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  plant: state.plants.singlePlant,
  cart: state.userCart.cart,
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadPlant: id => dispatch(getSinglePlantThunk(id)),
  addPlant: plantInfo => dispatch(addPlantToCartThunk(plantInfo)),
  updatePlant: plantInfo => dispatch(updatePlantInCartThunk(plantInfo)),
  loadCart: () => dispatch(getCartThunk()),
  loadInitialData: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(SinglePlant)

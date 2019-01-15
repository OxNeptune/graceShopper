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
    let orderTotal = JSON.parse(localStorage.getItem('OrderTotal'))
    if (!orderTotal) {
      orderTotal = 0
    }
    if (this.props.isLoggedIn) {
      if (!cart.length) {
        this.props.addPlant({
          plantId,
          quantity,
          total
        })
        orderTotal += total
      } else {
        const existingPlant = cart.filter(cartItem => cartItem.id === plantId)

        if (existingPlant.length) {
          this.props.updatePlant({
            quantity: existingPlant[0].cartItem.quantity + quantity,
            total: existingPlant[0].cartItem.total + total,
            plantId
          })
          orderTotal += total
        } else {
          this.props.addPlant({
            plantId,
            quantity,
            total
          })
          orderTotal += total
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
          orderTotal += total
        } else {
          localStorageCart.push(newPlant)
          orderTotal += total
        }
      } else {
        localStorageCart.push(newPlant)
        orderTotal += total
      }
      localStorage.setItem('cart', JSON.stringify(localStorageCart))
    }
    localStorage.setItem('OrderTotal', JSON.stringify(orderTotal))
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
            <button type="submit">Add to Cart</button>
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

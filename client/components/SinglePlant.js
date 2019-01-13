import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/plants'
import {
  addPlantToCartThunk,
  updatePlantInCartThunk,
  getCartThunk
} from '../store/userCart'

class SinglePlant extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadPlant(this.props.match.params.id)
    this.props.loadCart()
  }

  handleSubmit = event => {
    event.preventDefault()
    const plantId = this.props.plant.id
    const quantity = event.target.quantity.value
    const total = this.props.plant.price * quantity
    const cart = this.props.cart
    console.log('cart:', cart)

    if (cart.length) {
      cart.forEach(cartItem => {
        console.log(cartItem.id, plantId)
        if (cartItem.id === plantId) {
          console.log('woo!')
          this.props.updatePlant({
            quantity: cartItem.quantity + quantity,
            total: cartItem.total + total,
            plantId
          })
        }
      })
    } else {
      this.props.addPlant({
        plantId,
        quantity,
        total
      })
    }
  }

  render() {
    const plant = this.props.plant

    return (
      <div className="single-plant-wrapper">
        <img src={plant.imageURI} />
        <h2>{plant.name}</h2>
        <h4>${plant.price}.00</h4>
        <p>{plant.description}</p>
        <span>
          <form onSubmit={this.handleSubmit}>
            Qty:
            <select name="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            Size:
            <select name="Size">
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
            <button type="submit">Add to Cart</button>
          </form>
        </span>
      </div>
    )
  }
}

const mapState = state => ({
  plant: state.plants.singlePlant,
  cart: state.userCart.cart
})

const mapDispatch = dispatch => ({
  loadPlant: id => dispatch(getSinglePlantThunk(id)),
  addPlant: plantInfo => dispatch(addPlantToCartThunk(plantInfo)),
  updatePlant: plantInfo => dispatch(updatePlantInCartThunk(plantInfo)),
  loadCart: () => dispatch(getCartThunk())
})

export default connect(mapState, mapDispatch)(SinglePlant)

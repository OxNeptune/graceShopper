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
    const quantity = Number(event.target.quantity.value)
    const total = this.props.plant.price * quantity
    const cart = this.props.cart

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
            {/* Size:
            <select name="Size">
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select> */}
            <button type="submit">Add to Cart</button>

          </form>
        </div>


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

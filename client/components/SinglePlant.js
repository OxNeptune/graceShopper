import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/plants'
import {addPlantToCartThunk} from '../store/userCart'

class SinglePlant extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadPlant(this.props.match.params.id)
  }

  handleSubmit = event => {
    event.preventDefault()
    const plantId = this.props.plant.id
    const quantity = event.target.quantity.value
    const total = this.props.plant.price * quantity
    this.props.addPlant({
      plantId,
      quantity,
      total
    })
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
            <div>
              <p>Qty:</p>
              <select name="Quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <p>Size:</p>
              <select name="Size">
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Add to Cart
            </button>
          </form>
        </div>


      </div>
    )
  }
}

const mapState = state => ({
  plant: state.plants.singlePlant
})

const mapDispatch = dispatch => ({
  loadPlant: id => dispatch(getSinglePlantThunk(id)),
  addPlant: plantInfo => dispatch(addPlantToCartThunk(plantInfo))
})

export default connect(mapState, mapDispatch)(SinglePlant)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePlantThunk} from '../store/plants'

class SinglePlant extends Component {
  componentDidMount() {
    this.props.loadPlant(this.props.match.params.id)
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
          Qty:
          <select name="Qty">
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
        </span>
      </div>
    )
  }
}

const mapState = state => ({
  plant: state.plants.singlePlant
})

const mapDispatch = dispatch => ({
  loadPlant: id => dispatch(getSinglePlantThunk(id))
})

export default connect(mapState, mapDispatch)(SinglePlant)

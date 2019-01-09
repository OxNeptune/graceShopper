import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPlantsThunk} from '../store/plants'

class PlantList extends Component {
  constructor(props) {
    super(props)
    // this.showPlant = this.showPlant.bind(this)
  }

  componentDidMount() {
    this.props.loadPlants()
  }

  // showplant(id) {
  //   this.props.history.push(`/plant/${id}`) // changes my url bar
  // }

  render() {
    const plantList = this.props.plants
    console.log('here is the plantList Array:', plantList)

    return (
      <div className="plant-list-wrapper">
        <h2 id="plant-list-title">Plant List</h2>
        <div className="plant-list">
          {plantList.map(plant => (
            <ul key={plant.id}>
              <li>
                <img src={plant.image} />
                {plant.name} ${plant.price}
              </li>
            </ul>
          ))}
        </div>
        {/* <button
          className="add-button"
          type="button"
          onClick={() => {
            this.props.history.push('/plants/add')
          }}
        >
          Add plant
        </button> */}
      </div>
    )
  }
}

function mapState(state) {
  return {
    plants: state.plants
  }
}

function mapDispatch(dispatch) {
  return {
    loadPlants: () => dispatch(getPlantsThunk())
    // removePlant: plantId => dispatch(removePlant(plantId))
    // submitPlant: plant => dispatch(submitPlant(plant))
  }
}

export default connect(mapState, mapDispatch)(PlantList)

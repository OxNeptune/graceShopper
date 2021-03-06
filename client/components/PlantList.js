import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPlantsThunk} from '../store/plants'
import {Link} from 'react-router-dom'

export class PlantList extends Component {
  componentDidMount() {
    this.props.loadPlants()
  }

  // showplant(id) {
  //   this.props.history.push(`/plant/${id}`) // changes my url bar
  // }

  render() {
    const plantList = this.props.plants

    return (
      <div className="plant-list-wrapper">
        <div className="banner">
          <div className="banner-text">
            <h1>Turn Over A New Leaf in 2019</h1>
          </div>
        </div>
        <h2 id="plant-list-title">All Plants</h2>
        <div className="plant-list">
          {plantList.map(plant => (
            <div key={plant.id} className="plant-card">
              <Link to={`/plants/${plant.id}`}>
                <img src={plant.imageURI} />
                <div className="card-info">
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                </div>
              </Link>
            </div>
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
    plants: state.plants.plants
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

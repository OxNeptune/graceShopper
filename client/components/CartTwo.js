import React, {Component} from 'react'

export class CartTwo extends Component {
  render() {
    const cart = this.props.cart

    return (
      <div className="cart-wrapper">
        <h2 id="plant-list-title">Your Cart</h2>
        <div className="cart">
          {cart.map(plant => (
            <div key={plant.plant.id} className="cart-card">
              <div className="cart-img">
                <img src={plant.plant.imageURI} />
              </div>
              <div className="cart-info">
                <h1>{plant.plant.name}</h1>
                <h4>
                  {' '}
                  Each: ${plant.plant.price} x Quantity: {plant.quantity}
                </h4>
                <h3>Total: ${plant.total}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

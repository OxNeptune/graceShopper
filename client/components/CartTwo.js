import React, {Component} from 'react'

export class CartTwo extends Component {
  render() {
    const cart = this.props.cart

    return (
      <div className="cart-wrapper">
        <h2 id="cart-title">Your Cart</h2>
        <div className="cart">
          {cart.map(plant => (
            <div key={plant.plant.id}>
              <img src={plant.plant.imageURI} />
              {plant.plant.name} Each: ${plant.plant.price} x Quantity:{' '}
              {plant.quantity} = Total: ${plant.total}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

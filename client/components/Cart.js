import React, {Component} from 'react'

export class Cart extends Component {
  render() {
    const cart = this.props.cart
    console.log(cart)
    return (
      <div className="cart-wrapper">
        <h2 id="cart-title">Your Cart</h2>
        <div className="cart">
          {cart.map(plant => (
            <div key={plant.id}>
              <img src={plant.imageURI} />
              {plant.name} ${plant.price} {plant.quantity} ${plant.total}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

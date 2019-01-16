import React, {Component} from 'react'

export class Cart extends Component {
  render() {
    const cart = this.props.cart

    return (
      <div className="cart-wrapper">
        <h2 id="plant-list-title">Your Cart</h2>
        <div className="cart">
          {cart.map(plant => (
            <div key={plant.id} className="cart-card">
              <div className="cart-img">
                <img src={plant.imageURI} />
              </div>
              <div className="cart-info">
                <h1>{plant.name}</h1>
                <h4>Each: ${plant.price} x Quantity:</h4>
                <h3>
                  {plant.cartItem.quantity} = Total: ${plant.cartItem.total}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

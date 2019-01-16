import React from 'react'

export default function Orders(props) {
  // const cart = this.props.cart

  return (
    <div className="order-wrapper">
      <h4>Orders</h4>
      <div>These are my orders</div>
      {/* <div className="cart">
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
      </div> */}
    </div>
  )
}

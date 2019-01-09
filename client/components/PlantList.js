import React, {Component} from 'react'
// import Product from './Product';
// import {connect} from 'react-redux'
// import { fetchproductes, removeproduct } from '../reducers/productes';

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.showProduct = this.showProduct.bind(this)
  }

  // componentDidMount() {
  //   this.props.loadProducts()
  // }

  // showProduct(id) {
  //   this.props.history.push(`/product/${id}`) // changes my url bar
  // }

  render() {
    const productList = this.props.products

    return (
      <div className="product-list-wrapper">
        <h2 id="product-list-title">Product List</h2>
        <div className="product-list">
          {productList.map(product => (
            <Product
              product={product}
              key={product.id}
              showproduct={this.showproduct}
              removeproduct={this.props.removeproduct}
            />
          ))}
        </div>
        <button
          className="add-button"
          type="button"
          onClick={() => {
            this.props.history.push('/products/add')
          }}
        >
          Add product
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(fetchProductes()),
    removeProduct: productId => dispatch(removeProduct(productId))
    // submitproduct: product => dispatch(submitproduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

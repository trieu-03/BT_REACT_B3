import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal, addCart } = this.props;
    return (
      <div className='card'>
        <img src={item.image} alt={item.alias} />
        <div className='card-body'>
          <p>{item.name}</p>
          <p>{item.price.toLocaleString()}$</p>
          <button className='btn btn-success ' onClick={() => { setStateModal(item) }}
            type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Cart</button>
          <button className='btn btn-dark mx-2 ' onClick={() => addCart(item)}>
            Add Cart
            <i className="fa-solid fa-cart-plus" style={{ marginLeft: 5 }}></i>
          </button>
        </div>
      </div>
    )
  }
}
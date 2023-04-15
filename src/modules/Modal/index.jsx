import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { content, addCart } = this.props;

    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary  text-center">
                <h1 className="modal-title fs-2 text-light" id="exampleModalLabel">Show Cart</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body ">
                <div className='card'>
                  <img src={content.image} alt={content.alias} />
                  <div className='card-body bg-info'>
                    <p>{content.name}</p>
                    <p>{content.price.toLocaleString()}$</p>
                    <p>{content.description}</p>
                    <p>Code: {content.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer bg-secondary">
                <button className='btn btn-success mx-2' onClick={() => addCart(content)}>
                  Add Cart
                  <i className="fa-solid fa-cart-plus" style={{ marginLeft: 5 }}></i>
                </button>
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
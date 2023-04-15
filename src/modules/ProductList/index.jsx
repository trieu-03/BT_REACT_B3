import React, { Component } from 'react'
import ProductItem from '../ProductITem';

export default class ProductList extends Component {
    render() {
        const { productsData, setStateModal, addCart } = this.props;
        return (
            <div>
                <div className='row'>
                    {productsData.map((product) =>
                        <div className='col-4 p-3' key={product.id}>
                            <ProductItem item={product} setStateModal={setStateModal} addCart={addCart}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
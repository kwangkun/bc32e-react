import React, { Component } from 'react'

export default class Shoes extends Component {
    render() {
        console.log(this.props.product)
        const { product } = this.props

        return (
            <div>
                <div className="card">
                    <img src={this.props.product.image} alt="..." />
                    <div className="card-body">
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button className='btn btn-success'>Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        )
    }
}

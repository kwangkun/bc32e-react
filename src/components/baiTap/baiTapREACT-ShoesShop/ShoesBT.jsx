import React, { Component } from 'react'

export default class ShoesBT extends Component {
    render() {
        const { shoes } = this.props
        const { setStateModal } = this.props
        return (
            <div>
                <div className="card">
                    <img src={shoes.image} alt="..." />
                    <div className="card-body">
                        <p style={{ fontSize: '20px' }} className='font-weight-bolder'>{shoes.name}</p>
                        <p style={{ fontSize: '20px' }} className='font-weight-bold text-success'>${shoes.price}</p>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-primary'>Thêm vào giỏ</button>
                            <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#myModal" onClick={() => { setStateModal(shoes.id) }}>Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

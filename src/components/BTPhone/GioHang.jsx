import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const { cart } = this.props
        const { handleRemoveCart } = this.props
        const { handleQuantity } = this.props

        const renderCart = () => {
            return (
                cart.map((item) => {
                    return (
                        <tr key={item.maSP}>
                            <td>{item.maSP}</td>
                            <td>{item.tenSP}</td>
                            <td>
                                <img style={{ width: '80px' }} src={item.hinhAnh} alt="..." />
                            </td>
                            <td>{item.giaBan.toLocaleString()} VND</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { handleQuantity(item.maSP, -1) }}>-</button>
                                <span className='mx-2'>{item.soLuong}</span>
                                <button className='btn btn-success' onClick={() => { handleQuantity(item.maSP, 1) }}>+</button>
                            </td>
                            <td>{(item.giaBan * item.soLuong).toLocaleString()} VND</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { handleRemoveCart(item.maSP) }}> Xóa</button>
                            </td>
                        </tr >
                    )
                })
            )
        }

        return (
            <div>
                <div>
                    <div className='text-right my-4'>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            Giỏ hàng
                            <span className='ml-3'>
                                ({cart.length} - {' '}
                                {cart.reduce((tong, item) => {
                                    return (tong += item.soLuong * item.giaBan)
                                }, 0).toLocaleString()} VNĐ
                                )
                            </span>
                        </button>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Giỏ Hàng</h5>

                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">x</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Mã SP</th>
                                                <th>Tên SP</th>
                                                <th>Hình Ảnh</th>
                                                <th>Giá Bán</th>
                                                <th>Số Lượng</th>
                                                <th>Tổng Tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderCart()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
    render() {
        const { phone } = this.props
        return (
            <div>
                <div className='row mt-5'>
                    <div className="col-4">
                        <img className='img-fluid' style={{ height: '380px' }} src={phone.hinhAnh} alt="" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{phone.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{phone.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera Trước</td>
                                    <td>{phone.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera Sau</td>
                                    <td>{phone.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAMh</td>
                                    <td>{phone.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{phone.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

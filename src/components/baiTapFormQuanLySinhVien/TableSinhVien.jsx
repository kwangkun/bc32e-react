import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    renderTableSinhVien = () => {
        const { mangSinhVien } = this.props
        return mangSinhVien.map((sinhVien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.sdt}</td>
                    <td>{sinhVien.email}</td>
                    <td>
                        <button className='btn btn-danger mr-4'
                            onClick={() => {
                                this.props.dispatch({
                                    type: 'DELETE_STUDENT',
                                    payload: sinhVien.maSV,
                                })
                            }}
                        >Del</button>
                        <button className='btn btn-warning '
                            onClick={() => {
                                this.props.dispatch({
                                    type: 'EDIT_STUDENT',
                                    payload: sinhVien.maSV,
                                })
                            }}
                        >Edit</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props.mangSinhVien)

        return (
            <div className=''>
                <table className='table'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps, null)(TableSinhVien)
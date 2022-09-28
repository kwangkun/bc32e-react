import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung'

export default class BTQuanLyNguoiDung extends Component {
    render() {
        return (
            <div className='max-w-7xl m-auto'>
                <FormDangKy />
                <TableDanhSachNguoiDung />
            </div>
        )
    }
}

import React, { Component } from 'react'
import ChiTietSanPham from './ChiTietSanPham'
import data from './data.json'
import GioHang from './GioHang'
import PhoneList from './PhoneList'

export default class BaiTapPhoneRedux extends Component {
    render() {
        return (
            <div className='container'>
                <GioHang />
                <PhoneList data={data} />
                <ChiTietSanPham />
            </div>
        )
    }
}

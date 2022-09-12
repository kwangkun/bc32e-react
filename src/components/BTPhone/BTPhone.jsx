import React, { Component } from 'react'
import ChiTietSanPham from './ChiTietSanPham'
import data from './data.json'
import GioHang from './GioHang'
import Phone from './Phone'

export default class BTPhone extends Component {
    state = {
        phoneDefault: {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./images/BTPhone/img-BTPhone/vsphone.jpg"
        },

        cart: [
            // {
            //     maSP: 1,
            //     tenSP: "VinSmart Live",
            //     manHinh: "AMOLED, 6.2, Full HD+",
            //     heDieuHanh: "Android 9.0 (Pie)",
            //     cameraTruoc: "20 MP",
            //     cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            //     ram: "4 GB",
            //     rom: "64 GB",
            //     giaBan: 5700000,
            //     hinhAnh: "./images/BTPhone/img-BTPhone/vsphone.jpg",
            //     soLuong: 1,
            // },
        ],
    }

    handlePhoneDefault = (phone) => {
        console.log(phone)
        this.setState({
            phoneDefault: phone
        })
    }

    handleCart = (phoneClick) => {
        // Spread Operator:
        const giaTri = { ...phoneClick, soLuong: 1 }
        const duLieu = [...this.state.cart]

        const index = duLieu.findIndex((phone) => phone.maSP === phoneClick.maSP)
        console.log(phoneClick)
        if (index !== -1) {
            duLieu[index].soLuong += 1
        } else {
            duLieu.push(giaTri)
        }
        // Set lại state, thêm vào state sản phẩm dc click
        this.setState({
            cart: duLieu
        })
    }

    handleRemoveCart = (maSP) => {
        // console.log(maSP)
        // const duLieu = this.state.cart.filter((item) => {
        //     return item.maSP !== maSP
        // })

        const duLieu = this.state.cart.filter((item) => item.maSP !== maSP)

        this.setState({
            cart: duLieu,
        })
    }

    handleQuantity = (maSP, quant) => {
        // console.log(maSP);
        // console.log('quant:', quant);

        const duLieu = [...this.state.cart]

        // findIndex
        const index = duLieu.findIndex((sanPham) => sanPham.maSP === maSP)

        // duLieu[index].soLuong += quant
        if (duLieu[index].soLuong > 1 || quant > 0) {
            duLieu[index].soLuong += quant
        } else if (window.confirm('Bạn có muốn xóa sản phẩm này không?')) {
            duLieu.splice(index, 1)
        }

        this.setState({
            cart: duLieu,
        })
    }

    render() {
        return (
            <div>
                <div className="container mb-5">
                    {/* Giỏ Hàng */}
                    <GioHang cart={this.state.cart} handleRemoveCart={this.handleRemoveCart} handleQuantity={this.handleQuantity} />

                    {/* Danh Sách SP */}
                    <div className="row mt-3">
                        {
                            data.map((phone) => {
                                return (
                                    <div className='col-4' key={phone.maSP}>
                                        <Phone propsFunction={this.handlePhoneDefault} prodInfo={phone} funcHandleCart={this.handleCart} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Chi Tiết Sản Phẩm */}
                    <ChiTietSanPham phone={this.state.phoneDefault} />
                </div>
            </div>
        )
    }
}

const stateDefault = {
    phoneSelect: {
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
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./images/BTPhone/img-BTPhone/vsphone.jpg",
            soLuong: 1,
        },
    ],
}

export const baiTapPhone = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'CHANGE_PRODUCT_SELECTED': {
            state.phoneSelect = payload
            return { ...state }
        }

        case 'ADD_TO_CART': {
            const newData = { ...state }
            const index = newData.cart.findIndex((sanPham) => sanPham.maSP === payload.maSP)

            if (index !== -1) {
                newData.cart[index].soLuong += 1
            } else {
                newData.cart.push({ ...payload, soLuong: 1 })
            }
            return { ...newData, cart: [...newData.cart] }
        }

        case 'REMOVE_CART': {
            const data = [...state.cart]
            const index = data.findIndex((sanPham) => sanPham.maSP === payload)
            data.splice(index, 1)

            return { ...state, cart: data }
        }

        case 'HANDLE_QUANTITY': {
            const data = [...state.cart]
            const index = data.findIndex((sanPham) => sanPham.maSP === payload.maSP)
            // data[index].soLuong += payload.quant
            if (data[index].soLuong > 1 || payload.quant > 0) {
                data[index].soLuong += payload.quant
            } else if (window.confirm('Bạn có muốn xóa sản phẩm này không?')) {
                data.splice(index, 1)
            }

            return { ...state, cart: data }
        }

        default: return state
    }
}
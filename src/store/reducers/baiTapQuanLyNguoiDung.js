const stateDefault = {
    mangNguoiDung: [
        // {
        //     id: 12345,
        //     userName: 'kimQuang',
        //     fullName: 'Pham Kim Quang',
        //     email: 'quangpham@abc.xyz',
        //     phoneNumber: 8987654321,
        //     type: 'Admin',
        // },
        // {
        //     id: 22345,
        //     userName: 'kennySang',
        //     fullName: 'Nguyen Dinh Sang',
        //     email: 'sangkenny@abc.xyz',
        //     phoneNumber: 123987650,
        //     type: 'Client',
        // },
    ],
    selectedUser: null,
}

export const baiTapQuanLyNguoiDung = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'ADD_USER': {
            const data = [...state.mangNguoiDung]
            const user = { ...payload, id: Date.now() }
            data.push(user)
            console.log(user);
            return { ...state, mangNguoiDung: data }
        }
        case 'DELETE_USER': {
            const data = state.mangNguoiDung.filter(item => item.id !== payload)
            return { ...state, mangNguoiDung: data }
        }
        case 'EDIT_USER': {
            const user = state.mangNguoiDung.find((item) => item.id === payload)
            return { ...state, selectedUser: user }
        }
        case 'UPDATE_USER': {
            // const newUserList = state.mangNguoiDung.map((item) => {
            //     if (item.id === payload.id) {
            //         return payload
            //     } return item
            // })

            const newUserList = state.mangNguoiDung.map((item) => item.id === payload.id ? payload : item)
            state.selectedUser = null

            return { ...state, mangNguoiDung: newUserList }
        }
        default: return state
    }
}
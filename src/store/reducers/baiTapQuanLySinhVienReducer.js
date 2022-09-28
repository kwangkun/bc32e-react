const stateDefault = {
    mangSinhVien: [
        {
            maSV: 1,
            hoTen: 'Nguyen Van A',
            sdt: 123412341,
            email: 'vanA@abc.xyz',
        },
    ],
    selectedStudent: null,
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_STUDENT': {
            const mangSinhVienUpdate = [...state.mangSinhVien, action.sinhVien]
            state.mangSinhVien = mangSinhVienUpdate
            return { ...state }

        }
        case 'DELETE_STUDENT': {
            const data = state.mangSinhVien.filter(item => item.maSV !== action.payload)
            return { ...state, mangSinhVien: data }
        }
        case 'EDIT_STUDENT': {
            const student = state.mangSinhVien.find(item => item.maSV === action.payload)
            return { ...state, mangSinhVien: student }
        }
        default: return { ...state }
    }

} 
const stateDefault = {
    isTai: true,
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        {
            hinhAnh: "./images/BTXucXac/1.png",
            diem: 1,
        },
        {
            hinhAnh: "./images/BTXucXac/2.png",
            diem: 2,
        },
        {
            hinhAnh: "./images/BTXucXac/3.png",
            diem: 3,
        }
    ]
}

export const baiTapXucXac = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'DAT_CUOC': {
            state.isTai = payload
            return { ...state }
        }
        case 'PLAY': {
            // Cách 1
            // let mangXucXacNew = []
            // for (let i = 0; i < 3; i++) {
            //     // tạo số ngẫu nhiên từ 1-6
            //     const num = Math.floor(Math.random() * 6) + 1
            //     const xucXac = {
            //         hinhAnh: `./images/BTXucXac/${num}.png`,
            //         diem: num
            //     }
            //     mangXucXacNew.push(xucXac)
            // }
            // return { ...state, mangXucXac: mangXucXacNew }

            // Cách 2
            const mangXucXacNew = [...Array(3)].map((_, __) => {
                const num = Math.floor(Math.random() * 6) + 1
                return {
                    hinhAnh: `./images/BTXucXac/${num}.png`,
                    diem: num,
                }
            })

            // Tính tổng điểm từ mảng
            const total = mangXucXacNew.reduce((sum, item) => {
                return sum += item.diem
            }, 0)

            console.log(total)
            // (state.isTai && total % 2 === 0) || (!state.isTai && total % 2 !== 0)
            // if (state.isTai && total >= 11 && total <= 17)||(!state.isTai && total >=3 && total <=10)
            if ((state.isTai && total >= 11 && total <= 17) || (!state.isTai && total >= 3 && total <= 10)) {
                state.soBanThang += 1
            }

            // Tính số bàn chơi
            state.soBanChoi += 1

            return { ...state, mangXucXac: mangXucXacNew }
        }
        default: return { ...state }
    }
}
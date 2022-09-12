import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        const {
            ketQua: { isTai },
            soBanThang,
            soBanChoi,
        } = this.props
        return (
            <div>
                <div className='mt-[20xp] text-center'>
                    <p className='text-[50px] font-bold'>Bạn chọn: {isTai ? 'Tài' : 'Xỉu'}</p>
                    <p className='text-[50px] font-bold'>Số bàn thắng: {soBanChoi}</p>
                    <p className='text-[50px] font-bold'>Số màn chơi: {soBanChoi}</p>
                    <button className='bg-green-400 rounded-xl text-[30px] text-white hover:bg-green-900 px-6 py-7'>PLAY</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.baiTapXucXac,
    }
}

export default connect(mapStateToProps)(KetQua)
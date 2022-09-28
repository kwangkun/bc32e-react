import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        const {
            ketQua: { isTai,
                soBanThang,
                soBanChoi, }
        } = this.props
        return (
            <div>
                <div className='mt-[20xp] text-center'>
                    <p className='text-[50px] font-bold'>Bạn chọn: <span className='text-red-500'>{isTai ? 'Tài' : 'Xỉu'}</span> </p>
                    <p className='text-[50px] font-bold'>Số bàn thắng: <span className='text-green-500'>{soBanThang}</span></p>
                    <p className='text-[50px] font-bold'>Số màn chơi: <span className='text-pink-500'>{soBanChoi}</span></p>
                    <button className='bg-green-400 rounded-xl text-[30px] text-white hover:bg-green-900 px-6 py-7'
                        onClick={() => {
                            this.props.dispatch({
                                type: 'PLAY',
                                
                            })
                        }}
                    >PLAY</button>
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
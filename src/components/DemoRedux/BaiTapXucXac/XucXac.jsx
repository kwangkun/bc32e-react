import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {

        const { mangXucXac, isTai } = this.props

        return (
            <div>
                <h1 className='text-center font-bold text-red-500 text-[80px]'>GAME ĐỔ XÚC XẮC</h1>
                <div className='flex gap-[100px] justify-center mt-[20px]'>
                    <div className={`cursor-pointer w-[120px] h-[120px] text-[40px] font-bold rounded-[10px] text-white  flex items-center justify-center ${isTai ? 'bg-red-500' : 'bg-blue-500'}`}

                        onClick={() => {
                            this.props.dispatch({
                                type: 'DAT_CUOC',
                                payload: true,
                            })
                        }}
                    >TÀI</div>
                    <div className='flex'>
                        {mangXucXac.map((item, index) => {
                            return (
                                < img key={index} className='w-[120px] object-cover object-center' src={item.hinhAnh} alt="..." />
                            )
                        })}
                    </div>
                    <div className={`cursor-pointer w-[120px] h-[120px] text-[40px] font-bold rounded-[10px] text-white flex items-center justify-center ${isTai ? 'bg-blue-500' : 'bg-red-500'}`}
                        onClick={() => {
                            this.props.dispatch({
                                type: 'DAT_CUOC',
                                payload: false,
                            })
                        }}
                    >XỈU</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.baiTapXucXac.mangXucXac,
        isTai: state.baiTapXucXac.isTai,
    }
}

export default connect(mapStateToProps)(XucXac)
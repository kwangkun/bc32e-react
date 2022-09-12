import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            <div>
                <h1 className='text-center font-bold text-red-500 text-[80px]'>GAME ĐỔ XÚC XẮC</h1>
                <div className='flex gap-[100px] justify-center mt-[20px]'>
                    <div className='cursor-pointer w-[120px] h-[120px] text-[40px] font-bold rounded-[10px] text-white bg-blue-500 flex items-center justify-center'>TÀI</div>
                    <div className='flex'>
                        <img className='w-[120px] object-cover object-center' src="./images/BTXucXac/1.png" alt="..." />
                        <img className='w-[120px] object-cover object-center' src="./images/BTXucXac/2.png" alt="..." />
                        <img className='w-[120px] object-cover object-center' src="./images/BTXucXac/3.png" alt="..." />
                    </div>
                    <div className='cursor-pointer w-[120px] h-[120px] text-[40px] font-bold rounded-[10px] text-white bg-blue-500 flex items-center justify-center'>XỈU</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps)(XucXac)
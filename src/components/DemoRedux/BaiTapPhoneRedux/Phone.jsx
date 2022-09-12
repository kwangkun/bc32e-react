import React, { Component } from 'react'
import { connect } from 'react-redux'

class Phone extends Component {
    render() {
        const { prodInfo, propsFunction, funcHandleCart } = this.props
        return (
            <div>
                <div className="card">
                    <img style={{ height: '350px' }} src={prodInfo.hinhAnh} alt="" />
                    <div className="card-body">
                        <p>{prodInfo.tenSP}</p>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-info'
                                onClick={() => { propsFunction(prodInfo) }}
                            >Xem chi tiết</button>
                            <button className='btn btn-success' onClick={() => { funcHandleCart(prodInfo) }}>Thêm vào giỏ</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propsFunction: (prodDetails)=>{
            dispatch ({
                type: 'CHANGE_PRODUCT_SELECTED',
                payload: prodDetails,
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Phone)
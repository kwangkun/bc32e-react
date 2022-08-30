import React, { Component } from 'react'

export default class InfoModal extends Component {
    render() {
        const { shoesName } = this.props
        const { shoesDesc } = this.props
        const { shoesPrice } = this.props
        const { shoesQuant } = this.props

        return (
            <div>
                <div>
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">
                                        <span className='font-weight-bolder'>{shoesName}</span>
                                    </h4>
                                    <button type="button" className="close" data-dismiss="modal">x</button>
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    <b> Details: </b>{shoesDesc} <br />
                                    <b> Price: </b><span className='text-success font-weight-bold'>${shoesPrice}</span> <br />
                                    <b> In Stock: </b><span className='text-success'>{shoesQuant}</span>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="button" className="btn btn-primary">Thêm vào giỏ</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

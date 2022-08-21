import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: './images/products/black-car.jpg'
    }
    changeColor = (color) => {
        // const newState = {
        //     srcImg: `./images/products/${color}-car.jpg`
        // }
        // this.setState(newState)
        this.setState({
            srcImg: `./images/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div>
                <h2>Bài tập chọn xe</h2>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' id='imgChange' src={this.state.srcImg} alt="" />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-around">
                        <div onClick={() => this.changeColor('black')}>
                            <img width={50} src="./images/icons/icon-black.jpg" alt="" />
                            <span className='ml-3'>BLACK</span>
                        </div>
                        <div onClick={() => this.changeColor('red')}>
                            <img width={50} src="./images/icons/icon-red.jpg" alt="" />
                            <span className='ml-3'>RED</span>
                        </div>
                        <div onClick={() => this.changeColor('silver')}>
                            <img width={50} src="./images/icons/icon-silver.jpg" alt="" />
                            <span className='ml-3'>SILVER</span>
                        </div>
                        <div onClick={() => this.changeColor('steel')}>
                            <img width={50} src="./images/icons/icon-steel.jpg" alt="" />
                            <span className='ml-3'>STEEL</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class State extends Component {
    /**  state là obj đặc biệt của class component
    * dùng để lưu trữ dữ liệu của component và phản hồi các tương tác của người dùng
    * khi state thay đổi thì component sẽ được render lại (Hàm render sẽ được chạy lại)
    * state không thể thay đổi được bằng cách gán giá trị trực tiếp mà phải thông qua hàm setState
    * hàm setState là 1 hàm bất đồng bộ!
    */
    state = {
        // biến có giá trị boolean, tên có chữ "i" đầu tiên, ex: isLogin
        isShowMessage: true,
        number: 1,
    }

    showMessage = () => {
        // this.state.isShowMessage = true;
        const newState = {
            isShowMessage: true,
        }
        this.setState(newState);
    }

    hideMessage = () => {
        console.log('state before:', this.state.isShowMessage);
        const newState = {
            isShowMessage: false,
        }
        this.setState(newState, () => {
            // callback này được chạy sau khi quá trình thay đổi state hoàn thành
            console.log('state after:', this.state.isShowMessage);
        });
    }

    increase = () => {
        const newState = {
            number: this.state.number + 1
        }

        // this.setState(newState)
        // this.setState(newState)
        // khi muốn sử dụng giá trị của state để tính toán logic thì phải sử dụng callback (để tránh bất đồng bộ)
        this.setState((state) => {
            console.log('state:', state);
            return {
                number: state.number + 1,
            }
        })
        this.setState((state) => {
            return {
                number: state.number + 1,
            }
        })
    }
    decrease = () => {
        const newState = {
            number: this.state.number - 1
        }

        this.setState(newState)
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <button className="btn btn-success" onClick={this.showMessage}>Show</button>
                    <button className="btn btn-danger ml-5" onClick={this.hideMessage}>Hide</button>
                </div>

                {this.state.isShowMessage && (
                    <p className='text-danger display-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, veniam! Lorem, ipsum.</p>
                )}
                <hr />
                <div className='text-center'>
                    <h1>{this.state.number}</h1>
                    <button className="btn btn-success mr-5" onClick={this.increase}>+</button>
                    <button className="btn btn-danger" onClick={this.decrease}>-</button>
                </div>
            </div>
        )
    }
}

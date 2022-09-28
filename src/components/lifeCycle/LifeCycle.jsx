import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycle extends Component {

    /**
         * Life Cycle có 3 giai đoạn
         * MOUNTING: Khởi tạo component.
         *  - constructor: khởi tạo state hoặc bind this vào method.
         *  - getDerivedStateFromProps: sử dụng để update state trước khi render ra giao diện.
         *  - render: render ra giao diện.
         *  - componentDidMount: dừng để call API... (chỉ chạy duy nhất 1 lần sau khi component dc render ra giao diện).
         * UPDATING: Update component, chạy khi component nhận props mới hoặc setState được gọi.
         *  - getDerivedStateFromProps: được sử dụng để chuyển props thành state trong nội bộ component.
         *  - shouldComponentUpdate: sử dụng để hạn chế việc rerender ko cần thiết (tối ưu performance).
         *  - render: render ra giao diện.
         *  - getSnapShotBeforeUpdate: được sử dụng để lấy giá trị trước khi update DOM.
         *  - componentDidUpdate: lấy giá trị từ getSnapShotBeforeUpdate hoặc xử lý call API.
         * UNMOUNTING: Trước khi component bị hủy.
         *  - componentWillUnmount: chạy trước khi component bị hủy, dùng để clear các sự kiện như setTimeout, setInterval...
         */

    constructor() {
        super();
        console.log('constructor:');
        this.state = {
            number: 10,
            like: 1,
        }
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log('getDerivedStateFromProps');
        // currentState.number = 20;
        return currentState
    }

    render() {

        console.log('render');



        return (
            <div className='container'>
                <p className='text-red-500 text-[70px]'>{this.state.number}</p>
                <p className='text-pink-400 text-[70px]'>{this.state.like}</p>
                <button className='p-[10px] bg-green-300 hover:bg-red-500'
                    onClick={() => {
                        this.setState({ number: this.state.number + 1 })
                    }}
                >INCREASE NUMBER</button>

                <button className='ml-5 p-[10px] bg-green-300 hover:bg-red-500'
                    onClick={() => {
                        this.setState({ like: this.state.like + 1 })
                    }}
                >INCREASE LIKE</button>

                {this.state.number < 13 && (
                    <Child number={this.state.number} student={{ name: 'Kim Quang' }} />
                )}

            </div>
        )
    }

    componentDidMount() {
        // Call API
        console.log('componentDidMount');
    }
}

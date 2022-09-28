import React, { Component, createRef } from 'react'
import { PureComponent } from 'react';

// Purecomponent sẽ tự động handle shouldComponentUpdate 
// Purecomponent chỉ so sánh được dữ liệu primitive: string, number, null, boolean, undefined
// Ko so sánh dc dữ liệu reference: Obj, arrray, function

// !!! để có thể sử dụng shouldComponentUpdate thì phải extend từ Component bình thường
export default class Child extends Component {

    constructor() {
        console.log('child constructor');
        super()
        this.state = {
            number: 1,
        }
        this.numberRef = createRef()
        this.timeOut = setInterval(() => {
            console.log('TimedOut: HelloBC32E!');
        }, 1000)
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log('child getDerivedStateFromProps');
        console.log({ nextProps });
        currentState.number = nextProps.number
        return currentState
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Nếu return true thì component sẽ được rerender và ngược lại nếu return false
        if (this.props.number !== nextState.number) {
            return true
        } return false
    }

    render() {

        console.log('child render');

        return (
            <div>
                Child
                <p ref={this.numberRef}>Child's Number: {this.state.number}</p>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('child getSnapshotBeforeUpdate');
        console.log(this.numberRef.current.innerHTML);
        return null
    }

    componentDidMount() {
        console.log('child componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('child componentDidUpdate');
        if (this.state.number === 15) {
            console.log('call API at 15');
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeOut)
    }
}

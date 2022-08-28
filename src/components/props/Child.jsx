import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log(this.props);
        // this.props.name = 'Kim Quang' (props cứng)

        return (
            <div className='p-5 mt-3 text-white' style={{ backgroundColor: `${this.props.coloru}` }}>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.coloru}
                </div>
                <button className='mt-3 btn btn-success' onClick={() => this.props.logger?.('hello!!!')}>Func</button>
                
                {this.props.children}
            </div>
        )
    }
}

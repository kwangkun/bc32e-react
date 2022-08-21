import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className='p-5 bg-success text-white'>
                Content
            </div>
        )
    }
}

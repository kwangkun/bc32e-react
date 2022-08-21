import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    // props là dữ liệu truyền từ component cha xuống component con
    // props: properties ex: <button class="" (class is one of the props)></button>
    render() {
        return (
            <div>
                <Child content="BC32E" coloru="reddo" name="Kim Quang" src='đặt trùng props HTML ok luôn' />

            </div>
        )
    }
}

import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class AdminLayout extends Component {
    render() {
        return (
            <div>
                <p className='text-[40px] text-center mb-[20px]'>AdminLayout</p>
                <Outlet />
            </div>
        )
    }
}

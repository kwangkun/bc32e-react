import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        )
    }
}

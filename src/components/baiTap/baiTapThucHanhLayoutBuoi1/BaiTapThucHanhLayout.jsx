import React, { Component } from 'react'
import BodyBuoi1 from './BodyBuoi1'
import FooterBuoi1 from './FooterBuoi1'
import HeaderBuoi1 from './HeaderBuoi1'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderBuoi1 />
                <BodyBuoi1 />
                <FooterBuoi1 />
            </div>
        )
    }
}

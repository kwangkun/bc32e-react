import React, { Component } from 'react'
// styleSheet
import './style.css'
// module CSS
import styleTenGiCungDuoc from './style.module.css'

export default class StyleComponent extends Component {
    // Có 3 cách sử dụng CSS
    /**
     * 1. styleSheet: áp dụng cho toàn bộ project (Global CSS)
     * 2. inline: áp dụng riêng cho component sử dụng nó (Inline CSS ưu tiên cao hơn styleSheet)
     * 3. module: áp dụng riêng cho component sử dụng nó
     */

    render() {
        return (
            <div className='container'>
                <h2 style={{ color: "pink", fontSize: '50px', fontWeight: '700' }}>Style Component</h2>
                <p className='title'>CyberSoft BC32E</p>
                <p className={`${styleTenGiCungDuoc.headingModule} ${styleTenGiCungDuoc['headingWeight']} ${styleTenGiCungDuoc['about-heading']}`}>Hello BC32E</p>


            </div>
        )
    }
}


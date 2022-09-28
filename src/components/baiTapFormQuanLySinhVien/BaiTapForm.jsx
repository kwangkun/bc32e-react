import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapForm extends Component {
    render() {
        return (
            <div className='container'>
                <p>BaiTapForm</p>
                <FormSinhVien />
                <TableSinhVien />
            </div>
        )
    }
}

// const mapStateToProps 
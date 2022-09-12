import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoRedux extends Component {
    render() {
        console.log(this.props)
        const { tenGiCungDuoc, increase, decrase } = this.props
        return (
            <div className='container'>
                <p className='display-3'>Number: {tenGiCungDuoc}</p>
                <button className='btn btn-success mr-5' onClick={increase}>+</button>
                <button className='btn btn-danger' onClick={decrase}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducers) => {
    return {
        tenGiCungDuoc: rootReducers.demoRedux,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch({
                type: 'TĂNG_SỐ',
                payload: 1,
            })
        },

        decrase: () => {
            dispatch({
                type: 'GIẢM_SỐ',
                payload: -1,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux)
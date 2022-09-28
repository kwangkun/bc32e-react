import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVien extends Component {
    state = {
        values: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
        },
        errors: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
        },
        isValid: false
    }

    handleInput = (event) => {
        let inputTag = event.target
        let { name, value, type, pattern } = inputTag
        let errorMess = ''

        // KT rỗng
        if (value.trim() === '') {
            errorMess = name + ' không được để trống!'
        }

        // KT email
        if (type === 'email') {
            const regexEmail = new RegExp(pattern)
            if (!regexEmail.test(value)) {
                errorMess = name + ' không đúng định dạng!'
            }
        }

        if (name === 'sdt') {
            const regexEmail = new RegExp(pattern)
            if (!regexEmail.test(value)) {
                errorMess = name + ' không đúng định dạng!'
            }
        }

        let values = { ...this.state.values, [name]: value }
        let errors = { ...this.state.errors, [name]: errorMess }

        this.setState({
            ...this.state,
            values: values,
            errors: errors,
        }, () => {
            console.log(this.state);
            this.checkValidity()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.themSinhVien(this.state.values)
    }

    checkValidity = () => {
        let isValid = true
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '' || this.state.values[key] === '') {
                isValid = false
            }
        }

        this.setState({
            ...this.state,
            isValid: isValid
        })
    }

    static getDerivedStateFromProps = (nextProps, currentState) => {
        if (nextProps.selectedStudent && nextProps.selectedStudent.maSV !== currentState.values.maSV) {
            currentState.values = nextProps.selectedStudent
        }
        return currentState
    }

    render() {
        const { mangSinhVien } = this.props
        const { selectedStudent } = this.props
        const { maSV, hoTen, sdt, email } = { ...selectedStudent }

        return (
            <div>
                <div className="card text-left">
                    <div className="card-header bg-dark text-white">
                        <h3>Thông tin sinh viên</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã SV</span>
                                    <input className='form-control' name='maSV' value={maSV} onChange={this.handleInput} />
                                    <p className='text-danger'>{this.state.errors.maSV}</p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ Tên</span>
                                    <input className='form-control' name='hoTen' value={hoTen} onChange={this.handleInput} />
                                    <p className='text-danger'>{this.state.errors.hoTen}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Số Điện Thoại</span>
                                    <input className='form-control' name='sdt' pattern='^[0-9]+$' value={sdt} onChange={this.handleInput} />
                                    <p className='text-danger'>{this.state.errors.sdt}</p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input className='form-control' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' name='email' value={email} onChange={this.handleInput} />
                                    <p className='text-danger'>{this.state.errors.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-right">
                                    <div className="btn btn-primary mr-4"
                                        onClick={() => {
                                            this.props.dispatch({
                                                type: 'UPDATE_STUDENT',
                                                payload: mangSinhVien.maSV,
                                            })
                                        }}
                                    >Update</div>
                                    {this.state.isValid
                                        ? <button type='submit' className='btn btn-success'>Thêm Sinh Viên</button>
                                        : <button type='submit' className='btn btn-success' disabled>Thêm Sinh Viên</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'ADD_STUDENT',
                sinhVien,
            }
            dispatch(action)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        ...state.BaiTapQuanLySinhVienReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, updateUser } from '../../store/actions'

class FormDangKy extends Component {
    stateDefault = {
        userName: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        type: 'Client',
    }

    state = {
        valueS: this.stateDefault,
        errors: {},

    }

    handleState = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const { name, value } = event.target

        this.setState({
            // []: dynamic binding

            valueS: {
                ...this.state.valueS,
                [name]: value,
            }

        })
    }

    handleSubmit = (event) => {
        console.log('isValid? ', event.target.checkValidity())

        // Ngăn browser auto reload
        event.preventDefault()

        if (!event.target.checkValidity()) {
            return
        }

        // this.props.dispatch({
        //     type: 'ADD_USER',
        //     payload: this.state.valueS,
        // })

        // this.props.dispatch({
        //     type: this.props.selectedUser ? 'UPDATE_USER' : 'ADD_USER',
        //     payload: this.state.valueS,
        // })
        if (this.props.selectedUser) {
            this.props.dispatch(updateUser(this.state.valueS))
        } else {
            this.props.dispatch(addUser(this.state.valueS))
        }

        this.setState({
            valueS: this.stateDefault,
        })
    }

    handleBlur = (event) => {
        const { title, name, validationMessage, minLength, validity: { valueMissing, tooShort, patternMismatch }, } = event.target
        // const { valueMissing } = validity

        let mess = ''

        if (valueMissing) {
            mess = `${title} không được bỏ trống!`
        } if (tooShort) {
            mess = `${title} phải nhiều hơn ${minLength} ký tự!`
        } if (patternMismatch) {
            mess = `${title} phải đúng định dạng!`
        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: mess,
            },
        })
    }

    // Chuyển props thành state nội bộ
    static getDerivedStateFromProps = (nextProps, currentState) => {
        // console.log('nextProps: ', nextProps);
        // console.log('currentState: ', currentState);
        if (nextProps.selectedUser && nextProps.selectedUser.id !== currentState.valueS.id) {
            currentState.valueS = nextProps.selectedUser
        }

        return currentState
    }

    handleUpdate = () => {

    }

    render() {
        // console.log(this.state);

        // console.log(this.state);
        // const { selectedUser } = this.props
        const { userName, fullName, password, phoneNumber, email, type } = this.state.valueS
        // console.log(selectedUser);

        return (

            < form onSubmit={this.handleSubmit} noValidate>
                <div className='p-5 bg-black text-white text-2xl'>Form đăng ký</div>
                <div className='grid grid-cols-2 gap-[20px] mt-[10px]'>
                    <div>
                        <p>Tài khoản</p>
                        <input required type="text" name='userName' placeholder="Tài khoản" className="w-full border-2 border-black rounded-sm p-3" onChange={this.handleState} onBlur={this.handleBlur}
                            // onChange={(event) => this.handleState(event)}
                            minLength={4} maxLength={16}
                            title='Tài khoản'
                            value={userName}
                        />
                        <span className='text-red-600 text-[16px]'>{this.state.errors.userName}</span>
                    </div>
                    <div>
                        <p>Họ tên</p>
                        <input required type="text" name='fullName' placeholder="Họ tên" className="w-full border-2 border-black rounded-sm p-3" onChange={this.handleState} onBlur={this.handleBlur}
                            title='Họ và tên'
                            value={fullName}
                        />
                        <span className='text-red-600 text-[16px]'>{this.state.errors.fullName}</span>
                    </div>
                    <div>
                        <p>Mật khẩu</p>
                        <input required type="text" name='password' placeholder="Mật khẩu" className="w-full border-2 border-black rounded-sm p-3" onChange={this.handleState} onBlur={this.handleBlur}
                            title='Mật khẩu'
                            value={password}
                        />
                        <span className='text-red-600 text-[16px]'>{this.state.errors.password}</span>
                    </div>
                    <div>
                        <p>Số điện thoại</p>
                        <input required type="text" name='phoneNumber' placeholder="Số điện thoại" className="w-full border-2 border-black rounded-sm p-3" onChange={this.handleState} onBlur={this.handleBlur}
                            title='Số điện thoại'
                            value={phoneNumber}
                        />
                        <span className='text-red-600 text-[16px]'>{this.state.errors.phoneNumber}</span>
                    </div>
                    <div>
                        <p>Email</p>
                        <input required type="text" name='email' placeholder="Email" className="w-full border-2 border-black rounded-sm p-3" onChange={this.handleState} onBlur={this.handleBlur}
                            title='Email'
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                            value={email}
                        />
                        <span className='text-red-600 text-[16px]'>{this.state.errors.email}</span>
                    </div>
                    <div>
                        <p>Mã loại người dùng</p>
                        <select type="text" name='type' placeholder="Mã loại người dùng" className="w-full border-2 border-black rounded-sm p-3" onChange={this.handleState} onBlur={this.handleBlur}
                            value={type}
                        >
                            <option value={'Client'}>Client</option>
                            <option value={'Admin'}>Admin</option>
                        </select>
                    </div>
                </div>
                <div className='my-4'>
                    <button type='submit' className={`p-4 bg-blue-500 rounded-sm text-white cursor-pointer hover:bg-blue-700 mr-4 ${!this.props.selectedUser ? '' : 'hidden'}`}>
                        Đăng Ký
                    </button>
                    <button type='submit' className={`p-4 bg-green-500 rounded-sm text-white cursor-pointer hover:bg-green-700 mr-4 ${this.props.selectedUser ?? 'hidden'}`}>
                        Cập Nhật
                    </button>
                    <button type='reset' className='p-4 bg-red-500 rounded-sm text-white cursor-pointer hover:bg-red-700 mr-4'>
                        Clear
                    </button>
                </div>
            </form >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.baiTapQuanLyNguoiDung,
    }
}

export default connect(mapStateToProps)(FormDangKy)
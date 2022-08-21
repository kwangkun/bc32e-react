import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showAlert() {
        alert("You've clicked the button!")
    }

    showMessage(mess) {
        alert(mess)
    }

    // closure function (function in another function)
    // showMessage1(mess) {
    //     const show = () => {
    //         alert(mess);
    //     }

    //     // closure phải có return
    //     return show;
    // }

    showMessage1 = (mess) => () => {
        alert(mess)
    }

    // MỌI HÀM XỬ LÍ SỰ KIỆN ĐỀU CÓ THAM SỐ LÀ EVENT!!!
    showMessageEvent = (event) => {
        console.log(event);
        alert(event.target.innerHTML)
    }

    render() {
        return (
            <div>
                HandleEvent
                <div className='mt-5'>
                    {/* Đối với Hàm ko có tham số thì khi onclick để gọi chỉ cần truyền vào callback ko thêm dấu gọi hàm */}
                    <button className='btn btn-success' onClick={this.showAlert}>Click Me!</button>
                    {/* Cách 2 để tạo function */}
                    <br />
                    <button className='btn btn-warning mt-3'
                        onClick={() => {
                            alert("You've click the button 2!")
                        }}
                    >Click Me 2!</button>
                    {/* cách gọi hàm có tham số */}
                    <br />
                    <button className='btn btn-primary mt-3' onClick={() => {
                        this.showMessage("Cybersoft333")
                    }}>Click Me 3!</button>
                    {/* gọi closure function */}
                    <br />
                    <button className="btn btn-danger mt-3" onClick={this.showMessage1("Message 4: My Name is...")}>Click Me 4!</button>
                    {/*  */}
                    <br />
                    <button className="btn btn-success mt-3" onClick={(event) => {
                        this.showMessageEvent(event)
                        console.log("Current Target: ", event.currentTarget);
                    }}>Click Me Event!</button>
                </div>

                <div>
                    <input type="text" className="form-control" onChange={(datTenEventLaGiCungDuoc)=>{
                        console.log(datTenEventLaGiCungDuoc.target.value);
                        // currentTarget: thẻ cha ||| target: thẻ con (thẻ hiện tại)
                        // console.log("currentTarget: ",datTenEventLaGiCungDuoc.currentTarget.value);
                    }}/>
                </div>
            </div>
        )
    }
}

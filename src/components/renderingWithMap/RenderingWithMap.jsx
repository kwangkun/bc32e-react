import React, { Component } from 'react'

export default class RenderingWithMap extends Component {
    student = [
        {
            id: 1,
            name: 'Quang',
            age: 20,
            address: 'Bien Hoa'
        },
        {
            id: 2,
            name: 'Hải',
            age: 21,
            address: 'HCM'
        },
        {
            id: 3,
            name: 'Sang',
            age: 22,
            address: 'Ha Noi'
        }
    ]

    render() {
        return (
            <div className='container'>
                RenderingWithMap
                <table className='table mt-4'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {
                            this.student.map((value) => {
                                // bắt buộc phải có thuộc tính Key ở thẻ cha ngoài cùng
                                // giá trị của key là duy nhất (ko dc trùng lặp)
                                return <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.address}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

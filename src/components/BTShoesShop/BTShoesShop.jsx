import React, { Component } from 'react'
import data from './data.json'
import Shoes from './Shoes'

export default class BTShoesShop extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <h2 className='text-center'>BTShoesShop</h2>
                    <div className="row">
                        <div className="col-2">
                            <p>Sidebar</p>
                            <p>Addidas</p>
                            <p>Nike</p>
                            <p>Puma</p>
                            <p>Skecher</p>
                        </div>
                        <div className="col-10">
                            <div className="row">
                                {
                                    data.map((value) => {
                                        return <div className='col-4 my-3' key={value.id}>
                                            {/* <div className="card">
                                                <img src={value.image} alt="..." />
                                                <div className="card-body">
                                                    <p>{value.name}</p>
                                                    <p>${value.price}</p>
                                                    <button className='btn btn-success'>Thêm vào giỏ</button>
                                                </div>
                                            </div> */}
                                            <Shoes product={value} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import dataFilms from './DataFilms.json'

export default class BaiTapMovies extends Component {
    state = {
        isShowItems: true,
        phim: {
            "maPhim": 1284,
            "tenPhim": "Inside Out",
            "biDanh": "inside-out",
            "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/insideout.jpg",
            "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        }
    }

    // showItem = () => {
    //     this.setState({
    //         isShowItems: true
    //     })
    // }

    // hideItem = () => {
    //     this.setState({
    //         isShowItems: false
    //     })
    // }

    render() {
        return (
            <div className='container'>
                <h2>Bai Tap Movies</h2>
                <button className="btn btn-success mr-5" onClick={() => {
                    this.setState({
                        isShowItems: true,
                    })
                }}>Show</button>
                <button className="btn btn-danger" onClick={() => {
                    this.setState({
                        isShowItems: false,
                    })
                }}>Hide</button>
                <div className="row my-5">
                    <div className="col-6">
                        <img src={this.state.phim.hinhAnh} alt="..." />
                    </div>
                    <div className="col-6">
                        <p>{this.state.phim.tenPhim}</p>
                        <p>{this.state.phim.moTa}</p>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.state.isShowItems && (
                        dataFilms.map((films) => {
                            return <div className='col-3' key={films.maPhim}>
                                <div className="card">
                                    <img src={films.hinhAnh} alt={films.tenPhim} />
                                    <div className="card-body">
                                        <p>{films.tenPhim}</p>
                                        {/* <span>{films.moTa}</span> */}
                                    </div>
                                </div>
                                <button className='btn btn-success' onClick={() => {
                                    // console.log(films)
                                    this.setState({
                                        phim: films
                                    })
                                }}>Xem chi tiết</button>
                            </div>
                        }))
                    }
                </div>
            </div >
        )
    }
}

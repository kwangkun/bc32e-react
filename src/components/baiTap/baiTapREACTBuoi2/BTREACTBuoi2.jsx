import React, { Component } from 'react'
import './style.css'
import glassesData from './dataGlasses.json'

export default class BTREACTBuoi2 extends Component {
    state = {
        defaultGlass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./images/baiTap/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        imgSrc: '',
        imgName: '',
        imgPrice: '',
        imgDesc: '',
    }

    wearGlasses = (itemID) => {
        document.querySelector('.glasses-info').style.display = 'block';
        for (let i = 0; i < glassesData.length; i++) {
            if (glassesData[i].id === itemID) {
                this.setState({
                    imgSrc: `${glassesData[i].url}`,
                    imgName: `${glassesData[i].name}`,
                    imgPrice: `${glassesData[i].price}`,
                    imgDesc: `${glassesData[i].desc}`,
                });
            };
        };
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <h2>TRY GLASSES APP ONLINE</h2>
                </header>
                <img className='bg-img' src="./images/baiTap/glassesImage/background.jpg" alt="..." />
                <div className="container">
                    <div className="space"></div>

                    <div className="model-holder">
                        <div className="model model-left" id='avatar'>
                            <img src={this.state.imgSrc} alt="" />
                            <div className="glasses-info">
                                <h1 id="glassesName">{this.state.imgName}</h1>
                                <div id="glassesPrice_holder">
                                    <span id="glassesPrice">${this.state.imgPrice}</span>
                                    <span id="glassesStatus">Stocking</span>
                                </div>
                                <p id="glassesInformation">{this.state.imgDesc}</p>
                            </div>
                        </div>
                        <div className="model model-right">
                            <img src={this.state.defaultGlass.url} alt="" />
                            <div className="glasses-info-right">
                                <h1 id="glassesName">{this.state.defaultGlass.name}</h1>
                                <div id="glassesPrice_holder">
                                    <span id="glassesPrice">${this.state.defaultGlass.price}</span>
                                    <span id="glassesStatus">Stocking</span>
                                </div>
                                <p id="glassesInformation">{this.state.defaultGlass.desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="glasses-holder mt-5">
                        <div className="row" id='glasses-list'>
                            {
                                glassesData.map((glass) => {
                                    return (
                                        <div className="col-2 p-2" key={glass.id}>
                                            <img className='img-fluid border' id='glass-img' onClick={() => { this.wearGlasses(glass.id) }} src={glass.url} alt="..." />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

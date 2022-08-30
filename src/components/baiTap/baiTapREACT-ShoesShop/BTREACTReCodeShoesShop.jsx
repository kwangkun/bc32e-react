import React, { Component } from 'react'
import shoesData from './data.json'
import InfoModal from './InfoModal'
import ShoesBT from './ShoesBT'

export default class BTREACTReCodeShoesShop extends Component {
    state = {
        stateModal: {
            shoesName: '',
            shoesDesc: '',
            shoesPrice: 0,
            shoesQuant: 0,
        }
    }

    setStateModal = (shoesId) => {
        for (let i = 0; i < shoesData.length; i++) {
            if (shoesData[i].id === shoesId) {
                this.setState({
                    shoesName: `${shoesData[i].name}`,
                    shoesDesc: `${shoesData[i].description}`,
                    shoesPrice: shoesData[i].price,
                    shoesQuant: shoesData[i].quantity,
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Shoes Shop</h1>
                <div className="container">
                    <div className="row">
                        {
                            shoesData.map((shoes) => {
                                return <div className="col-4 my-3" key={shoes.id}>
                                    <ShoesBT shoes={shoes} setStateModal={this.setStateModal} />
                                    <InfoModal shoesName={this.state.shoesName} shoesDesc={this.state.shoesDesc} shoesPrice={this.state.shoesPrice} shoesQuant={this.state.shoesQuant} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

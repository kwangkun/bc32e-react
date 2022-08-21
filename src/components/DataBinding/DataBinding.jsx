import React, { Component } from 'react'

export default class DataBinding extends Component {
    age = 20;

    renderMessage = () => {
        return 'Hello BC32E';
    }

    renderMessage2() {
        const name = '-Name Message-';
        return (
            <div className='text-danger display-4'>
                Hello Message2 {name} {this.age}
            </div>
        )
    };

    render() {
        const name = 'Phạm Kim Quang'
        const message = 'Cyber Soft';
        return (
            // Chỉ return về 1 jsx element duy nhất
            <div>

                DataBinding
                <p>
                    Hello {name} {this.age}
                </p>
                <p>
                    {message}
                </p>
                <p>
                    {this.renderMessage()}
                </p>
                <p>
                    {this.renderMessage2()}
                </p>

            </div>
        )
    }
}

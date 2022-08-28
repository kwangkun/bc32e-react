import React, { Children, Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    // props là dữ liệu truyền từ component cha xuống component con
    // props: properties ex: <button class="" (class is one of the props)></button>
    // ngoài string, number, boolean, props còn có thể là 1 obj, function hoặc component 
    // ở component nhận props => props ko thay đổi dc (props cứng)
    // luôn luôn có 1 props mặc định là children => là giá trị nằm giữa 2 thẻ
    render() {
        const product = {
            name: 'Iphone',
            price: 1000,
            color: 'black',
        }

        const logger = (mess) => {
            alert(mess)
        }

        return (
            <div>
                <Child content="BC32E" coloru="red" name="Kim Quang" src='đặt trùng props HTML ok luôn' product={product} logger={logger} />
                {/* <Child content="BC32E" coloru="green" name="Kim Quang1" src='đặt trùng props HTML ok luôn' />
                <Child content="BC32E" coloru="blue" name="Kim Quang2" src='đặt trùng props HTML ok luôn' /> */}
                <Child content="BC32E" coloru="brown" name="Kim Quang3" src='đặt trùng props HTML ok luôn' />

                <children>
                    <div className='container'>
                        <p>Phạm Kim Quang</p>
                        <p>alo 12345</p>
                    </div>
                </children>

                <Child content="BC32E" coloru="pink" name="Kim Quang4" src='đặt trùng props HTML ok luôn' />

                <children>
                    <div className='container'>
                        <p>Phạm Kim Quang22</p>
                        <p>alo 12345222</p>
                    </div>
                </children>
                
            </div>
        )
    }
}

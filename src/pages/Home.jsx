import React, { Component } from 'react'
import { createRef } from 'react'
import { createSearchParams } from 'react-router-dom'
import { withRoute } from '../HOC/withRoute'

class Home extends Component {
  inputRef = createRef()

  render() {
    const { navigate } = this.props

    return (
      <div>
        Home
        <input className='form-control w-25' ref={this.inputRef} />

        <button className='btn btn-primary ml-10'
          // onClick={() => navigate('/about')}
          onClick={() => navigate({
            pathname: '/about',
            search: `?${createSearchParams({
              name: this.inputRef.current.value,
            })}`,
          })}

        >
          Submit
        </button>

        <button className='btn btn-primary ml-10'
          // onClick={() => navigate('/about')}
          onClick={() => navigate({
            pathname: '/about',
            search: `?${createSearchParams({
              name: 'BC32E',
              keys: 'CYBERSOFT',
            })}`,
          })}

        >
          About
        </button>

        <button className='btn btn-primary ml-10'
          // onClick={() => navigate('/about')}
          onClick={() => { navigate('/detail/12318523495') }}

        >
          Detail
        </button>
      </div>
    )
  }
}

export default withRoute(Home)
import React, { Component } from 'react'
import { withRoute } from '../HOC/withRoute'

class About extends Component {

  render() {
    const { searchParams } = this.props
    console.log('seachParams: ', searchParams);

    return (
      <div>
        <p>About</p>
        <p> name: {searchParams.get('name')}</p>
      </div>
    )
  }
}

export default withRoute(About)
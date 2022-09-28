import React, { Component } from 'react'
import { withRoute } from '../HOC/withRoute'

class Detail extends Component {

  render() {
    const { params } = this.props

    return (
      <div>
        <p>Detail</p>
        <p>id: {params.abcdexyzlol}</p>

      </div>
    )
  }
}

export default withRoute(Detail)
import React, { Component } from 'react'
import { Typography } from 'material-ui'

class Title extends Component {
  render() {
    return (
        <Typography type='display3' align='center' style={{ padding: 30 + 'px' }}>{ this.props.children }</Typography>
        )
  }
}

export default Title

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'

class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
        <Typography type='display3' align='center' style={{ padding: 30 + 'px' }}>{ this.props.title }</Typography>
        )
  }
}

export default Title

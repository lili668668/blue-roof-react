import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
        <h1 className='mdc-typography--display3 text-center'>{ this.props.title }</h1>
        )
  }
}

export default Title

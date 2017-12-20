import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Display3 } from 'react-mdc-web/lib'

class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
        <Display3 className='text-center'>{ this.props.title }</Display3>
        )
  }
}

export default Title

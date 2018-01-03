import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class WrapReactMarkdown extends Component {
  render() {
    return (
        <ReactMarkdown source={ this.props.children } />
        )
  }
}

export default WrapReactMarkdown


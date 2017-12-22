import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from './CircularProgress'

class Loading extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool
  }

  render() {
    return (
      <div>
        {!this.props.isLoaded ? (
            <CircularProgress />    
          ) : (
            <div>
              { this.props.children }
            </div>
          )
        }
      </div>
    )
  }
}

export default Loading

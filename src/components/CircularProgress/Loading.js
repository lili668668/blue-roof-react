import React, { Component } from 'react'
import CircularProgress from './CircularProgress'

class Loading extends Component {

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

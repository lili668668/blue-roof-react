import React, { Component } from 'react'
import { Typography } from 'material-ui'
import config from '../../config'

class Error extends Component {
  render() {
    return (
      <div>
        {this.props.isError ? (
          <div>
            <Typography type='display2' align='center' style={{ padding: 30 + 'px' }}>好像發生了一些錯誤</Typography>
            <Typography type='display1' align='center' style={{ padding: 30 + 'px' }}>{ this.props.errorMsg }</Typography>
            <Typography type='display1' align='center' style={{ padding: 30 + 'px' }}>{ '請聯絡' + config.author_email }</Typography>
          </div>
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

export default Error

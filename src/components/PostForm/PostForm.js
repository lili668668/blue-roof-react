import React, { Component } from 'react'
import { TextField } from 'material-ui'
import { FormHelperText } from 'material-ui/Form'

class PostForm extends Component {
  componentDidMount() {
    this.props.initialForm()
  }

  render() {
      return (
        <div>
          <TextField label='標題' margin='normal' required fullWidth error={this.props.titleError !== ''} onChange={this.props.titleChange} />
          <FormHelperText error>{ this.props.titleError }</FormHelperText>
          <TextField label='內容' margin='normal' fullWidth multiline onChange={this.props.contentChange} />
        </div>
      )
  }
}

export default PostForm

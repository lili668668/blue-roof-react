import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form/immutable'
import { Grid, Button, Typography } from 'material-ui'
import { Save, Cancel } from 'material-ui-icons'
import { TextField } from 'redux-form-material-ui'

import * as validate from './validate'

class PostForm extends Component {
  static propTypes = {
    cancel: PropTypes.func
  }

  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
          <Field label='標題' name='title' component={TextField} required fullWidth validate={validate.required} style={{ marginTop: 30 + 'px' }} />
          <Field label='內容' name='content' component={TextField} fullWidth multiline style={{ marginTop: 30 + 'px' }} />
          <Grid container spacing={0} style={{ marginTop: 30 + 'px', marginBottom: 30 + 'px' }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Typography align='center'>
                <Button type='submit' color='primary' raised disabled={this.props.invalid || this.props.submitting}>
                  <Save />
                  儲存
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography align='center'>
                <Button type='button' color='accent' raised onClick={this.props.cancel()}>
                  <Cancel />
                  取消
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </form>
        )
  }
}

PostForm = reduxForm({
  form: 'postForm'
})(PostForm)

export default PostForm

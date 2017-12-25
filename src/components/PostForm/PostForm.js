import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form/immutable'
import { Grid, Button } from 'material-ui'
import { Save, Delete } from 'material-ui-icons'
import { TextField } from 'redux-form-material-ui'

import validate from './validate'

class PostForm extends Component {
  static propTypes = {
    handleSumbit: PropTypes.func,
    cancel: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
  }

  render() {
    return (
        <form onSubmit={this.props.handleSumbit}>
          <Field name='title' component={TextField} required fullWidth />
          <Field name='content' component={TextField} fullWidth />
          <Grid container spacing={0} style={{ marginTop: 30 + 'px', marginBottom: 30 + 'px' }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Link to='/posts'>
                <Typography align='center'>
                  <Button component={button} type='submit' color='primary' raised disabled={pristine || submitting}>
                    <Save />
                    儲存
                  </Button>
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={5}>
              <Typography align='center'>
                <Button component={button} type='button' color='accent' raised onClick={this.props.cancel}>
                  <Delete />
                  捨棄
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </form>
        )
  }
}


export default reduxForm({
  form: 'postForm',
  validate
})(PostForm)

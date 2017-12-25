import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Typography } from 'material-ui'
import { reduxForm } from 'redux-form/immutable'

import { Title, PostForm } from '../../components'

class Add extends Component {
  static propTypes = {
    submit: PropTypes.func,
    cancel: PropTypes.func
  }

  render() {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Title>
              加入文章
            </Title>
            <PostForm submit={this.props.submit} cancel={this.props.cancel} />
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
        </Grid>
      )
  }
}

export default Add

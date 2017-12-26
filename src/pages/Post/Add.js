import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'

import { Title, PostForm } from '../../components'

class Add extends Component {
  static propTypes = {
    addPost: PropTypes.func,
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
            <PostForm onSubmit={values => this.props.addPost(values)} cancel={this.props.cancel} />
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
        </Grid>
      )
  }
}

export default Add

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from 'material-ui'

import { Title, PostForm } from '../../components'

class Add extends Component {
  render() {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Title>
              加入文章
            </Title>
            <PostForm handleSumbit={this.props.handleSumbit} cancel={this.props.cancel} />
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
        </Grid>
      )
  }
}

export default Add

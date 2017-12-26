import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'

import { Title, PostForm } from '../../components'

class Modify extends Component {
  static propTypes = {
    modifyPost: PropTypes.func,
    cancel: PropTypes.func,
    post: PropTypes.object
  }

  render() {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Title>
              修改文章
            </Title>
            <PostForm onSubmit={values => this.props.modifyPost(values)} cancel={this.props.cancel} initialValues={{ _id: this.props.post._id, title: this.props.post.title, author: this.props.post.author, content: this.props.post.content, created: this.props.post.created}} />
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
        </Grid>
      )
  }
}

export default Modify

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'

import { Title, PostForm, Error } from '../../components'
import { Loading } from '../../components/CircularProgress'

class Modify extends Component {
  static propTypes = {
    fillPost: PropTypes.finc,
    modifyPost: PropTypes.func,
    cancel: PropTypes.func,
    isError: PropTypes.bool,
    errorMsg: PropTypes.string,
    isLoaded: PropTypes.bool,
    post: PropTypes.object
  }

  componentDidMount() {
    var id = this.props.match.params.id
    this.props.fillPost(id)
  }

  render() {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Title>
              修改文章
            </Title>
            <Error isError={this.props.isError} errorMsg={this.props.errorMsg}>
              <Loading isLoaded={this.props.isLoaded}>
                <PostForm onSubmit={values => this.props.modifyPost(values)} cancel={this.props.cancel} initialValues={{ _id: this.props.post.get('_id'), title: this.props.post.get('title'), author: this.props.post.get('author'), content: this.props.post.get('content'), created: this.props.post.get('created')}} />
              </Loading>
            </Error>
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
        </Grid>
      )
  }
}

export default Modify

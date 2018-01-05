import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from 'material-ui'

import { Title, WrapReactMarkdown, Error } from '../../components'
import { Loading } from '../../components/CircularProgress'

class Read extends Component {
  static propTypes = {
    fillPost: PropTypes.func,
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
        <div>
          <Grid container spacing={0}>
            <Grid item xs={1} sm={4}></Grid>
            <Grid item xs={10} sm={4}>
              <Error isError={this.props.isError} errorMsg={this.props.errorMsg}>
                <Loading isLoaded={this.props.isLoaded}>
                  <Title id='title'>{ this.props.post.get('title') }</Title>
                  <Typography type='subheading' align='left'>
                    作者：
                    <span id='author'>
                      { this.props.post.get('author') }
                    </span>
                  </Typography>
                  <WrapReactMarkdown id='content'>{ this.props.post.get('content') }</WrapReactMarkdown>
                </Loading>
              </Error>
            </Grid>
            <Grid item xs={1} sm={4}></Grid>
          </Grid>
        </div>
      )
  }
}

export default Read

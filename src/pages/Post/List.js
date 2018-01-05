import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'material-ui'
import { Add } from 'material-ui-icons'

import { Title, PostCard, Error } from '../../components'
import { Loading } from '../../components/CircularProgress'


class List extends Component {
  static propTypes = {
    listPosts: PropTypes.func,
    isError: PropTypes.bool,
    errorMsg: PropTypes.string,
    isLoaded: PropTypes.bool,
    posts: PropTypes.object,
    readPost: PropTypes.func,
    deletePost: PropTypes.func,
    modifyPost: PropTypes.func
  }

  componentDidMount() {
    this.props.listPosts()
  }

  render() {
      return (
        <div>
          <Grid container spacing={0}>
            <Grid item xs={1} sm={4}></Grid>
            <Grid item xs={10} sm={4}>
              <Title>
                文章列表
              </Title>
              <Error isError={this.props.isError} errorMsg={this.props.errorMsg}>
                <Loading isLoaded={this.props.isLoaded}>
                  {
                    this.props.posts.map((post, index) => (
                        <PostCard
                          key={index}
                          index={index}
                          postId={post.get('_id')}
                          title={post.get('title')}
                          author={post.get('author')}
                          created={post.get('created')}
                          updated={post.get('updated')}
                          content={post.get('content')}
                          onRead={(id) => this.props.readPost(id)}
                          onDelete={(id, index) => this.props.deletePost(id, index)}
                          onModify={(id) => this.props.modifyPost(id)}
                          textLenLimit={40} />
                    )).toJS()
                  }
                </Loading>
              </Error>
            </Grid>
            <Grid item xs={1} sm={4}></Grid>
          </Grid>
          <div className='app-fab--absolute'> 
            <Button fab color='primary' aria-label='add' component={Link} to='/post/add'>
              <Add />
            </Button>
          </div>
        </div>
          )
  }
}

export default List

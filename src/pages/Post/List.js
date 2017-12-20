import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Cell, Icon } from 'react-mdc-web/lib'

import { Title, CircularProgress, PostCard } from '../../components'

class List extends Component {
  componentDidMount() {
    this.props.listPosts()
  }

  render() {
      return (
        <div>
          <Grid>
            <Cell col={4}></Cell>
            <Cell col={4}>
              <Title title='文章列表' />
              {!this.props.isLoaded ? (
                  <CircularProgress />
                ) : (
                  this.props.posts.map((post, index) => (
                    <PostCard key={index} title={post.get('title')} author={post.get('author')} content={post.get('content')} />
                  )).toJS()
                )
              }
            </Cell>
            <Cell col={4}></Cell>
          </Grid>
          <Link to='/post/add' className='mdc-fab app-fab--absolute'>
            <span className='mdc-fab__icon'>
              <Icon name='add' />
            </span>
          </Link>
        </div>
          )
  }
}

export default List

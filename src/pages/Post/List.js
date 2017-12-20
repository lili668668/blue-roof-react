import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'material-ui'
import { Add } from 'material-ui-icons'

import { Title, CircularProgress, PostCard } from '../../components'

class List extends Component {
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
              {!this.props.isLoaded ? (
                  <CircularProgress />
                ) : (
                  this.props.posts.map((post, index) => (
                    <PostCard key={index} title={post.get('title')} author={post.get('author')} content={post.get('content')} />
                  )).toJS()
                )
              }
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

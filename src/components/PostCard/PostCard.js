import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'material-ui'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import { Typography } from 'material-ui'
import { Delete } from 'material-ui-icons'

class PostCard extends Component {
  static propTypes = {
    index: PropTypes.number,
    postId: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    onDelete: PropTypes.func
  }

  render() {
    return (
      <Card style={{ margin: 24 + 'px' }}>
        <CardContent>
          <Typography type='headline' component='h1'>
            {this.props.title}
          </Typography>
          <Typography type='subheading' component='h2'>
            {this.props.author}
          </Typography>
          <Typography component='p'>
            {this.props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='accent' onClick={this.props.onDelete(this.props.postId, this.props.index)}>
            <Delete />
            刪除
          </Button>
        </CardActions>
      </Card>
        )
  }
}

export default PostCard

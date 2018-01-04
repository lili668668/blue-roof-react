import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'material-ui'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import { Typography } from 'material-ui'
import { Visibility, Create, Delete } from 'material-ui-icons'

class PostCard extends Component {
  cutText(text, len) {
    if (text) {
      return len ? text.substring(0, len) : text
    } else {
      return ''
    }
  }

  static propTypes = {
    index: PropTypes.number,
    postId: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    onRead: PropTypes.func,
    onModify: PropTypes.func,
    onDelete: PropTypes.func,
    textLenLimit: PropTypes.number
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
            {
              this.cutText(this.props.content, this.props.textLenLimit)
            }
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary' onClick={this.props.onRead(this.props.postId)}>
            <Visibility />
            檢視
          </Button>
          <Button dense color='primary' onClick={this.props.onModify(this.props.postId)}>
            <Create />
            修改
          </Button>
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

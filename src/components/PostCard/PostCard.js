import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import { Typography } from 'material-ui'

class PostCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
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
      </Card>
        )
  }
}

export default PostCard

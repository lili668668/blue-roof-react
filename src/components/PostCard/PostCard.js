import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardTitle, CardSubtitle, CardText } from 'react-mdc-web/lib'

class PostCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle large>
            {this.props.title}
          </CardTitle>
          <CardSubtitle>
            {this.props.author}
          </CardSubtitle>
        </CardHeader>
        <CardText>
          {this.props.content}
        </CardText>
      </Card>
        )
  }
}

export default PostCard

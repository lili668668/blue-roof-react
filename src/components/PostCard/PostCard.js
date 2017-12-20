import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }

  render() {
    return (
          <div className='mdc-card'>
            <section className='mdc-card__primary'>
              <h1 className='mdc-card__title mdc-card__title--large'>
                {this.props.title}
              </h1>
              <h2 className='mdc-card__subtitle'>
                {this.props.author}
              </h2>
            </section>
            <section className='mdc-card__supporting-text'>
              {this.props.content}
            </section>
          </div>
        )
  }
}

export default PostCard

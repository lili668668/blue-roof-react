import React, { Component } from 'react'


class List extends Component {
    constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/mock_posts')
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            posts: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, posts } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
          <ul>
          {posts.map(post => (
              <li key={post.title}>
              {post.title} {post.content}
              </li>
          ))}
          </ul>
          )
    }
  }
}

export default List

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Title } from '../../components'
import AddLogo from './ic_note_add_white_24px.svg'
import './List.css'

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
          <div>
            <Title title='文章列表' />
            <ul>
            {posts.map(post => (
                <li key={post.title}>
                {post.title} {post.content}
                </li>
            ))}
            </ul>
            <Link to='/post/add' className='mdc-fab material-icons app-fab--absolute'>
              <span className='mdc-fab__icon'>
                <img src={AddLogo} alt='Add' />
              </span>
            </Link>
          </div>
          )
    }
  }
}

export default List

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Title } from '../../components'
import AddLogo from './asset/img/ic_note_add_white_24px.svg'

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
            <div className='mdc-layout-grid'>
              <div className='mdc-layout-grid__inner'>
                <div className='mdc-layout-grid__cell'></div>
                <div className='mdc-layout-grid__cell'>
                  <Title title='文章列表' />
                  {posts.map(post => (
                      <div className='mdc-card' key={post.title}>
                        <section className='mdc-card__primary'>
                          <h1 className='mdc-card__title mdc-card__title--large'>
                            {post.title}
                          </h1>
                          <h2 className='mdc-card__subtitle'>
                            {post.author}
                          </h2>
                        </section>
                        <section className='mdc-card__supporting-text'>
                          {post.content}
                        </section>
                      </div>
                  ))}
                </div>
                <div className='mdc-layout-grid__cell'></div>
              </div>
            </div>
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

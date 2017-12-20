import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Title, CircularProgress, PostCard } from '../../components'
import AddLogo from './asset/img/ic_note_add_white_24px.svg'

class List extends Component {
  componentDidMount() {
    this.props.listPost()
  }

  render() {
    if (!this.props.isLoaded) {
      return <CircularProgress />
    } else {
      return (
        <div>
          <div className='mdc-layout-grid'>
            <div className='mdc-layout-grid__inner'>
              <div className='mdc-layout-grid__cell'></div>
              <div className='mdc-layout-grid__cell'>
                <Title title='文章列表' />
                {
                  this.props.posts.map((post, index) => (
                    <PostCard key={index} title={post.get('title')} author={post.get('author')} content={post.get('content')} />
                  )).toJS()
                }
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Title, CircularProgress } from '../../components'
import AddLogo from './asset/img/ic_note_add_white_24px.svg'

class List extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    posts: PropTypes.array
  }

  render() {
    if (!isLoaded) {
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
                  posts.map((post, index) => (
                    <div className='mdc-card' key={index}>
                      <section className='mdc-card__primary'>
                        <h1 className='mdc-card__title mdc-card__title--large'>
                          {post.get('title')}
                        </h1>
                        <h2 className='mdc-card__subtitle'>
                          {post.get('author')}
                        </h2>
                      </section>
                      <section className='mdc-card__supporting-text'>
                        {post.get('content')}
                      </section>
                    </div>
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

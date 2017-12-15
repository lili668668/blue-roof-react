import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Title } from '../../components'

class Home extends Component {
  render() {
    return (
        <div>
          <Title title='部落格owo' />
          <div className='text-center'>
            <Link to='/posts' className='mdc-typography--display2 mdc-button' style={{ minHeight: 50 + 'px' }}>
              文章列表
            </Link>
          </div>
        </div>
        )
  }
}

export default Home


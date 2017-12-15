import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <div>
          <h1 className='mdc-typography--display3 text-center'>部落格 owo</h1>
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


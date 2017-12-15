import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
        <div>
          <h1 class='mdc-typography--display3 text-center'>部落格 owo</h1>
          <div class='text-center'>
            <a href='#' class='mdc-typography--display2 mdc-button' style={{ minHeight: 50 + 'px' }}>
              文章列表
            </a>
          </div>
        </div>
        )
  }
}

export default Home


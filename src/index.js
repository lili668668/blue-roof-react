import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './pages/App'
import Home from './pages/Home'
import * as Post from './pages/Post'

import './index.css'

ReactDOM.render(
    <HashRouter>
      <div>
        <Route path='/' component={App} />
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Post.List} />
        <Route exact path='/post/add' component={Post.Add} />
      </div>
    </HashRouter>
    , document.getElementById('root'))
registerServiceWorker()

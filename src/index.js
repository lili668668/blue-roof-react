import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import Nav from './pages/Nav'
import Home from './pages/Home'
import * as Post from './pages/Post'

import './index.css'

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={Post.List} />
          <Route exact path='/post/add' component={Post.Add} />
        </div>
      </HashRouter>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()

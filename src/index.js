import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Nav } from './components'
import { Home, Post } from './pages'
import { PostContainer } from './containers'

import './index.css'

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={PostContainer.ListContainer} />
          <Route exact path='/post/add' component={Post.Add} />
        </div>
      </HashRouter>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()

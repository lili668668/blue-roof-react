import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { store, history } from './store'
import { Nav } from './components'
import { Home } from './pages'
import { PostContainer } from './containers'

import './index.css'

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={PostContainer.ListContainer} />
          <Route exact path='/post/add' component={PostContainer.AddContainer} />
          <Route path='/post/modify/:id' component={PostContainer.ModifyContainer} />
          <Route path='/post/read/:id' component={PostContainer.ReadContainer} />
        </div>
      </Router>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()

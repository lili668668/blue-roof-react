import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './pages/App'
import Home from './pages/Home'

import './index.css'

ReactDOM.render(
    <HashRouter>
      <App>
        <Route path='/' component={Home} />
      </App>
    </HashRouter>
    , document.getElementById('root'))
registerServiceWorker()

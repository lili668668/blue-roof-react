import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './pages/App'
import Home from './pages/Home'

ReactDOM.render(
    <HashRouter>
      <div>
        <App />
        <Route path='/' component={Home} />
      </div>
    </HashRouter>
    , document.getElementById('root'))
registerServiceWorker()

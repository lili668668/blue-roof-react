import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRouter } from 'react-router'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './pages/App';

ReactDOM.render(
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();

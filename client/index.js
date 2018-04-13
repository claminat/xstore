'use strict';
//client/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import App from './app'

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>, document.getElementById('root')
);

// ReactDOM.render((
//   <HashRouter>
//     <App />
//   </HashRouter>
// ), document.getElementById('root'))

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import "react-table/react-table.css"
import App from './App';

ReactDOM.render((
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('root'))
  


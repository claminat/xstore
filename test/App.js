'use strict';
import React from 'react';
import {Switch, Route, Link, HashRouter } from 'react-router-dom'

import Main from './components/Main'
import Header from './components/_Header'


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
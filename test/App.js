'use strict';
import React from 'react';
import {Switch, Route, Link, HashRouter } from 'react-router-dom'
import ReactLoading from "react-loading";

import Main from './components/_Main'
import Header from './components/_Header'

//import Back from "./components/Back";
//import Load from './Load';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

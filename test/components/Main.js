'use strict';
import React from 'react';
import {Switch, Route, Link, HashRouter } from 'react-router-dom'

import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import Tables from './Tables'
import Fetching from './Fetching'
import Jobs from './Jobs'
import User from './User'

const Main = () => ( 
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/roster' component={Roster} />
    <Route path='/schedule' component={Schedule} />
    <Route path='/tables' component={Tables} />
    <Route path='/Fetching' component={Fetching} />
    <Route path='/Jobs' component={Jobs} />
    <Route path='/User' component={User} />
  </Switch>
)

export default Main;
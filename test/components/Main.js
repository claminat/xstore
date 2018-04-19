'use strict';
import React from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom'

import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import Tables from './Tables'
import Fetching from './Fetching'
import Jobs from './Jobs'
import User from './User'
import About from './About'

import Repo from './Repo'

//admin
import PhotoIndex from './photo/photoIndex'
import PhotoEdit from './photo/photoEdit'
import PhotoCreate from './photo/photoCreate'


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/roster' component={Roster} />
    <Route path='/schedule' component={Schedule} />
    <Route path='/tables' component={Tables} />
    <Route path='/Fetching' component={Fetching} />
    <Route path='/Jobs' component={Jobs} />
    <Route path='/User' component={User} />

    {/* <Route path="/repos" component={Repos} /> */}
    <Route path="/repos/:userName/:repoName" component={Repo} />
    <Route path="/about" component={About} />


    <Route path='/admin/photos' component={PhotoIndex} />
    <Route path='/admin/photo/:id' component={PhotoEdit} />
    <Route path='/admin/photo' component={PhotoCreate} />
  </Switch>
)

export default Main;
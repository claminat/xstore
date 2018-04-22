'use strict';
import React from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom'

import Home from './draft/Home'
import Roster from './draft/Roster'
import Schedule from './draft/Schedule'
import Tables from './draft/Tables'
import Fetching from './draft/Fetching'
import Jobs from './draft/Jobs'
import User from './draft/User'
import About from './draft/About'

import Repo from './draft/Repo'

//admin
import PhotoIndex from './photo/index'
import PhotoEdit from './photo/edit'
import PhotoCreate from './photo/create'


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/roster' component={Roster} />
    <Route path='/schedule' component={Schedule} />
    <Route path='/tables' component={Tables} />
    <Route path='/Fetching' component={Fetching} />
    <Route path='/Jobs' component={Jobs} />
    <Route path='/User' component={User} />

    <Route path="/repos/:userName/:repoName" component={Repo} />
    <Route path="/about" component={About} />


    <Route path='/admin/photos' component={PhotoIndex} />
    <Route path='/admin/photo/:id/:_id' component={PhotoEdit}  />
    <Route path='/admin/photo' component={PhotoCreate} />
    
  </Switch>
)

export default Main;
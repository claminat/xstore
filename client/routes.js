
//client/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';


import ExpenseIndex from './components/Expense/Index';
import UserCreate from './components/User/create';
import UserIndex from './components/User/index';
import UserUpdate from './components/User/update';
//
//ace-master
import Dashboard from './components/ace-master/dashboard';
import Home from './components/ace-master/home';
import FormElements from './components/ace-master/form-elements';
import FormElements2 from './components/ace-master/form-elements-2';

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/expense' component={ExpenseIndex} />      
        <Route path='/create' component={UserCreate} />
        <Route path='/index' component={UserIndex} />
        <Route path='/update/:id' component={UserUpdate} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/home' component={Home} />
        <Route path='/form-elements' component={FormElements} />
        <Route path='/form-elements-2' component={FormElements2} />
    </Switch>
);

export default Routes;


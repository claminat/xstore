//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/dashboard">dashboard</Link>   
        <Link to="/form-elements-2">form-elements-2</Link>   
        <Link to="/form-elements">form-elements</Link>   


        Hello,App!
      </div>
    );
  }
}


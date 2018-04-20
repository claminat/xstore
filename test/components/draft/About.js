'use strict';


import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class About extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1 className="display-3">About!</h1>       
      </Jumbotron>
    </div>
    );
  }
}

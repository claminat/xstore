'use strict';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
export default class Load extends React.Component {
   
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = {
            loading: true,
            error: null,
            data: []
        }      
    }
    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 2500); // simulates loading of data
    }
  
    render() {
      const { loading } = this.state;
  
      if (loading) { // if your component doesn't have to wait for async data, remove this block 
        return null; // render null when app is not ready
      }
  
      return (
        <div>I'm the app</div>
        
      );
    }
  }
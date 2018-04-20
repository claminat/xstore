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
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
     
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">V3SI</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="/components/">Components</NavLink></NavItem>
              <NavItem><NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink></NavItem>
              <NavItem><NavLink href="/#/tables">Tables</NavLink></NavItem>
              <NavItem><NavLink href="/#/Fetching">Fetching</NavLink></NavItem>
              <NavItem><NavLink href="/#/jobs">jobs</NavLink></NavItem>
              <NavItem><NavLink href="/#/admin/photos">Photo</NavLink></NavItem>
              <NavItem><NavLink href="/#/user">user</NavLink></NavItem>
              <NavItem><NavLink href="/#/user">user</NavLink></NavItem>

              <NavItem><NavLink href="/#/repos/reactjs/react-router">React Router</NavLink></NavItem>
              <NavItem><NavLink href="/#/repos/facebook/react">React</NavLink></NavItem>

           

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Options</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><NavLink href="/tables">Tables</NavLink></DropdownItem>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      
    );
  }
}

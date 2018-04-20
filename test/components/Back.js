'use strict';
import React from "react";
import { withRouter } from "react-router-dom";
import {
  Table,
  Button,
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


const Back = ({ history }) =>
  history.length > 1 && (
    <Button outline color="secondary" onClick={history.goBack}>Back</Button>
  );

export default withRouter(Back);

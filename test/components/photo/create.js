//https://stackoverflow.com/questions/43992427/how-to-display-a-image-selected-from-input-type-file-in-reactjs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

'use strict';
import React, { Component } from 'react';
import {
    Table, Button, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
    //Form,
     FormGroup, Label, Input, FormText,
    Row, Col
} from 'reactstrap';
import { Link } from 'react-router';
import axios from 'axios';
import $ from 'jquery'

import ReactTable from 'react-table'
import Loading from "../common/Loading";

import Form from "./form";

var helpers = require('../../../javascripts/helpers')
import { debug,blankUrl } from '../../../javascripts/helpers'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            loading: true,
            error: null,
            data: [],
        }
    }
    componentDidMount(nextProps, nextState) {
        this.setState({ loading: false })
        var data={title:'Xiao'}
        this.setState({ data, loading: false });
    }
    
    render() {
        const { data, error, loading, image,filename } = this.state;
        if (error) { return <p>{this.state.error.message}</p>; }
        if (loading) { return <Loading /> }

        return (
            <Card body>
                <CardTitle>Edit Photo</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Form data={data}/>
                    
                <NavLink href={'/#/admin/photos'}>
                    <Button color="secondary">Back</Button>
                </NavLink>
            </Card>
        )
    }
}

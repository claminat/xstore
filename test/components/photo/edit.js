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

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            loading: true,
            error: null,
            data: [],
            image: blankUrl,
            filename:'',
        }
    }
    
    componentDidMount(nextProps, nextState) {
        this.setState({ loading: false })
        axios.get('/photo/get/' + this.props.match.params._id)
            .then(res => {
                if (debug) {console.log('res', res);}
                this.setState({ data:res.data, loading: false });
            }).catch(error => this.setState({ error, loading: false }))
       
    }
   
    render() {
        const { data, error, loading, image,filename } = this.state;
        if (error) { return <p>{this.state.error.message}</p>; }
        if (loading) { return <Loading /> }

        return (
            <Card body>
                <CardTitle>Edit Photo</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
               
                <Form {...this.props} 
                data={this.state.data} 
                image={this.state.image} 
                loading={this.state.loading}
                error={this.state.error}
                />
                    
                <NavLink href={'/#/admin/photos'}>
                    <Button color="secondary">Back</Button>
                </NavLink>
            </Card>
        )
    }
}


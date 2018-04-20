'use strict';
import React, { Component } from 'react';
import {
    Table, Button, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
    FormGroup, Label, Input, FormText,
    Row, Col
} from 'reactstrap';
import { Link } from 'react-router';

import ReactTable from 'react-table'
import Loading from "../Loading";
import Form from "./form";



var helpers = require('../../../javascripts/helpers')
import { debug } from '../../../javascripts/helpers'

import axios from 'axios';
export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            loading: true,
            error: null,
            data: []
        }
    }
    componentDidMount(nextProps, nextState) {
        //this.setState({loading: false})
        setTimeout(() => this.setState({ loading: false }), 2500); // simulates loading of data
    }

    render() {
        console.log('props', this.props)
        console.log('props.match', this.props.match)
        console.log('props.history', this.props.history)

        const { data, pages, loading } = this.state;
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
        }

        if (loading) {
            return <Loading />
        }
        return (
            <div>
                <h2>ID: {this.props.match.params.id}</h2>
                <Row>
                    <Col sm="2">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="9">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Form>Go somewhere</Form>
                        </Card>
                    </Col>
                </Row>

                <NavLink href={"/#/admin/photos/"}><Button color="primary">Back</Button></NavLink>
            </div>

        )
    }
}



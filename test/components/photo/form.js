'use strict';
import React, { Component } from 'react';
import {
    Table, Button, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
    Form, FormGroup, Label, Input, FormText,
    Row, Col
} from 'reactstrap';
import { Link } from 'react-router';

import ReactTable from 'react-table'
import Loading from "../common/Loading";

var helpers = require('../../../javascripts/helpers')
import { debug } from '../../../javascripts/helpers'

import axios from 'axios';

const API = '/photo/update/';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: []
        }
    }
    componentDidMount(nextProps, nextState) {
        this.setState({loading: false})
        axios.get(API+this.props.match.params.id)
        .then(res => {
            if (debug) {
                console.log('res', res);
            }
            const data = res.data;
            this.setState({ data, loading: false });
        }).catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { data, pages, loading } = this.state;
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
        }

        if (loading) {
            return <Loading />
        }
        return (
            <Form>
            <div>{data.id}</div>
            <div>{data.title}</div>

            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
  </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be something else and selecting it will deselect option one
    </Label>
                </FormGroup>
                <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                        Option three is disabled
    </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    Check me out
  </Label>
            </FormGroup>
            <Button>Submit</Button>
        </Form>

        )
    }
}



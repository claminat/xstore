//https://stackoverflow.com/questions/43992427/how-to-display-a-image-selected-from-input-type-file-in-reactjs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

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
import axios from 'axios';

import ReactTable from 'react-table'
import Loading from "../common/Loading";

//import Form from "./form";

const API = '/photo/edit/';

var helpers = require('../../../javascripts/helpers')
import { debug } from '../../../javascripts/helpers'

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            loading: true,
            error: null,
            data: [],
            image: ''
        }
    }
    componentDidMount(nextProps, nextState) {
        this.setState({ loading: false })
        axios.get(API + this.props.match.params._id)
            .then(res => {
                if (debug) {
                    console.log('res', res);
                }
                const data = res.data;
                this.setState({ data, loading: false });
            }).catch(error => this.setState({ error, loading: false }))
    }
    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            console.log('event.target.files', event.target.files)
            console.log('event.target.files[0]', event.target.files[0])
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log('e.target.result', e.target.result)
                this.setState({ image: e.target.result });
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }
    onImageRemove() {       
        this.setState({ image: '' });
    }

    render() {
        console.log('props', this.props)
        console.log('props.match', this.props.match)
        console.log('props.history', this.props.history)

        const { data, error, loading, image } = this.state;
        if (error) { return <p>{this.state.error.message}</p>; }
        if (loading) { return <Loading /> }

        return (
            <Card body>
                <CardTitle>Edit Photo</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Form>
                    <FormGroup row>
                        <Label htmlFor="title" sm={2}>ID</Label>
                        <Col sm={10}>
                            {this.props.match.params.id} ({this.props.match.params._id})
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input name="title" id="title" placeholder="title" value={data.title || ''} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="file" sm={2}>File</Label>
                        <Col sm={10}>

                            <div className="input-group">
                                <div className="custom-file">
                                    <input onChange={this.onImageChange.bind(this)}
                                        type="file" className="custom-file-input"
                                        id="input" />
                                    <label className="custom-file-label" htmlFor="input">Choose file</label>
                                </div>
                                <div className="input-group-append">
                                    <button onClick={this.onImageRemove.bind(this)} 
                                    className="btn btn-outline-secondary" type="button">Remove</button>
                                </div>
                            </div>


                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            <img id="target" src={this.state.image} />
                        </Col>
                    </FormGroup>
                </Form>
                <NavLink href={'/#/admin/photos'}>
                    <Button color="secondary">Back</Button>
                </NavLink>
            </Card>
        )
    }
}


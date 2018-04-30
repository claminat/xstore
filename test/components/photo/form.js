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
import $ from 'jquery'

import ReactTable from 'react-table'
import Loading from "../common/Loading";

var helpers = require('../../../javascripts/helpers')
import { debug,blankUrl } from '../../../javascripts/helpers'


const ParentComponent = ({props,data}) => (
    <div>
      <h1>Parent Component</h1>
    
      <h1>title:{data.title} </h1>
    </div>
 );


 export default class App extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            console.log('event.target.files', event.target.files)
            console.log('event.target.files[0]', event.target.files[0])
            var filename=event.target.files[0].name
            
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log('e.target.result', e.target.result)
                this.setState({ image: e.target.result });
                this.setState({ filename: filename });
            };
            reader.readAsDataURL(event.target.files[0]);
        }else{
            $('#target').attr('src', blankUrl);
       }
    }
    onImageRemove() {  
        $('#target').attr('src', blankUrl);
        $('#inputFile').val('');
        $('#inputFile').val(null);
    }
    render() {
        const { data, error, loading, image,filename } = this.props;
        if (error) { return <p>{this.state.error.message}</p>; }
        if (loading) { return <Loading /> }
      return (
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
                            <Input name="title" id="title" placeholder="title" 
                            value={data.title || ''} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="file" sm={2}>File</Label>
                        <Col sm={10}>

                            <div className="input-group">
                                <div className="custom-file">
                                    <input 
                                    accept="image/*"
                                    onChange={this.onImageChange.bind(this)}
                                        type="file" className="custom-file-input"
                                        id="inputFile" />
                                    <label className="custom-file-label" htmlFor="inputFile">Choose file</label>
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
                            <img id="target" 
                             style={{width: 200,height:200}} 
                            src={image|| '#'} />
                          
                        </Col>
                    </FormGroup>
        </Form>
      )
    }
  }

'use strict';
import React, { Component } from 'react';
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
import { Link } from 'react-router';

import ReactTable from 'react-table'


var helpers = require('../../../javascripts/helpers')
import { debug } from '../../../javascripts/helpers';

import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/photos';

const columns = [
    {
        Header: "",
        Cell: (row) => {
            return <div><img height={50} src={row.original.url} /></div>
        },
        className: 'text-center', style: {}
    },
    {
        Header: 'Title',
        accessor: 'title',

    },
    {
        Header: 'ID',
        accessor: 'id',
        id: 'id',
        className: 'text-center', style: {}
    },
    {
        header: '',
        accessor: 'id',
        id: 'click-me-button',
        Cell: (row) => {
            return <div> 
                <NavLink href={"/#/jobs/" + row.original.id}><Button color="primary">primary</Button></NavLink>
            
            </div>
         


        },
        className: 'text-center', style: {}
    }
]


export default class Photo extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            loading: false,
            error: null,
            data: []
        }
        this.reactTable = null
    }
    componentDidMount(nextProps, nextState) {
        this.setState({ loading: true });
        axios.get(API)
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

        if (this.state.loading) {
            return <p>Loading ...</p>;
        }
        return (
            <div style={{ height: '100%' }}>

                <ReactTable
                    showPageSizeOptions={true}
                    showPagination={true}
                    sortable={true}
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    filterable
                    loading={loading}
                >
                </ReactTable>
            </div>
        )
    }
}


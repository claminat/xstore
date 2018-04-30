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

import ReactTable from 'react-table'
import axios from 'axios';


var helpers = require('../../../javascripts/helpers')
import { debug } from '../../../javascripts/helpers';
import Loading from "../common/Loading";
import Service from './service';
import TableRow from './TableRow';

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
            return <TableRow row={row} />;
            // return <div>
            //     <NavLink href={"/#/admin/photo/" + row.original.id + "/" + row.original._id}>
            //         <Button color="warning">Edit</Button>
            //     </NavLink>
            //     <form onSubmit={this.handleSubmit}>
            //         <input type="submit" value="Delete" className="btn btn-danger" />
            //         <NavLink href={"/#/admin/photo/" + row.original.id + "/" + row.original._id}>
            //             <Button color="danger">Delete</Button>
            //         </NavLink>
            //     </form>


            // </div>
        },
        className: 'text-center', style: {}
    }
]


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            loading: false,
            error: null,
            data: []
        }
        this.reactTable = null
        this.service = new Service();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(nextProps, nextState) {
        this.setState({ loading: true });
        axios.get('/photo')
            .then(res => {
                if (debug) {
                    console.log('res', res);
                }
                const data = res.data;
                this.setState({ data, loading: false });
            }).catch(error => this.setState({ error, loading: false }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.service.deleteData(this.props.obj._id);
      }

    render() {
        console.log(this.props)

        const { data, error, loading } = this.state;
        if (error) {
            return <p>{this.state.error.message}</p>;
        }

        if (loading) {
            return <Loading />
        }



        return (
            <div style={{ height: '100%' }}>
                <NavLink href={'/#/admin/photo'}>
                    <Button color="success">Create</Button>
                </NavLink>
                <ReactTable
                    showPageSizeOptions={true}
                    showPagination={true}
                    sortable={true}
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    filterable
                    loading={loading}>
                </ReactTable>
            </div>
        )
    }
}


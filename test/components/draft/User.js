//https://daveceddia.com/ajax-requests-in-react/
//http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
//https://github.com/reactstrap/reactstrap/tree/master/src

'use strict';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ReactTable from 'react-table'

var helpers = require('../../../javascripts/helpers')
import axios from 'axios';
import { debug } from 'util';
const API = 'http://localhost:8001/user';

const columns = [
    {Header: 'Name',accessor: 'name'},
    {Header: 'Username',id: 'username',accessor: d => d.lastName},
    {Header: 'Email',accessor: 'Email'}
]


const withFetching = (url) => (Comp) =>
    class WithFetching extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isLoading: false,
                error: null,
                data: []
            };
        }

        componentDidMount() {
            console.log('componentDidMount');
            this.setState({ isLoading: true });
            axios.get(url)
                .then(res => {
                    if (debug) {
                        console.log('res', res);
                    }
                    const data = res.data;
                    this.setState({ data, isLoading: false });
                }).catch(error => this.setState({ error, isLoading: false }));
        }

        render() {
            return <Comp {...this.props} {...this.state} />
        }
    }

const User = ({ data, isLoading, error }) => {
    var items = data;
    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <div style={{ height: '100%' }}>
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={15} />
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item =>
                    <tr key={item._id}>
                        <th scope="row">#</th>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                    </tr>
                )}
            </tbody>
        </Table>
        </div>
    )


    // return (
    //     <Table>
    //         <thead>
    //             <tr>
    //                 <th>#</th>
    //                 <th>Name</th>
    //                 <th>Username</th>
    //                 <th>Email</th>
    //                 <th>Phone</th>
    //                 <th>Website</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {items.map(item =>
    //                 <tr key={item._id}>
    //                     <th scope="row">#</th>
    //                     <td>{item.name}</td>
    //                     <td>{item.username}</td>
    //                     <td>{item.email}</td>
    //                     <td>{item.phone}</td>
    //                     <td>{item.website}</td>
    //                 </tr>
    //             )}
    //         </tbody>
    //     </Table>
    // );



}


export default withFetching(API)(User);
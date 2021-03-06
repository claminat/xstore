//https://github.com/javascript-playground/remote-data-react-screencasts/blob/master/src/Github.js
//https://github.com/rwieruch/react-data-fetching/blob/master/src/App.js

import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
        .then(response => {
          if (response.ok) {
            console.log('response',response.json());
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Comp { ...this.props } { ...this.state } />
    }
  }

const Fetching = ({ data, isLoading, error }) => {
  const hits = data.hits || [];
  console.log('data',data);

  console.log('data.hits',data.hits);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      {hits.map(hit =>
        <div key={hit.objectID}>
          <a href={hit.url}>{hit.title}</a>
        </div>
      )}
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(Fetching);
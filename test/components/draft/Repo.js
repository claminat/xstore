import React from 'react'

export default class Repo extends React.Component {
  constructor(props) {
    super(props);   
  }
  render() {
    console.log('props',this.props)
    console.log('match',this.props.match)
    return (
      <div>
        <h2>userName: {this.props.match.params.userName}</h2>
        <h2>repoName: {this.props.match.params.repoName}</h2>
      </div>
    )
  }
}

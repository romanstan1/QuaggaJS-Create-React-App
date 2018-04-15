import React, { Component } from 'react';

class Result extends Component {
  render() {
    const result = this.props.result

    if (!result) { return null }

    return (
      <li> {result.codeResult.code} [{result.codeResult.format}] </li>
    )
  }

}

export default Result

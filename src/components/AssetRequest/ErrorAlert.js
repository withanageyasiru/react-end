import React, { Component } from 'react';


export default class ErrorAlert extends Component {
  //dynamic message  props=msg
  render() {
    return (
      <div className="alert alert-danger" role="alert">
        {/*dynamic msg*/}
        {this.props.msg}
      </div>
    );
  }
}


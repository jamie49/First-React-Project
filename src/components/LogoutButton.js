import React, { Component } from 'react';

class LogoutButton extends Component {

  render() {
    return (
      <button id="logoutButton" onClick={this.props.logoutHandler}>Logout</button>
    );
  }

}

export default LogoutButton;
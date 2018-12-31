import React, { Component } from 'react';

class LoginButton extends Component {

  render() {
    return (
      <button id="loginButton" onClick={this.props.loginHandler}>Login</button>
    );
  }

}

export default LoginButton;
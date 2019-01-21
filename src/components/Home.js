import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Home extends Component {
  
  render() {

    let button;

    if (this.props.loggedIn){
      button = <LogoutButton logoutHandler={this.props.logoutHandler} />;
    } else {
      button = <LoginButton loginHandler={this.props.loginHandler} />;
    }

    return (
      <div>
        <h2>Title 1: {this.props.title1}</h2>
        <button id="buttonOne" onClick={this.props.changeTitleOne}>Change Title</button>
        <hr />
        <h2>Title 2: {this.props.title2}</h2>
        <input id="inputElement" type="input" onChange={this.props.changeTitleTwo} />
        <hr />
        <h2>Login Status:</h2>
        {this.props.loggedIn ? (
          <p>Logged In</p>
        ) : (
          <p>Logged Out</p>
        )}
        {button}
      </div>
    )

  }

}

export default Home;
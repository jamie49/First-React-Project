import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return (
      <div>
        <NavLink className="home" to="/">Home</NavLink>
        <NavLink to="/new">New Page</NavLink>
      </div>
    );
  }

}

export default Navigation;
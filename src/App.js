import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NewPage from './components/NewPage';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      title1: "Welcome",
      loggedIn: false
    }

  }

  loginHandler = () => {
    this.setState({
      loggedIn: true
    });
  }

  logoutHandler = () => {
    this.setState({
      loggedIn: false
    });
  }

  changeTitleOne = (e) => {
    e.preventDefault();
    this.setState({ title1: "New Title!" });
  }

  changeTitleTwo = (e) => {
    this.setState({ title2: e.target.value });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="mainNav">
            <Navigation />
          </div>
          <Switch>
            <Route path="/" exact render={(props) => (
              <Home
                {...this.state}
                changeTitleOne={this.changeTitleOne}
                changeTitleTwo={this.changeTitleTwo}
                loginHandler={this.loginHandler}
                logoutHandler={this.logoutHandler}
              />
            )} />
            <Route path="/new" component={NewPage} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
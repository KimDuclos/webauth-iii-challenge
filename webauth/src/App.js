import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink exact to='/'>
            { '' }
            | Sign In{ '' }
          </NavLink>
          <NavLink to="/signup">| Sign Up |</NavLink>
          <NavLink to='/Users'> Users |</NavLink>
        </header>
      <>
        <Route exact path='/' component={Login} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/Users' component={Users} />
      </>
    </>
    );
  }
}

export default App;
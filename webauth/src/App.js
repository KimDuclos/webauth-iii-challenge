import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Login from './components/login';
import SignUp from './components/signup';
import Users from './components/users';

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
          <NavLink to='/users'> Users |</NavLink>
        </header>
      <>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/users' component={Users} />
      </>
    </>
    );
  }
}

export default App;
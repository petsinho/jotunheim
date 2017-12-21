import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import ProjectDetails from '../ProjectDetails';

class Header extends Component {
  render() {
    return (
      <Switch>
        <Route path='/project/:id' component={ProjectDetails}/>
      </Switch>
    );
  }
}

export default Header;

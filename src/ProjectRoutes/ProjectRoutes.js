import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';

const Header = () =>
  (<Switch>
    <Route path="/project/:id" component={ProjectDetails} />
  </Switch>);


export default Header;

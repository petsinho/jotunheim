import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';
import FunFacts from '../FunFacts';
import Interests from '../Interests';
import Contact from '../Contact';

const Header = () =>
  (<Switch>
    <Route path="/project/:id" component={ProjectDetails} />
    <Route path="/funFacts" component={FunFacts} />
    <Route path="/interests" component={Interests} />
    <Route path="/contact" component={Contact} />
  </Switch>);

export default Header;

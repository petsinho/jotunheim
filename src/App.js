import React, { Component } from 'react';
import Faye from 'faye';
import PropTypes from 'prop-types';
import deflate from 'permessage-deflate';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Typewriter from './Typewriter/Typewriter';
import ProjectRoutes from './ProjectRoutes/ProjectRoutes';
import store from './store';

const { wsServerUrl, wsPort } = require('./secrets');
const serverUrl = wsServerUrl || 'http://muspellheimapp.t37znx8fuu.us-east-1.elasticbeanstalk.com';
const webSocketPort = wsPort || 53368;


class App extends Component {
  static propTypes = {
    projects: PropTypes.array,
  };

  renderTyper = () =>
    <Typewriter />;

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ProjectRoutes />
          <Switch>
            <Route exact path="/" render={this.renderTyper} />
          </Switch>
          {/* <Switch>
            <Route exact path="/" render={this.renderPreviews} />
          </Switch> */}
          {/* <div className="copyRight">
            Copyright 2018 - Panagiotis Petsas
          </div> */}
        </div>
      </Router>
    );
  }
}

const getSomePictures = (howMany = Math.ceil(Math.random() * 10)) => {
  const result = [];
  for (let i = 0; i < howMany; i++) {
    const picNumber = Math.ceil(Math.random() * 100);
    result.push(`https://picsum.photos/300?image=${picNumber}`);
  }
  return result;
};

const action = ({ type, payload }) => store.dispatch({ type, payload });


const withImages = (projects) =>  projects.map(p => 
  ({
    ...p,
    pictures: getSomePictures(),
}));

/* ----------------- With Subscription (need ssl for wss)  */
// const client = new Faye.Client(`${serverUrl}:${webSocketPort}`);
// // const client = new Faye.Client(`http://localhost:${webSocketPort}`);
// client.addWebsocketExtension(deflate);


// const projectsSubscription = client.subscribe('/projects', (projects =  require('./offline-data.json')) => {
//   //  Call reducer that will update store with projects
//   // Add pics if not any
//   let projectsWithImages = projects;
//   if (!projects[0].pictures) {
//     projectsWithImages = withImages(projects)
//   }
//   action({ type: 'projects', payload: projectsWithImages });
// });

// projectsSubscription.callback(() => {
//   console.log('[SUBSCRIBE PROJECTS SUCCEEDED]');
// });

// projectsSubscription.errback((error) => {
//   console.log('[SUBSCRIBE PROJECTS FAILED]', error);
// });

// const categoriesSubscription = client.subscribe('/categories', (categories) => {
//   action({ type: 'categories', payload: categories });
// });

// categoriesSubscription.callback(() => {
//   console.log('[SUBSCRIBE CATEGORIES SUCCEEDED]');
// });

// categoriesSubscription.errback((error) => {
//   console.log('[SUBSCRIBE CATEGORIES FAILED]', error);
// });
/* ------------------   With Subscription (need ssl for wss)  */




export default connect(
  state => ({
    projects: state.projects,
  }),
  dispatch => ({
    // getActiveProjects: () => dispatch({
    //   type: 'projects',
    // }),
    // onHide: () => dispatch({
    //   type: action.setDisplay,
    //   display: display.none,
    // }),
    // onShow: () => dispatch({
    //   type: action.setDisplay,
    //   display: display.button,
    // }),
  }),
)(App);

// export default App;

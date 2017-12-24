import React, { Component } from 'react';
import Faye from 'faye';
import PropTypes from 'prop-types';
import deflate from 'permessage-deflate';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import ProjectPreviews from './ProjectPreview/ProjectPreviews';
import Typewriter from './Typewriter/Typewriter';
import ProjectRoutes from './ProjectRoutes/ProjectRoutes';
import store from './store';

const { wsServerUrl, wsPort } = require('./secrets');


class App extends Component {
  static propTypes = {
    projects: PropTypes.array,
  };

  renderPreviews = () =>
    <ProjectPreviews projects={this.props.projects} />;

  renderTyper = () =>
    <Typewriter projects={this.props.projects} />;

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ProjectRoutes />
          <Switch>
            <Route exact path="/" render={this.renderTyper} />
          </Switch>
          <Switch>
            <Route exact path="/" render={this.renderPreviews} />
          </Switch>
            implement 🚧 ⛑
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

const client = new Faye.Client(`${wsServerUrl}:${wsPort}`);
// const client = new Faye.Client(`http://localhost:${wsPort}`);
client.addWebsocketExtension(deflate);

const subscription = client.subscribe('/projects', (projects) => {
  //  Call reducer that will update store with projects
  // Add pics if not any
  let projectsWithImages = projects;
  if (!projects[0].pictures) {
    projectsWithImages = projects.map(p => ({
      ...p,
      pictures: getSomePictures(),
    }));
  }
  action({ type: 'projects', payload: projectsWithImages });
});

subscription.callback(() => {
  console.log('[SUBSCRIBE SUCCEEDED]');
});

subscription.errback((error) => {
  console.log('[SUBSCRIBE FAILED]', error);
});

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

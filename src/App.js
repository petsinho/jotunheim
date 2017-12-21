import React, { Component } from 'react';
import Faye from 'faye';
import PropTypes from 'prop-types';
import deflate from 'permessage-deflate';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
     <ProjectPreviews projects={this.props.projects}/>;

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Typewriter/>
          <ProjectRoutes/>
          <Switch>
            <Route exact path='/' render={this.renderPreviews}/>
          </Switch>
            implement 🚧 ⛑
        </div>
      </Router>
    );
  }
}

const action = ({ type, payload }) => store.dispatch({ type, payload });

const client = new Faye.Client(`${wsServerUrl}:${wsPort}`);
// const client = new Faye.Client(`http://localhost:${wsPort}`);
client.addWebsocketExtension(deflate);

const subscription = client.subscribe('/projects', (projects) => {
  //  Call reducer that will update store with projects
  action({ type: 'projects', payload: projects });
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
  })
)(App);

// export default App;

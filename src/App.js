import React, { Component } from 'react';
import Faye from 'faye';
import PropTypes from 'prop-types';
import deflate from 'permessage-deflate';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { flipInY } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Header from './Header/Header';
import Typewriter from './Typewriter/Typewriter';
import ProjectRoutes from './ProjectRoutes/ProjectRoutes';
import store from './store';
const { wsServerUrl, wsPort } = require('./secrets');
const serverUrl =
  wsServerUrl ||
  'http://muspellheimapp.t37znx8fuu.us-east-1.elasticbeanstalk.com';
const webSocketPort = wsPort || 53368;

const styles = {
  flipInY: {
    animation: 'x 2s',
    animationName: Radium.keyframes(flipInY, 'flipInY')
  }
};

class App extends Component {
  static propTypes = {
    projects: PropTypes.array
  };

  renderTyper = () => <Typewriter />;

  renderIntro = () => (
    <div style={{ color: 'white', margin: '20px' }}>
      <div className="imageWrap">
        <StyleRoot>
          <div style={styles.flipInY}>
            <div style={{ margin: '50px' }}>
              <img
                width="300"
                height="300"
                src="https://s3.amazonaws.com/jotunheim/website/images/home/me300.png"
              />
            </div>
          </div>
        </StyleRoot>
      </div>
      <div className="about">
        Hey there! I'm Panagiotis Petsas,
        <p>
          Full Stack software engineer passionate about Web, Game Development
          and IoT enthusiast from Greece.
        </p>
        <p>Currently living in Germany</p>
        <div className="myQuote">
          <blockquote>
            The only repetitive task I am willing to do, is automating my
            repetitive tasks.
            <cite>myself</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ProjectRoutes />
          <Switch>
            <Route exact path="/" render={this.renderIntro} />
            <Route exact path="/" render={this.renderTyper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const getPicturesFromMarkdown = (markdown) => {
  const result = [];
  const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/g;
  const imageUrls = markdown.match(imageRegex);
  if(imageUrls && imageUrls.length ) {
    return imageUrls;
  }
  for (let i = 0; i < 3; i++) {
    const picNumber = Math.ceil(Math.random() * 100);
    result.push(`https://picsum.photos/300?image=${picNumber}`);
  }
  return result;
};

const action = ({ type, payload }) => store.dispatch({ type, payload });

const withImages = projects =>
  projects.map(p => ({
    ...p,
    pictures: getPicturesFromMarkdown(p.description)
  }));

/* ----------------- With Subscription  */
// const client = new Faye.Client(`${serverUrl}:${webSocketPort}`);
// // const client = new Faye.Client(`http://localhost:${webSocketPort}`);
// client.addWebsocketExtension(deflate);

// const projectsSubscription = client.subscribe('/projects', projects => {
//   //  Call reducer that will update store with projects
//   // Add pics if not any
//   console.log('=== projs fetched ', projects);
//   let projectsWithImages = projects;
//   if (!projects[0].pictures) {
//     projectsWithImages = withImages(projects);
//   }
//   action({ type: 'projects', payload: projectsWithImages });
// });

// projectsSubscription.callback(() => {
//   console.log('[SUBSCRIBE PROJECTS SUCCEEDED]');
// });

// projectsSubscription.errback(error => {
//   console.log('[SUBSCRIBE PROJECTS FAILED]', error);
// });

// const categoriesSubscription = client.subscribe('/categories', categories => {
//   action({ type: 'categories', payload: categories });
// });

// categoriesSubscription.callback(() => {
//   console.log('[SUBSCRIBE CATEGORIES SUCCEEDED]');
// });

// categoriesSubscription.errback(error => {
//   console.log('[SUBSCRIBE CATEGORIES FAILED]', error);
// });

/* ------------------   With Subscription */


/* ---------------- Offline  */
// Using offline for now innstead of the musspelheim service, to avoid extra charges
fetch('https://s3.amazonaws.com/jotunheim/website/content/projects/projects-offline.json')
  .then( async (res) => {
    const projects = await res.json();
    return  action({ type: 'projects', payload: withImages(projects) });
  })
  .catch(err => console.error('error fetching offline data: ', err))

/*----------------  Offline */
export default connect(
  state => ({
    projects: state.projects
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

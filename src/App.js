import React, { Component } from 'react';
import Typist from 'react-typist';
import Faye from 'faye';
import deflate from 'permessage-deflate';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import ProjectPreviews from './ProjectPreview/ProjectPreviews';
import Typewriter from './Typewriter/Typewriter';

const { wsServerUrl, wsPort } = require('./secrets');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Typewriter />
          <ProjectPreviews/>
         TODO: implement 🚧 ⛑
      </div>
    );
  }
}

export default App;

const client = new Faye.Client(`${wsServerUrl}:${wsPort}`);
// const client = new Faye.Client(`http://localhost:${wsPort}`);
client.addWebsocketExtension(deflate);

const subscription = client.subscribe('/messages', (message) => {
  console.log('got msg!!');
  alert(`Got a message: ${message.text}`);
});

subscription.callback(() => {
  console.log('[SUBSCRIBE  2 SUCCEEDED]');
});

subscription.errback((error) => {
  console.log('[SUBSCRIBE FAILED]', error);
});

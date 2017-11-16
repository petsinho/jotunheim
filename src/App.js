import React, { Component } from 'react';
import Typist from 'react-typist';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import ProjectPreviews from './ProjectPreview/ProjectPreviews';
import Typewriter from './Typewriter/Typewriter';

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

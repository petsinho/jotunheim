import React, { Component } from 'react';
import Typist from 'react-typist';
import './Typewriter.css';

const cursor = {
  show: true,
  blink: true,
  element: '🀆',
  hideWhenDone: true,
  hideWhenDoneDelay: 3000,
};

class Typewriter extends Component {
  render() {
    return (
      <div>
        <Typist className="typist-text" cursor={cursor} avgTypingDelay={100}>
          Leave this page...
          {<Typist.Delay ms={1200} />}
          Immediately
        </Typist>
      </div>
    );
  }
}

export default Typewriter;

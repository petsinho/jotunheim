import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './Interests.css';

class Interests extends Component {

  renderVideo(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId="HV1-AjwDJwM"
        opts={opts}
        onReady={this._onReady}
      />
    );

  }
  render() {
    return (
      <div>
        <div style={{ margin: '50px'}}>
          {this.renderVideo()}
        </div>
        <div className="interestsText">
        In my <span style={{fontSize: 'medium'}}> (little) </span>free time...
          <ul>
            <li>I like to create and play games 🎮</li>
            <li>work on IoT projects 🤖</li>
            <li>go running/jogging/bikin‍g 🚴 and hit the gym</li>
            <li>play guitar (level: noob)</li>
            <li>play chess (level: intermediate)</li>
            <li>watch cartoons/series</li>
            <li>train my cat to ignore me (level: pro)</li>
            <li>travel ✈ as much as possible. Time & money spent on trips are never wasted.</li>
          </ul>
        </div>
      </div>
    );
  }
}

Interests.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default Interests;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';
import Typist from 'react-typist';

import './FunFacts.css';

const factoids = [
  'In 2015, more people were killed from injuries caused by taking a selfie than by shark attacks.',
  'Heart attacks are more likely to happen on a Monday.',
  'The following sentence is a palindrome: Do geese see God?',
  'The Titanic was the first ship to use the SOS signal.',
  'The French language has seventeen different words for ‘surrender’',
  'Bob Dylan’s real name is Robert Zimmerman.',
  'A small child could swim through the veins of a blue whale.',
  'Hewlett-Packard’s name was decided in a coin toss.',
  'The Twitter bird actually has a name – Larry.',
  'If you leave everything to the last minute… it will only take a minute.',
  'An apple, potato, and onion all taste the same if you eat them with your nose plugged.',
  'In England, in the 1880’s, “Pants” was considered a dirty word.',
  'Pirates wore earrings because they believed it improved their eyesight.',
  'The Pokémon Hitmonlee and Hitmonchan are based off of Bruce Lee and Jackie Chan.',
];

const getRandomFact = () =>
  factoids[Math.floor(Math.random() * factoids.length)];

class FunFacts extends Component {
  state = {
    factoid: getRandomFact(),
  };

  getNewFact() {
    const newf = getRandomFact();
    console.log('new :', newf);
    this.setState({
      factoid: newf,
    });
  }

  renderTypist() {
    <Typist className="typist-text" avgTypingDelay={100}>
      {this.state.factoid}
    </Typist>;
  }

  render() {
    return (
      <div>
        <div className="project-detail">
          <Typist className="typist-text" avgTypingDelay={100}>
            {this.state.factoid}
          </Typist>
          <div style={{ marginTop: '150px', color: 'white' }}>
            If you liked this, you can come back for more!
            <div />
          </div>
        </div>
      </div>
    );
  }
}

FunFacts.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default FunFacts;

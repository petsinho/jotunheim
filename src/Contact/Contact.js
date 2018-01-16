import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <div className="project-detail" />
        <div className="contactText">
        Feel free to <strike>stalk</strike> find me on:
          <ul>
            <li><a target="_blank" href="https://github.com/petsinho" > GitHub </a> </li>
            <li><a target="_blank" href="https://www.linkedin.com/in/panagiotis-petsas-58784a13/" > LinkedIn </a> </li>
            <li><a target="_blank" href="https://twitter.com/petsinho" > Twitter </a> </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;

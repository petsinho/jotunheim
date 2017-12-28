import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-item"> Home </div>
        <div className="header-item"> Fun Facts </div>
        <div className="header-item"> Contact </div>
      </div>
    );
  }
}

export default Header;

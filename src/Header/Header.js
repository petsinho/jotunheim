import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Link style={{ textDecoration: 'none' }} to={'/'}>
          <div className="header-item"> Home </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={'/interests'}>
          <div className="header-item"> Interests </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={'/funFacts'}>
          <div className="header-item"> Fun Facts </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={'/contact'}>
          <div className="header-item"> Contact </div>
        </Link>
      </div>
    );
  }
}

export default Header;

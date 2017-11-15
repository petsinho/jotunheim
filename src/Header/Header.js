import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-item"> item 1 </div>
        <div className="header-item"> item 2 </div>
        <div className="header-item"> item 3 </div>
      </div>
    );
  }
}

export default Header;

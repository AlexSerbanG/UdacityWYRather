import React from 'react';
import { Logger } from '../Logger';
import { Nav } from '../Nav';
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <Nav />
          <Logger />
        </div>
      </div>);
  }
}

export default Header;

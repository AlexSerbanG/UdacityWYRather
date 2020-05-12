import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (<div className="nav">
      <Link to='/'>Home</Link>
      <Link to='/new'>New Question</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
    </div>);
  }
}

export default Nav;

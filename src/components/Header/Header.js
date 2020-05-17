import React from 'react';
import { Logger } from '../Logger';
import { Nav } from '../Nav';
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.navbar}>
          <Nav />
          <Logger />
        </div>
      </div>);
  }
}

export default Header;

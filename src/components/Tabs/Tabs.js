import React from 'react';
import styles from './Tabs.module.css';

class Tabs extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  setActive = (index) => {
    this.setState({
      activeTabIndex: index
    });
  }

  render() {
    const { activeTabIndex } = this.state;
    const { tabs } = this.props;
    const { content: Component } = tabs[activeTabIndex];
    return (
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <div key={tab.label} className={`${styles.tab} ${activeTabIndex === index ? styles.active : null}`} onClick={() => this.setActive(index)}>{tab.label}</div>
          ))}
        </div>
        <div className={styles.tabContent}>
          {Component()}
        </div>
      </div>
    )
  }
}

export default Tabs;

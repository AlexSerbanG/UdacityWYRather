import React from 'react';
import './Tabs.css';

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
      <div className="tabsContainer">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div key={tab.label} className={`tab${activeTabIndex === index ? ' active' : ''}`} onClick={() => this.setActive(index)}>{tab.label}</div>
          ))}
        </div>
        <div className="tabContent">
          <Component />
        </div>
      </div>
    )
  }
}

export default Tabs;

import React from 'react';
import { connect } from 'react-redux';

class Logger extends React.Component {
  render() {
    return (
      <div>
        LOGGER
      </div>
    )
  }
};

export default connect()(Logger);

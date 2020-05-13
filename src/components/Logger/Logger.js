import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/auth.redux';
import { withRouter } from 'react-router-dom';

class Logger extends React.Component {
  signOut = () => {
    const { actions, history } = this.props;
    actions.signOut();
    history.push('./');
  }

  render() {
    const { authedUser } = this.props;
    if (authedUser) {
      return (<div>
        Hello, {authedUser.name}
        <button onClick={this.signOut}>Sign out</button>
      </div>)
    }
    return null;
  }
};

const mapStateToProps = ({ auth, users: { byId } }) => ({
  authedUser: auth.authedUser ? byId[auth.authedUser] : null,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logger));

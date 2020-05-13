import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/auth.redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = () => {
    const { value } = this.state;
    this.props.actions.signIn(value);
  }

  render() {
    const { value } = this.state;
    const { users, location, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to={location.state.from} />
    }
    return (
      <div>
        <select value={value} onChange={this.handleChange}>
          <option value="" disabled>Select an user</option>
          {users.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
        </select>
        <div>
          <button onClick={this.handleSubmit}>Sign in</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, auth }) => ({
  users: users.allIds.map(id => users.byId[id]),
  isAuthenticated: auth.authedUser !== null,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

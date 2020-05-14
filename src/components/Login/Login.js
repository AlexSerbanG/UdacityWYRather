import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/auth.redux';

class Login extends React.Component {
  state = {
    value: '',
    error: null,
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit = () => {
    const { value } = this.state;
    const { actions, onSuccess, history } = this.props;
    actions.signIn(value)
      .then(onSuccess)
      .then(() => history.push(history.location.state.from))
      .catch(e => this.setState({
        error: e
      }));
  }

  render() {
    const { value, error } = this.state;
    const { users } = this.props;
    return (
      <div>
        <select value={value} onChange={this.handleChange}>
          <option value="" disabled>Select an user</option>
          {users.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
        </select>
        <div>
          <button onClick={this.handleSubmit}>Sign in</button>
        </div>
        <div>
          {error !== null && <p>Something went wrong. Please try again</p>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, auth }) => ({
  users: users.allIds.map(id => users.byId[id]),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

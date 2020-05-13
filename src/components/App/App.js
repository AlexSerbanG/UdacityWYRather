import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from '../_common/PrivateRoute';
import { Home } from '../Home';
import { Header } from '../Header';
import { NewQuestion } from '../NewQuestion';
import { Leaderboard } from '../Leaderboard';
import { Login } from '../Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux/users.redux';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="title">
            <p>React App</p>
          </div>
          <Header />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/new" component={NewQuestion} />
          <PrivateRoute path="/leaderboard" component={Leaderboard} />
          <Route path='/login' component={Login} />
        </div>
      </BrowserRouter>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(App);

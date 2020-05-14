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
import { actions as usersActions } from '../../redux/users.redux';
import { actions as questionsActions } from '../../redux/questions.redux';
import styles from './App.module.css';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <div className={styles.title}>
            <p>React App</p>
          </div>
          <Header />
          <div className={styles.content}>
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/new" component={NewQuestion} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <Route path='/login' component={({ history }) => <Login history={history} onSuccess={this.props.actions.getQuestions} />} />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...usersActions,
    ...questionsActions,
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(App);

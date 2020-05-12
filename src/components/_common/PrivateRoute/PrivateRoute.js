import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route {...rest} render={(props) => (
    authedUser
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const mapStateToProps = (state) => ({
  authedUser: null // { name: state.test.text }
});

export default connect(mapStateToProps)(PrivateRoute);

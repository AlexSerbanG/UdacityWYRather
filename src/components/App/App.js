import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from '../_common/PrivateRoute';
import { Home } from '../Home';
import { Header } from '../Header';
import { NewQuestion } from '../NewQuestion';
import { Leaderboard } from '../Leaderboard';
import './App.css';

function App() {
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
        <Route path='/login' />
      </div>
    </BrowserRouter>

  );
}

export default App;

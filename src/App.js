import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from './assets/rocket.png';
import Nav from './components/Nav';
import './App.css';
import Rockets from './components/rockets/Rockets';
import pullRockets from './redux/slices/rocketSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(pullRockets());
  });

  return (
    <div className="App">
      <Router>
        <header className="main-header">
          <img src={logo} className="logo" alt="logo" />
          <Nav />
        </header>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/missions" />
          <Route path="/profile" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

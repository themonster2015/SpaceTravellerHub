import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from './assets/rocket.png';
import Nav from './components/Nav';
import './App.css';
import Rockets from './components/rockets/Rockets';
import pullRockets from './redux/slices/rocketSlice';
import Missions from './components/missions/Missions';
import { displayMissions } from './redux/missions/missions';
import Profile from './components/profile/Profile';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(pullRockets());
    dispatch(displayMissions());
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
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
